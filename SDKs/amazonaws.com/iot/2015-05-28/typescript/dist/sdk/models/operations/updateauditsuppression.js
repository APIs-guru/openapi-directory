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
var UpdateAuditSuppressionHeaders = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionHeaders, _super);
    function UpdateAuditSuppressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAuditSuppressionHeaders;
}(SpeakeasyBase));
export { UpdateAuditSuppressionHeaders };
// UpdateAuditSuppressionRequestBodyResourceIdentifier
/**
 * Information that identifies the noncompliant resource.
**/
var UpdateAuditSuppressionRequestBodyResourceIdentifier = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionRequestBodyResourceIdentifier, _super);
    function UpdateAuditSuppressionRequestBodyResourceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCertificateId" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "deviceCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" }),
        __metadata("design:type", shared.PolicyVersionIdentifier)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "policyVersionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleAliasArn" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBodyResourceIdentifier.prototype, "roleAliasArn", void 0);
    return UpdateAuditSuppressionRequestBodyResourceIdentifier;
}(SpeakeasyBase));
export { UpdateAuditSuppressionRequestBodyResourceIdentifier };
var UpdateAuditSuppressionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionRequestBody, _super);
    function UpdateAuditSuppressionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBody.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], UpdateAuditSuppressionRequestBody.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIdentifier" }),
        __metadata("design:type", UpdateAuditSuppressionRequestBodyResourceIdentifier)
    ], UpdateAuditSuppressionRequestBody.prototype, "resourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressIndefinitely" }),
        __metadata("design:type", Boolean)
    ], UpdateAuditSuppressionRequestBody.prototype, "suppressIndefinitely", void 0);
    return UpdateAuditSuppressionRequestBody;
}(SpeakeasyBase));
export { UpdateAuditSuppressionRequestBody };
var UpdateAuditSuppressionRequest = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionRequest, _super);
    function UpdateAuditSuppressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAuditSuppressionHeaders)
    ], UpdateAuditSuppressionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAuditSuppressionRequestBody)
    ], UpdateAuditSuppressionRequest.prototype, "request", void 0);
    return UpdateAuditSuppressionRequest;
}(SpeakeasyBase));
export { UpdateAuditSuppressionRequest };
var UpdateAuditSuppressionResponse = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionResponse, _super);
    function UpdateAuditSuppressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAuditSuppressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAuditSuppressionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAuditSuppressionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAuditSuppressionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAuditSuppressionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAuditSuppressionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateAuditSuppressionResponse.prototype, "updateAuditSuppressionResponse", void 0);
    return UpdateAuditSuppressionResponse;
}(SpeakeasyBase));
export { UpdateAuditSuppressionResponse };
