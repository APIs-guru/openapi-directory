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
var CreateDomainNameHeaders = /** @class */ (function (_super) {
    __extends(CreateDomainNameHeaders, _super);
    function CreateDomainNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDomainNameHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDomainNameHeaders;
}(SpeakeasyBase));
export { CreateDomainNameHeaders };
// CreateDomainNameRequestBodyEndpointConfiguration
/**
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
**/
var CreateDomainNameRequestBodyEndpointConfiguration = /** @class */ (function (_super) {
    __extends(CreateDomainNameRequestBodyEndpointConfiguration, _super);
    function CreateDomainNameRequestBodyEndpointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], CreateDomainNameRequestBodyEndpointConfiguration.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcEndpointIds" }),
        __metadata("design:type", Array)
    ], CreateDomainNameRequestBodyEndpointConfiguration.prototype, "vpcEndpointIds", void 0);
    return CreateDomainNameRequestBodyEndpointConfiguration;
}(SpeakeasyBase));
export { CreateDomainNameRequestBodyEndpointConfiguration };
// CreateDomainNameRequestBodyMutualTlsAuthentication
/**
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
var CreateDomainNameRequestBodyMutualTlsAuthentication = /** @class */ (function (_super) {
    __extends(CreateDomainNameRequestBodyMutualTlsAuthentication, _super);
    function CreateDomainNameRequestBodyMutualTlsAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truststoreUri" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truststoreVersion" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreVersion", void 0);
    return CreateDomainNameRequestBodyMutualTlsAuthentication;
}(SpeakeasyBase));
export { CreateDomainNameRequestBodyMutualTlsAuthentication };
export var CreateDomainNameRequestBodySecurityPolicyEnum;
(function (CreateDomainNameRequestBodySecurityPolicyEnum) {
    CreateDomainNameRequestBodySecurityPolicyEnum["Tls10"] = "TLS_1_0";
    CreateDomainNameRequestBodySecurityPolicyEnum["Tls12"] = "TLS_1_2";
})(CreateDomainNameRequestBodySecurityPolicyEnum || (CreateDomainNameRequestBodySecurityPolicyEnum = {}));
var CreateDomainNameRequestBody = /** @class */ (function (_super) {
    __extends(CreateDomainNameRequestBody, _super);
    function CreateDomainNameRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateArn" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateBody" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "certificateBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateChain" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "certificateChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateName" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "certificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePrivateKey" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "certificatePrivateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointConfiguration" }),
        __metadata("design:type", CreateDomainNameRequestBodyEndpointConfiguration)
    ], CreateDomainNameRequestBody.prototype, "endpointConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" }),
        __metadata("design:type", CreateDomainNameRequestBodyMutualTlsAuthentication)
    ], CreateDomainNameRequestBody.prototype, "mutualTlsAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownershipVerificationCertificateArn" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "ownershipVerificationCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalCertificateArn" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "regionalCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalCertificateName" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "regionalCertificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPolicy" }),
        __metadata("design:type", String)
    ], CreateDomainNameRequestBody.prototype, "securityPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateDomainNameRequestBody.prototype, "tags", void 0);
    return CreateDomainNameRequestBody;
}(SpeakeasyBase));
export { CreateDomainNameRequestBody };
var CreateDomainNameRequest = /** @class */ (function (_super) {
    __extends(CreateDomainNameRequest, _super);
    function CreateDomainNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainNameHeaders)
    ], CreateDomainNameRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDomainNameRequestBody)
    ], CreateDomainNameRequest.prototype, "request", void 0);
    return CreateDomainNameRequest;
}(SpeakeasyBase));
export { CreateDomainNameRequest };
var CreateDomainNameResponse = /** @class */ (function (_super) {
    __extends(CreateDomainNameResponse, _super);
    function CreateDomainNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainNameResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainNameResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomainNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainName)
    ], CreateDomainNameResponse.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainNameResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomainNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainNameResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainNameResponse.prototype, "unauthorizedException", void 0);
    return CreateDomainNameResponse;
}(SpeakeasyBase));
export { CreateDomainNameResponse };
