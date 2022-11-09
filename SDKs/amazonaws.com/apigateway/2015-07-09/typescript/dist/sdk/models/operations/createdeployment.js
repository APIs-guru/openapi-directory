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
var CreateDeploymentPathParams = /** @class */ (function (_super) {
    __extends(CreateDeploymentPathParams, _super);
    function CreateDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], CreateDeploymentPathParams.prototype, "restapiId", void 0);
    return CreateDeploymentPathParams;
}(SpeakeasyBase));
export { CreateDeploymentPathParams };
var CreateDeploymentHeaders = /** @class */ (function (_super) {
    __extends(CreateDeploymentHeaders, _super);
    function CreateDeploymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDeploymentHeaders;
}(SpeakeasyBase));
export { CreateDeploymentHeaders };
export var CreateDeploymentRequestBodyCacheClusterSizeEnum;
(function (CreateDeploymentRequestBodyCacheClusterSizeEnum) {
    CreateDeploymentRequestBodyCacheClusterSizeEnum["Zero5"] = "0.5";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["One6"] = "1.6";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["Six1"] = "6.1";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["Thirteen5"] = "13.5";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["TwentyEight4"] = "28.4";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["FiftyEight2"] = "58.2";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["OneHundredAndEighteen"] = "118";
    CreateDeploymentRequestBodyCacheClusterSizeEnum["TwoHundredAndThirtySeven"] = "237";
})(CreateDeploymentRequestBodyCacheClusterSizeEnum || (CreateDeploymentRequestBodyCacheClusterSizeEnum = {}));
// CreateDeploymentRequestBodyCanarySettings
/**
 * The input configuration for a canary deployment.
**/
var CreateDeploymentRequestBodyCanarySettings = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequestBodyCanarySettings, _super);
    function CreateDeploymentRequestBodyCanarySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=percentTraffic" }),
        __metadata("design:type", Number)
    ], CreateDeploymentRequestBodyCanarySettings.prototype, "percentTraffic", void 0);
    __decorate([
        Metadata({ data: "json, name=stageVariableOverrides" }),
        __metadata("design:type", Map)
    ], CreateDeploymentRequestBodyCanarySettings.prototype, "stageVariableOverrides", void 0);
    __decorate([
        Metadata({ data: "json, name=useStageCache" }),
        __metadata("design:type", Boolean)
    ], CreateDeploymentRequestBodyCanarySettings.prototype, "useStageCache", void 0);
    return CreateDeploymentRequestBodyCanarySettings;
}(SpeakeasyBase));
export { CreateDeploymentRequestBodyCanarySettings };
var CreateDeploymentRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequestBody, _super);
    function CreateDeploymentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cacheClusterEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateDeploymentRequestBody.prototype, "cacheClusterEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheClusterSize" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "cacheClusterSize", void 0);
    __decorate([
        Metadata({ data: "json, name=canarySettings" }),
        __metadata("design:type", CreateDeploymentRequestBodyCanarySettings)
    ], CreateDeploymentRequestBody.prototype, "canarySettings", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=stageDescription" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "stageDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "stageName", void 0);
    __decorate([
        Metadata({ data: "json, name=tracingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateDeploymentRequestBody.prototype, "tracingEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=variables" }),
        __metadata("design:type", Map)
    ], CreateDeploymentRequestBody.prototype, "variables", void 0);
    return CreateDeploymentRequestBody;
}(SpeakeasyBase));
export { CreateDeploymentRequestBody };
var CreateDeploymentRequest = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequest, _super);
    function CreateDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeploymentPathParams)
    ], CreateDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeploymentHeaders)
    ], CreateDeploymentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeploymentRequestBody)
    ], CreateDeploymentRequest.prototype, "request", void 0);
    return CreateDeploymentRequest;
}(SpeakeasyBase));
export { CreateDeploymentRequest };
var CreateDeploymentResponse = /** @class */ (function (_super) {
    __extends(CreateDeploymentResponse, _super);
    function CreateDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Deployment)
    ], CreateDeploymentResponse.prototype, "deployment", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "unauthorizedException", void 0);
    return CreateDeploymentResponse;
}(SpeakeasyBase));
export { CreateDeploymentResponse };
