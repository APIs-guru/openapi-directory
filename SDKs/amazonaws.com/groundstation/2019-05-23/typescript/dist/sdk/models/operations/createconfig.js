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
var CreateConfigHeaders = /** @class */ (function (_super) {
    __extends(CreateConfigHeaders, _super);
    function CreateConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateConfigHeaders;
}(SpeakeasyBase));
export { CreateConfigHeaders };
// CreateConfigRequestBodyConfigData
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
var CreateConfigRequestBodyConfigData = /** @class */ (function (_super) {
    __extends(CreateConfigRequestBodyConfigData, _super);
    function CreateConfigRequestBodyConfigData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkConfig" }),
        __metadata("design:type", shared.AntennaDownlinkConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "antennaDownlinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" }),
        __metadata("design:type", shared.AntennaDownlinkDemodDecodeConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "antennaDownlinkDemodDecodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaUplinkConfig" }),
        __metadata("design:type", shared.AntennaUplinkConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "antennaUplinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataflowEndpointConfig" }),
        __metadata("design:type", shared.DataflowEndpointConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "dataflowEndpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3RecordingConfig" }),
        __metadata("design:type", shared.S3RecordingConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "s3RecordingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingConfig" }),
        __metadata("design:type", shared.TrackingConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "trackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplinkEchoConfig" }),
        __metadata("design:type", shared.UplinkEchoConfig)
    ], CreateConfigRequestBodyConfigData.prototype, "uplinkEchoConfig", void 0);
    return CreateConfigRequestBodyConfigData;
}(SpeakeasyBase));
export { CreateConfigRequestBodyConfigData };
var CreateConfigRequestBody = /** @class */ (function (_super) {
    __extends(CreateConfigRequestBody, _super);
    function CreateConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configData" }),
        __metadata("design:type", CreateConfigRequestBodyConfigData)
    ], CreateConfigRequestBody.prototype, "configData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateConfigRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateConfigRequestBody.prototype, "tags", void 0);
    return CreateConfigRequestBody;
}(SpeakeasyBase));
export { CreateConfigRequestBody };
var CreateConfigRequest = /** @class */ (function (_super) {
    __extends(CreateConfigRequest, _super);
    function CreateConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConfigHeaders)
    ], CreateConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConfigRequestBody)
    ], CreateConfigRequest.prototype, "request", void 0);
    return CreateConfigRequest;
}(SpeakeasyBase));
export { CreateConfigRequest };
var CreateConfigResponse = /** @class */ (function (_super) {
    __extends(CreateConfigResponse, _super);
    function CreateConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConfigIdResponse)
    ], CreateConfigResponse.prototype, "configIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigResponse.prototype, "dependencyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConfigResponse.prototype, "statusCode", void 0);
    return CreateConfigResponse;
}(SpeakeasyBase));
export { CreateConfigResponse };
