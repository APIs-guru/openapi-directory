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
var DeleteAuditSuppressionHeaders = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionHeaders, _super);
    function DeleteAuditSuppressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteAuditSuppressionHeaders;
}(SpeakeasyBase));
export { DeleteAuditSuppressionHeaders };
// DeleteAuditSuppressionRequestBodyResourceIdentifier
/**
 * Information that identifies the noncompliant resource.
**/
var DeleteAuditSuppressionRequestBodyResourceIdentifier = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionRequestBodyResourceIdentifier, _super);
    function DeleteAuditSuppressionRequestBodyResourceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCertificateId" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "deviceCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" }),
        __metadata("design:type", shared.PolicyVersionIdentifier)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "policyVersionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleAliasArn" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBodyResourceIdentifier.prototype, "roleAliasArn", void 0);
    return DeleteAuditSuppressionRequestBodyResourceIdentifier;
}(SpeakeasyBase));
export { DeleteAuditSuppressionRequestBodyResourceIdentifier };
var DeleteAuditSuppressionRequestBody = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionRequestBody, _super);
    function DeleteAuditSuppressionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionRequestBody.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIdentifier" }),
        __metadata("design:type", DeleteAuditSuppressionRequestBodyResourceIdentifier)
    ], DeleteAuditSuppressionRequestBody.prototype, "resourceIdentifier", void 0);
    return DeleteAuditSuppressionRequestBody;
}(SpeakeasyBase));
export { DeleteAuditSuppressionRequestBody };
var DeleteAuditSuppressionRequest = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionRequest, _super);
    function DeleteAuditSuppressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAuditSuppressionHeaders)
    ], DeleteAuditSuppressionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteAuditSuppressionRequestBody)
    ], DeleteAuditSuppressionRequest.prototype, "request", void 0);
    return DeleteAuditSuppressionRequest;
}(SpeakeasyBase));
export { DeleteAuditSuppressionRequest };
var DeleteAuditSuppressionResponse = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionResponse, _super);
    function DeleteAuditSuppressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAuditSuppressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteAuditSuppressionResponse.prototype, "deleteAuditSuppressionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAuditSuppressionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAuditSuppressionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAuditSuppressionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAuditSuppressionResponse.prototype, "throttlingException", void 0);
    return DeleteAuditSuppressionResponse;
}(SpeakeasyBase));
export { DeleteAuditSuppressionResponse };
