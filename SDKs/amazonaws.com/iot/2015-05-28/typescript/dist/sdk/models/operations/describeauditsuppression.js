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
var DescribeAuditSuppressionHeaders = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionHeaders, _super);
    function DescribeAuditSuppressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeAuditSuppressionHeaders;
}(SpeakeasyBase));
export { DescribeAuditSuppressionHeaders };
// DescribeAuditSuppressionRequestBodyResourceIdentifier
/**
 * Information that identifies the noncompliant resource.
**/
var DescribeAuditSuppressionRequestBodyResourceIdentifier = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionRequestBodyResourceIdentifier, _super);
    function DescribeAuditSuppressionRequestBodyResourceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCertificateId" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "deviceCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" }),
        __metadata("design:type", shared.PolicyVersionIdentifier)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "policyVersionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleAliasArn" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBodyResourceIdentifier.prototype, "roleAliasArn", void 0);
    return DescribeAuditSuppressionRequestBodyResourceIdentifier;
}(SpeakeasyBase));
export { DescribeAuditSuppressionRequestBodyResourceIdentifier };
var DescribeAuditSuppressionRequestBody = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionRequestBody, _super);
    function DescribeAuditSuppressionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionRequestBody.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIdentifier" }),
        __metadata("design:type", DescribeAuditSuppressionRequestBodyResourceIdentifier)
    ], DescribeAuditSuppressionRequestBody.prototype, "resourceIdentifier", void 0);
    return DescribeAuditSuppressionRequestBody;
}(SpeakeasyBase));
export { DescribeAuditSuppressionRequestBody };
var DescribeAuditSuppressionRequest = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionRequest, _super);
    function DescribeAuditSuppressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAuditSuppressionHeaders)
    ], DescribeAuditSuppressionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeAuditSuppressionRequestBody)
    ], DescribeAuditSuppressionRequest.prototype, "request", void 0);
    return DescribeAuditSuppressionRequest;
}(SpeakeasyBase));
export { DescribeAuditSuppressionRequest };
var DescribeAuditSuppressionResponse = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionResponse, _super);
    function DescribeAuditSuppressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAuditSuppressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAuditSuppressionResponse)
    ], DescribeAuditSuppressionResponse.prototype, "describeAuditSuppressionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAuditSuppressionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAuditSuppressionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAuditSuppressionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAuditSuppressionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAuditSuppressionResponse.prototype, "throttlingException", void 0);
    return DescribeAuditSuppressionResponse;
}(SpeakeasyBase));
export { DescribeAuditSuppressionResponse };
