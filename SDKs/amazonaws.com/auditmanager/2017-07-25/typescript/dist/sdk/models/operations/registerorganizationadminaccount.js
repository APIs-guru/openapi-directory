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
var RegisterOrganizationAdminAccountHeaders = /** @class */ (function (_super) {
    __extends(RegisterOrganizationAdminAccountHeaders, _super);
    function RegisterOrganizationAdminAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterOrganizationAdminAccountHeaders;
}(SpeakeasyBase));
export { RegisterOrganizationAdminAccountHeaders };
var RegisterOrganizationAdminAccountRequestBody = /** @class */ (function (_super) {
    __extends(RegisterOrganizationAdminAccountRequestBody, _super);
    function RegisterOrganizationAdminAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminAccountId" }),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountRequestBody.prototype, "adminAccountId", void 0);
    return RegisterOrganizationAdminAccountRequestBody;
}(SpeakeasyBase));
export { RegisterOrganizationAdminAccountRequestBody };
var RegisterOrganizationAdminAccountRequest = /** @class */ (function (_super) {
    __extends(RegisterOrganizationAdminAccountRequest, _super);
    function RegisterOrganizationAdminAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterOrganizationAdminAccountHeaders)
    ], RegisterOrganizationAdminAccountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterOrganizationAdminAccountRequestBody)
    ], RegisterOrganizationAdminAccountRequest.prototype, "request", void 0);
    return RegisterOrganizationAdminAccountRequest;
}(SpeakeasyBase));
export { RegisterOrganizationAdminAccountRequest };
var RegisterOrganizationAdminAccountResponse = /** @class */ (function (_super) {
    __extends(RegisterOrganizationAdminAccountResponse, _super);
    function RegisterOrganizationAdminAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterOrganizationAdminAccountResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterOrganizationAdminAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterOrganizationAdminAccountResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterOrganizationAdminAccountResponse)
    ], RegisterOrganizationAdminAccountResponse.prototype, "registerOrganizationAdminAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterOrganizationAdminAccountResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterOrganizationAdminAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterOrganizationAdminAccountResponse.prototype, "validationException", void 0);
    return RegisterOrganizationAdminAccountResponse;
}(SpeakeasyBase));
export { RegisterOrganizationAdminAccountResponse };
