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
var PutIntegrationPathParams = /** @class */ (function (_super) {
    __extends(PutIntegrationPathParams, _super);
    function PutIntegrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], PutIntegrationPathParams.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], PutIntegrationPathParams.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], PutIntegrationPathParams.prototype, "restapiId", void 0);
    return PutIntegrationPathParams;
}(SpeakeasyBase));
export { PutIntegrationPathParams };
var PutIntegrationHeaders = /** @class */ (function (_super) {
    __extends(PutIntegrationHeaders, _super);
    function PutIntegrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutIntegrationHeaders;
}(SpeakeasyBase));
export { PutIntegrationHeaders };
export var PutIntegrationRequestBodyConnectionTypeEnum;
(function (PutIntegrationRequestBodyConnectionTypeEnum) {
    PutIntegrationRequestBodyConnectionTypeEnum["Internet"] = "INTERNET";
    PutIntegrationRequestBodyConnectionTypeEnum["VpcLink"] = "VPC_LINK";
})(PutIntegrationRequestBodyConnectionTypeEnum || (PutIntegrationRequestBodyConnectionTypeEnum = {}));
export var PutIntegrationRequestBodyContentHandlingEnum;
(function (PutIntegrationRequestBodyContentHandlingEnum) {
    PutIntegrationRequestBodyContentHandlingEnum["ConvertToBinary"] = "CONVERT_TO_BINARY";
    PutIntegrationRequestBodyContentHandlingEnum["ConvertToText"] = "CONVERT_TO_TEXT";
})(PutIntegrationRequestBodyContentHandlingEnum || (PutIntegrationRequestBodyContentHandlingEnum = {}));
var PutIntegrationRequestBodyTlsConfig = /** @class */ (function (_super) {
    __extends(PutIntegrationRequestBodyTlsConfig, _super);
    function PutIntegrationRequestBodyTlsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=insecureSkipVerification" }),
        __metadata("design:type", Boolean)
    ], PutIntegrationRequestBodyTlsConfig.prototype, "insecureSkipVerification", void 0);
    return PutIntegrationRequestBodyTlsConfig;
}(SpeakeasyBase));
export { PutIntegrationRequestBodyTlsConfig };
export var PutIntegrationRequestBodyTypeEnum;
(function (PutIntegrationRequestBodyTypeEnum) {
    PutIntegrationRequestBodyTypeEnum["Http"] = "HTTP";
    PutIntegrationRequestBodyTypeEnum["Aws"] = "AWS";
    PutIntegrationRequestBodyTypeEnum["Mock"] = "MOCK";
    PutIntegrationRequestBodyTypeEnum["HttpProxy"] = "HTTP_PROXY";
    PutIntegrationRequestBodyTypeEnum["AwsProxy"] = "AWS_PROXY";
})(PutIntegrationRequestBodyTypeEnum || (PutIntegrationRequestBodyTypeEnum = {}));
var PutIntegrationRequestBody = /** @class */ (function (_super) {
    __extends(PutIntegrationRequestBody, _super);
    function PutIntegrationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cacheKeyParameters" }),
        __metadata("design:type", Array)
    ], PutIntegrationRequestBody.prototype, "cacheKeyParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheNamespace" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "cacheNamespace", void 0);
    __decorate([
        Metadata({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "connectionId", void 0);
    __decorate([
        Metadata({ data: "json, name=connectionType" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "connectionType", void 0);
    __decorate([
        Metadata({ data: "json, name=contentHandling" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "contentHandling", void 0);
    __decorate([
        Metadata({ data: "json, name=credentials" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=passthroughBehavior" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "passthroughBehavior", void 0);
    __decorate([
        Metadata({ data: "json, name=requestParameters" }),
        __metadata("design:type", Map)
    ], PutIntegrationRequestBody.prototype, "requestParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=requestTemplates" }),
        __metadata("design:type", Map)
    ], PutIntegrationRequestBody.prototype, "requestTemplates", void 0);
    __decorate([
        Metadata({ data: "json, name=timeoutInMillis" }),
        __metadata("design:type", Number)
    ], PutIntegrationRequestBody.prototype, "timeoutInMillis", void 0);
    __decorate([
        Metadata({ data: "json, name=tlsConfig" }),
        __metadata("design:type", PutIntegrationRequestBodyTlsConfig)
    ], PutIntegrationRequestBody.prototype, "tlsConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "uri", void 0);
    return PutIntegrationRequestBody;
}(SpeakeasyBase));
export { PutIntegrationRequestBody };
var PutIntegrationRequest = /** @class */ (function (_super) {
    __extends(PutIntegrationRequest, _super);
    function PutIntegrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutIntegrationPathParams)
    ], PutIntegrationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutIntegrationHeaders)
    ], PutIntegrationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutIntegrationRequestBody)
    ], PutIntegrationRequest.prototype, "request", void 0);
    return PutIntegrationRequest;
}(SpeakeasyBase));
export { PutIntegrationRequest };
var PutIntegrationResponse = /** @class */ (function (_super) {
    __extends(PutIntegrationResponse, _super);
    function PutIntegrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutIntegrationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Integration)
    ], PutIntegrationResponse.prototype, "integration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutIntegrationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "unauthorizedException", void 0);
    return PutIntegrationResponse;
}(SpeakeasyBase));
export { PutIntegrationResponse };
