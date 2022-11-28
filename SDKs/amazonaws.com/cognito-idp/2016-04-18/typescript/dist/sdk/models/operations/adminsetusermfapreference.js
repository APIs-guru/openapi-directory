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
export var AdminSetUserMfaPreferenceXAmzTargetEnum;
(function (AdminSetUserMfaPreferenceXAmzTargetEnum) {
    AdminSetUserMfaPreferenceXAmzTargetEnum["AwsCognitoIdentityProviderServiceAdminSetUserMfaPreference"] = "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference";
})(AdminSetUserMfaPreferenceXAmzTargetEnum || (AdminSetUserMfaPreferenceXAmzTargetEnum = {}));
var AdminSetUserMfaPreferenceHeaders = /** @class */ (function (_super) {
    __extends(AdminSetUserMfaPreferenceHeaders, _super);
    function AdminSetUserMfaPreferenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceHeaders.prototype, "xAmzTarget", void 0);
    return AdminSetUserMfaPreferenceHeaders;
}(SpeakeasyBase));
export { AdminSetUserMfaPreferenceHeaders };
var AdminSetUserMfaPreferenceRequest = /** @class */ (function (_super) {
    __extends(AdminSetUserMfaPreferenceRequest, _super);
    function AdminSetUserMfaPreferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminSetUserMfaPreferenceHeaders)
    ], AdminSetUserMfaPreferenceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdminSetUserMfaPreferenceRequest)
    ], AdminSetUserMfaPreferenceRequest.prototype, "request", void 0);
    return AdminSetUserMfaPreferenceRequest;
}(SpeakeasyBase));
export { AdminSetUserMfaPreferenceRequest };
var AdminSetUserMfaPreferenceResponse = /** @class */ (function (_super) {
    __extends(AdminSetUserMfaPreferenceResponse, _super);
    function AdminSetUserMfaPreferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AdminSetUserMfaPreferenceResponse.prototype, "adminSetUserMfaPreferenceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminSetUserMfaPreferenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "passwordResetRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminSetUserMfaPreferenceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "userNotConfirmedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminSetUserMfaPreferenceResponse.prototype, "userNotFoundException", void 0);
    return AdminSetUserMfaPreferenceResponse;
}(SpeakeasyBase));
export { AdminSetUserMfaPreferenceResponse };
