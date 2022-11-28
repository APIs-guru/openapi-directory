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
var CreateStagePathParams = /** @class */ (function (_super) {
    __extends(CreateStagePathParams, _super);
    function CreateStagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], CreateStagePathParams.prototype, "restapiId", void 0);
    return CreateStagePathParams;
}(SpeakeasyBase));
export { CreateStagePathParams };
var CreateStageHeaders = /** @class */ (function (_super) {
    __extends(CreateStageHeaders, _super);
    function CreateStageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateStageHeaders;
}(SpeakeasyBase));
export { CreateStageHeaders };
export var CreateStageRequestBodyCacheClusterSizeEnum;
(function (CreateStageRequestBodyCacheClusterSizeEnum) {
    CreateStageRequestBodyCacheClusterSizeEnum["Zero5"] = "0.5";
    CreateStageRequestBodyCacheClusterSizeEnum["One6"] = "1.6";
    CreateStageRequestBodyCacheClusterSizeEnum["Six1"] = "6.1";
    CreateStageRequestBodyCacheClusterSizeEnum["Thirteen5"] = "13.5";
    CreateStageRequestBodyCacheClusterSizeEnum["TwentyEight4"] = "28.4";
    CreateStageRequestBodyCacheClusterSizeEnum["FiftyEight2"] = "58.2";
    CreateStageRequestBodyCacheClusterSizeEnum["OneHundredAndEighteen"] = "118";
    CreateStageRequestBodyCacheClusterSizeEnum["TwoHundredAndThirtySeven"] = "237";
})(CreateStageRequestBodyCacheClusterSizeEnum || (CreateStageRequestBodyCacheClusterSizeEnum = {}));
// CreateStageRequestBodyCanarySettings
/**
 * Configuration settings of a canary deployment.
**/
var CreateStageRequestBodyCanarySettings = /** @class */ (function (_super) {
    __extends(CreateStageRequestBodyCanarySettings, _super);
    function CreateStageRequestBodyCanarySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], CreateStageRequestBodyCanarySettings.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentTraffic" }),
        __metadata("design:type", Number)
    ], CreateStageRequestBodyCanarySettings.prototype, "percentTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageVariableOverrides" }),
        __metadata("design:type", Map)
    ], CreateStageRequestBodyCanarySettings.prototype, "stageVariableOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useStageCache" }),
        __metadata("design:type", Boolean)
    ], CreateStageRequestBodyCanarySettings.prototype, "useStageCache", void 0);
    return CreateStageRequestBodyCanarySettings;
}(SpeakeasyBase));
export { CreateStageRequestBodyCanarySettings };
var CreateStageRequestBody = /** @class */ (function (_super) {
    __extends(CreateStageRequestBody, _super);
    function CreateStageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheClusterEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateStageRequestBody.prototype, "cacheClusterEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheClusterSize" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "cacheClusterSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canarySettings" }),
        __metadata("design:type", CreateStageRequestBodyCanarySettings)
    ], CreateStageRequestBody.prototype, "canarySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentationVersion" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "documentationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "stageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateStageRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateStageRequestBody.prototype, "tracingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variables" }),
        __metadata("design:type", Map)
    ], CreateStageRequestBody.prototype, "variables", void 0);
    return CreateStageRequestBody;
}(SpeakeasyBase));
export { CreateStageRequestBody };
var CreateStageRequest = /** @class */ (function (_super) {
    __extends(CreateStageRequest, _super);
    function CreateStageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStagePathParams)
    ], CreateStageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStageHeaders)
    ], CreateStageRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateStageRequestBody)
    ], CreateStageRequest.prototype, "request", void 0);
    return CreateStageRequest;
}(SpeakeasyBase));
export { CreateStageRequest };
var CreateStageResponse = /** @class */ (function (_super) {
    __extends(CreateStageResponse, _super);
    function CreateStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateStageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Stage)
    ], CreateStageResponse.prototype, "stage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateStageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "unauthorizedException", void 0);
    return CreateStageResponse;
}(SpeakeasyBase));
export { CreateStageResponse };
