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
var ListAuditSuppressionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsQueryParams, _super);
    function ListAuditSuppressionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsQueryParams.prototype, "nextToken", void 0);
    return ListAuditSuppressionsQueryParams;
}(SpeakeasyBase));
export { ListAuditSuppressionsQueryParams };
var ListAuditSuppressionsHeaders = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsHeaders, _super);
    function ListAuditSuppressionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAuditSuppressionsHeaders;
}(SpeakeasyBase));
export { ListAuditSuppressionsHeaders };
// ListAuditSuppressionsRequestBodyResourceIdentifier
/**
 * Information that identifies the noncompliant resource.
**/
var ListAuditSuppressionsRequestBodyResourceIdentifier = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsRequestBodyResourceIdentifier, _super);
    function ListAuditSuppressionsRequestBodyResourceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCertificateId" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "deviceCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" }),
        __metadata("design:type", shared.PolicyVersionIdentifier)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "policyVersionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleAliasArn" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBodyResourceIdentifier.prototype, "roleAliasArn", void 0);
    return ListAuditSuppressionsRequestBodyResourceIdentifier;
}(SpeakeasyBase));
export { ListAuditSuppressionsRequestBodyResourceIdentifier };
var ListAuditSuppressionsRequestBody = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsRequestBody, _super);
    function ListAuditSuppressionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ascendingOrder" }),
        __metadata("design:type", Boolean)
    ], ListAuditSuppressionsRequestBody.prototype, "ascendingOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBody.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAuditSuppressionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListAuditSuppressionsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIdentifier" }),
        __metadata("design:type", ListAuditSuppressionsRequestBodyResourceIdentifier)
    ], ListAuditSuppressionsRequestBody.prototype, "resourceIdentifier", void 0);
    return ListAuditSuppressionsRequestBody;
}(SpeakeasyBase));
export { ListAuditSuppressionsRequestBody };
var ListAuditSuppressionsRequest = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsRequest, _super);
    function ListAuditSuppressionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditSuppressionsQueryParams)
    ], ListAuditSuppressionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditSuppressionsHeaders)
    ], ListAuditSuppressionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAuditSuppressionsRequestBody)
    ], ListAuditSuppressionsRequest.prototype, "request", void 0);
    return ListAuditSuppressionsRequest;
}(SpeakeasyBase));
export { ListAuditSuppressionsRequest };
var ListAuditSuppressionsResponse = /** @class */ (function (_super) {
    __extends(ListAuditSuppressionsResponse, _super);
    function ListAuditSuppressionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAuditSuppressionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditSuppressionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditSuppressionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuditSuppressionsResponse)
    ], ListAuditSuppressionsResponse.prototype, "listAuditSuppressionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAuditSuppressionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditSuppressionsResponse.prototype, "throttlingException", void 0);
    return ListAuditSuppressionsResponse;
}(SpeakeasyBase));
export { ListAuditSuppressionsResponse };
