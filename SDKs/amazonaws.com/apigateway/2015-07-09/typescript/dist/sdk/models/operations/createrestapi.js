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
var CreateRestApiHeaders = /** @class */ (function (_super) {
    __extends(CreateRestApiHeaders, _super);
    function CreateRestApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRestApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRestApiHeaders;
}(SpeakeasyBase));
export { CreateRestApiHeaders };
export var CreateRestApiRequestBodyApiKeySourceEnum;
(function (CreateRestApiRequestBodyApiKeySourceEnum) {
    CreateRestApiRequestBodyApiKeySourceEnum["Header"] = "HEADER";
    CreateRestApiRequestBodyApiKeySourceEnum["Authorizer"] = "AUTHORIZER";
})(CreateRestApiRequestBodyApiKeySourceEnum || (CreateRestApiRequestBodyApiKeySourceEnum = {}));
// CreateRestApiRequestBodyEndpointConfiguration
/**
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
**/
var CreateRestApiRequestBodyEndpointConfiguration = /** @class */ (function (_super) {
    __extends(CreateRestApiRequestBodyEndpointConfiguration, _super);
    function CreateRestApiRequestBodyEndpointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], CreateRestApiRequestBodyEndpointConfiguration.prototype, "types", void 0);
    __decorate([
        Metadata({ data: "json, name=vpcEndpointIds" }),
        __metadata("design:type", Array)
    ], CreateRestApiRequestBodyEndpointConfiguration.prototype, "vpcEndpointIds", void 0);
    return CreateRestApiRequestBodyEndpointConfiguration;
}(SpeakeasyBase));
export { CreateRestApiRequestBodyEndpointConfiguration };
var CreateRestApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateRestApiRequestBody, _super);
    function CreateRestApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiKeySource" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "apiKeySource", void 0);
    __decorate([
        Metadata({ data: "json, name=binaryMediaTypes" }),
        __metadata("design:type", Array)
    ], CreateRestApiRequestBody.prototype, "binaryMediaTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=cloneFrom" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "cloneFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=disableExecuteApiEndpoint" }),
        __metadata("design:type", Boolean)
    ], CreateRestApiRequestBody.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=endpointConfiguration" }),
        __metadata("design:type", CreateRestApiRequestBodyEndpointConfiguration)
    ], CreateRestApiRequestBody.prototype, "endpointConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=minimumCompressionSize" }),
        __metadata("design:type", Number)
    ], CreateRestApiRequestBody.prototype, "minimumCompressionSize", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "policy", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateRestApiRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateRestApiRequestBody.prototype, "version", void 0);
    return CreateRestApiRequestBody;
}(SpeakeasyBase));
export { CreateRestApiRequestBody };
var CreateRestApiRequest = /** @class */ (function (_super) {
    __extends(CreateRestApiRequest, _super);
    function CreateRestApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateRestApiHeaders)
    ], CreateRestApiRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRestApiRequestBody)
    ], CreateRestApiRequest.prototype, "request", void 0);
    return CreateRestApiRequest;
}(SpeakeasyBase));
export { CreateRestApiRequest };
var CreateRestApiResponse = /** @class */ (function (_super) {
    __extends(CreateRestApiResponse, _super);
    function CreateRestApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRestApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRestApiResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRestApiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRestApiResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RestApi)
    ], CreateRestApiResponse.prototype, "restApi", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateRestApiResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRestApiResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRestApiResponse.prototype, "unauthorizedException", void 0);
    return CreateRestApiResponse;
}(SpeakeasyBase));
export { CreateRestApiResponse };
