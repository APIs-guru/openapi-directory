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
export var AdminRespondToAuthChallengeXAmzTargetEnum;
(function (AdminRespondToAuthChallengeXAmzTargetEnum) {
    AdminRespondToAuthChallengeXAmzTargetEnum["AwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge"] = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge";
})(AdminRespondToAuthChallengeXAmzTargetEnum || (AdminRespondToAuthChallengeXAmzTargetEnum = {}));
var AdminRespondToAuthChallengeHeaders = /** @class */ (function (_super) {
    __extends(AdminRespondToAuthChallengeHeaders, _super);
    function AdminRespondToAuthChallengeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeHeaders.prototype, "xAmzTarget", void 0);
    return AdminRespondToAuthChallengeHeaders;
}(SpeakeasyBase));
export { AdminRespondToAuthChallengeHeaders };
var AdminRespondToAuthChallengeRequest = /** @class */ (function (_super) {
    __extends(AdminRespondToAuthChallengeRequest, _super);
    function AdminRespondToAuthChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminRespondToAuthChallengeHeaders)
    ], AdminRespondToAuthChallengeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdminRespondToAuthChallengeRequest)
    ], AdminRespondToAuthChallengeRequest.prototype, "request", void 0);
    return AdminRespondToAuthChallengeRequest;
}(SpeakeasyBase));
export { AdminRespondToAuthChallengeRequest };
var AdminRespondToAuthChallengeResponse = /** @class */ (function (_super) {
    __extends(AdminRespondToAuthChallengeResponse, _super);
    function AdminRespondToAuthChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdminRespondToAuthChallengeResponse)
    ], AdminRespondToAuthChallengeResponse.prototype, "adminRespondToAuthChallengeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "aliasExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "codeMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminRespondToAuthChallengeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "expiredCodeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidLambdaResponseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidPasswordException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidSmsRoleAccessPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidSmsRoleTrustRelationshipException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "invalidUserPoolConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "mfaMethodNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "passwordResetRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "softwareTokenMfaNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminRespondToAuthChallengeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "unexpectedLambdaException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "userLambdaValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "userNotConfirmedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminRespondToAuthChallengeResponse.prototype, "userNotFoundException", void 0);
    return AdminRespondToAuthChallengeResponse;
}(SpeakeasyBase));
export { AdminRespondToAuthChallengeResponse };
