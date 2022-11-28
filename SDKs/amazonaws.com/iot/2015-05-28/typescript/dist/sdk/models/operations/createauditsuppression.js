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
var CreateAuditSuppressionHeaders = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionHeaders, _super);
    function CreateAuditSuppressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAuditSuppressionHeaders;
}(SpeakeasyBase));
export { CreateAuditSuppressionHeaders };
// CreateAuditSuppressionRequestBodyResourceIdentifier
/**
 * Information that identifies the noncompliant resource.
**/
var CreateAuditSuppressionRequestBodyResourceIdentifier = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionRequestBodyResourceIdentifier, _super);
    function CreateAuditSuppressionRequestBodyResourceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCertificateId" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "deviceCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" }),
        __metadata("design:type", shared.PolicyVersionIdentifier)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "policyVersionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleAliasArn" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBodyResourceIdentifier.prototype, "roleAliasArn", void 0);
    return CreateAuditSuppressionRequestBodyResourceIdentifier;
}(SpeakeasyBase));
export { CreateAuditSuppressionRequestBodyResourceIdentifier };
var CreateAuditSuppressionRequestBody = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionRequestBody, _super);
    function CreateAuditSuppressionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBody.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAuditSuppressionRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], CreateAuditSuppressionRequestBody.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIdentifier" }),
        __metadata("design:type", CreateAuditSuppressionRequestBodyResourceIdentifier)
    ], CreateAuditSuppressionRequestBody.prototype, "resourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressIndefinitely" }),
        __metadata("design:type", Boolean)
    ], CreateAuditSuppressionRequestBody.prototype, "suppressIndefinitely", void 0);
    return CreateAuditSuppressionRequestBody;
}(SpeakeasyBase));
export { CreateAuditSuppressionRequestBody };
var CreateAuditSuppressionRequest = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionRequest, _super);
    function CreateAuditSuppressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuditSuppressionHeaders)
    ], CreateAuditSuppressionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAuditSuppressionRequestBody)
    ], CreateAuditSuppressionRequest.prototype, "request", void 0);
    return CreateAuditSuppressionRequest;
}(SpeakeasyBase));
export { CreateAuditSuppressionRequest };
var CreateAuditSuppressionResponse = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionResponse, _super);
    function CreateAuditSuppressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuditSuppressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateAuditSuppressionResponse.prototype, "createAuditSuppressionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuditSuppressionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuditSuppressionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuditSuppressionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuditSuppressionResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuditSuppressionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuditSuppressionResponse.prototype, "throttlingException", void 0);
    return CreateAuditSuppressionResponse;
}(SpeakeasyBase));
export { CreateAuditSuppressionResponse };
