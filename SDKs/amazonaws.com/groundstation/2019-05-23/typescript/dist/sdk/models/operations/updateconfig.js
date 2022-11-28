var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var UpdateConfigConfigTypeEnum;
(function (UpdateConfigConfigTypeEnum) {
    UpdateConfigConfigTypeEnum["AntennaDownlink"] = "antenna-downlink";
    UpdateConfigConfigTypeEnum["AntennaDownlinkDemodDecode"] = "antenna-downlink-demod-decode";
    UpdateConfigConfigTypeEnum["AntennaUplink"] = "antenna-uplink";
    UpdateConfigConfigTypeEnum["DataflowEndpoint"] = "dataflow-endpoint";
    UpdateConfigConfigTypeEnum["Tracking"] = "tracking";
    UpdateConfigConfigTypeEnum["UplinkEcho"] = "uplink-echo";
    UpdateConfigConfigTypeEnum["S3Recording"] = "s3-recording";
})(UpdateConfigConfigTypeEnum || (UpdateConfigConfigTypeEnum = {}));
var UpdateConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateConfigPathParams, _super);
    function UpdateConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], UpdateConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configType" }),
        __metadata("design:type", String)
    ], UpdateConfigPathParams.prototype, "configType", void 0);
    return UpdateConfigPathParams;
}(SpeakeasyBase));
export { UpdateConfigPathParams };
var UpdateConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateConfigHeaders, _super);
    function UpdateConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateConfigHeaders;
}(SpeakeasyBase));
export { UpdateConfigHeaders };
// UpdateConfigRequestBodyConfigData
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
var UpdateConfigRequestBodyConfigData = /** @class */ (function (_super) {
    __extends(UpdateConfigRequestBodyConfigData, _super);
    function UpdateConfigRequestBodyConfigData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkConfig" }),
        __metadata("design:type", shared.AntennaDownlinkConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "antennaDownlinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" }),
        __metadata("design:type", shared.AntennaDownlinkDemodDecodeConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "antennaDownlinkDemodDecodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaUplinkConfig" }),
        __metadata("design:type", shared.AntennaUplinkConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "antennaUplinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataflowEndpointConfig" }),
        __metadata("design:type", shared.DataflowEndpointConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "dataflowEndpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3RecordingConfig" }),
        __metadata("design:type", shared.S3RecordingConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "s3RecordingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingConfig" }),
        __metadata("design:type", shared.TrackingConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "trackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplinkEchoConfig" }),
        __metadata("design:type", shared.UplinkEchoConfig)
    ], UpdateConfigRequestBodyConfigData.prototype, "uplinkEchoConfig", void 0);
    return UpdateConfigRequestBodyConfigData;
}(SpeakeasyBase));
export { UpdateConfigRequestBodyConfigData };
var UpdateConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateConfigRequestBody, _super);
    function UpdateConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configData" }),
        __metadata("design:type", UpdateConfigRequestBodyConfigData)
    ], UpdateConfigRequestBody.prototype, "configData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateConfigRequestBody.prototype, "name", void 0);
    return UpdateConfigRequestBody;
}(SpeakeasyBase));
export { UpdateConfigRequestBody };
var UpdateConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigRequest, _super);
    function UpdateConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConfigPathParams)
    ], UpdateConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConfigHeaders)
    ], UpdateConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateConfigRequestBody)
    ], UpdateConfigRequest.prototype, "request", void 0);
    return UpdateConfigRequest;
}(SpeakeasyBase));
export { UpdateConfigRequest };
var UpdateConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateConfigResponse, _super);
    function UpdateConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConfigIdResponse)
    ], UpdateConfigResponse.prototype, "configIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateConfigResponse.prototype, "dependencyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConfigResponse.prototype, "statusCode", void 0);
    return UpdateConfigResponse;
}(SpeakeasyBase));
export { UpdateConfigResponse };
