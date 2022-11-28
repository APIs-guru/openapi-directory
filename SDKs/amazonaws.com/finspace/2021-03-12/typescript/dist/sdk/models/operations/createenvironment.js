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
var CreateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(CreateEnvironmentHeaders, _super);
    function CreateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEnvironmentHeaders;
}(SpeakeasyBase));
export { CreateEnvironmentHeaders };
export var CreateEnvironmentRequestBodyFederationModeEnum;
(function (CreateEnvironmentRequestBodyFederationModeEnum) {
    CreateEnvironmentRequestBodyFederationModeEnum["Federated"] = "FEDERATED";
    CreateEnvironmentRequestBodyFederationModeEnum["Local"] = "LOCAL";
})(CreateEnvironmentRequestBodyFederationModeEnum || (CreateEnvironmentRequestBodyFederationModeEnum = {}));
// CreateEnvironmentRequestBodyFederationParameters
/**
 * Configuration information when authentication mode is FEDERATED.
**/
var CreateEnvironmentRequestBodyFederationParameters = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBodyFederationParameters, _super);
    function CreateEnvironmentRequestBodyFederationParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationCallBackURL" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "applicationCallBackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributeMap" }),
        __metadata("design:type", Map)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "attributeMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federationProviderName" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "federationProviderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federationURN" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "federationUrn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samlMetadataDocument" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "samlMetadataDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samlMetadataURL" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyFederationParameters.prototype, "samlMetadataUrl", void 0);
    return CreateEnvironmentRequestBodyFederationParameters;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBodyFederationParameters };
var CreateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBody, _super);
    function CreateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federationMode" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "federationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federationParameters" }),
        __metadata("design:type", CreateEnvironmentRequestBodyFederationParameters)
    ], CreateEnvironmentRequestBody.prototype, "federationParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateEnvironmentRequestBody.prototype, "tags", void 0);
    return CreateEnvironmentRequestBody;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBody };
var CreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequest, _super);
    function CreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironmentHeaders)
    ], CreateEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEnvironmentRequestBody)
    ], CreateEnvironmentRequest.prototype, "request", void 0);
    return CreateEnvironmentRequest;
}(SpeakeasyBase));
export { CreateEnvironmentRequest };
var CreateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateEnvironmentResponse, _super);
    function CreateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateEnvironmentResponse)
    ], CreateEnvironmentResponse.prototype, "createEnvironmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "validationException", void 0);
    return CreateEnvironmentResponse;
}(SpeakeasyBase));
export { CreateEnvironmentResponse };
