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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var DeleteConfigConfigTypeEnum;
(function (DeleteConfigConfigTypeEnum) {
    DeleteConfigConfigTypeEnum["AntennaDownlink"] = "antenna-downlink";
    DeleteConfigConfigTypeEnum["AntennaDownlinkDemodDecode"] = "antenna-downlink-demod-decode";
    DeleteConfigConfigTypeEnum["AntennaUplink"] = "antenna-uplink";
    DeleteConfigConfigTypeEnum["DataflowEndpoint"] = "dataflow-endpoint";
    DeleteConfigConfigTypeEnum["Tracking"] = "tracking";
    DeleteConfigConfigTypeEnum["UplinkEcho"] = "uplink-echo";
    DeleteConfigConfigTypeEnum["S3Recording"] = "s3-recording";
})(DeleteConfigConfigTypeEnum || (DeleteConfigConfigTypeEnum = {}));
var DeleteConfigPathParams = /** @class */ (function (_super) {
    __extends(DeleteConfigPathParams, _super);
    function DeleteConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], DeleteConfigPathParams.prototype, "configId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=configType" }),
        __metadata("design:type", String)
    ], DeleteConfigPathParams.prototype, "configType", void 0);
    return DeleteConfigPathParams;
}(SpeakeasyBase));
export { DeleteConfigPathParams };
var DeleteConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteConfigHeaders, _super);
    function DeleteConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteConfigHeaders;
}(SpeakeasyBase));
export { DeleteConfigHeaders };
var DeleteConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteConfigRequest, _super);
    function DeleteConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConfigPathParams)
    ], DeleteConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConfigHeaders)
    ], DeleteConfigRequest.prototype, "headers", void 0);
    return DeleteConfigRequest;
}(SpeakeasyBase));
export { DeleteConfigRequest };
var DeleteConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteConfigResponse, _super);
    function DeleteConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConfigIdResponse)
    ], DeleteConfigResponse.prototype, "configIdResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConfigResponse.prototype, "dependencyException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteConfigResponse.prototype, "statusCode", void 0);
    return DeleteConfigResponse;
}(SpeakeasyBase));
export { DeleteConfigResponse };
