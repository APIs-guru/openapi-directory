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
var DeregisterOrganizationAdminAccountHeaders = /** @class */ (function (_super) {
    __extends(DeregisterOrganizationAdminAccountHeaders, _super);
    function DeregisterOrganizationAdminAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeregisterOrganizationAdminAccountHeaders;
}(SpeakeasyBase));
export { DeregisterOrganizationAdminAccountHeaders };
var DeregisterOrganizationAdminAccountRequestBody = /** @class */ (function (_super) {
    __extends(DeregisterOrganizationAdminAccountRequestBody, _super);
    function DeregisterOrganizationAdminAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminAccountId" }),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountRequestBody.prototype, "adminAccountId", void 0);
    return DeregisterOrganizationAdminAccountRequestBody;
}(SpeakeasyBase));
export { DeregisterOrganizationAdminAccountRequestBody };
var DeregisterOrganizationAdminAccountRequest = /** @class */ (function (_super) {
    __extends(DeregisterOrganizationAdminAccountRequest, _super);
    function DeregisterOrganizationAdminAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeregisterOrganizationAdminAccountHeaders)
    ], DeregisterOrganizationAdminAccountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeregisterOrganizationAdminAccountRequestBody)
    ], DeregisterOrganizationAdminAccountRequest.prototype, "request", void 0);
    return DeregisterOrganizationAdminAccountRequest;
}(SpeakeasyBase));
export { DeregisterOrganizationAdminAccountRequest };
var DeregisterOrganizationAdminAccountResponse = /** @class */ (function (_super) {
    __extends(DeregisterOrganizationAdminAccountResponse, _super);
    function DeregisterOrganizationAdminAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "deregisterOrganizationAdminAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeregisterOrganizationAdminAccountResponse.prototype, "validationException", void 0);
    return DeregisterOrganizationAdminAccountResponse;
}(SpeakeasyBase));
export { DeregisterOrganizationAdminAccountResponse };
