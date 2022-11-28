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
export var OverridePullRequestApprovalRulesXAmzTargetEnum;
(function (OverridePullRequestApprovalRulesXAmzTargetEnum) {
    OverridePullRequestApprovalRulesXAmzTargetEnum["CodeCommit20150413OverridePullRequestApprovalRules"] = "CodeCommit_20150413.OverridePullRequestApprovalRules";
})(OverridePullRequestApprovalRulesXAmzTargetEnum || (OverridePullRequestApprovalRulesXAmzTargetEnum = {}));
var OverridePullRequestApprovalRulesHeaders = /** @class */ (function (_super) {
    __extends(OverridePullRequestApprovalRulesHeaders, _super);
    function OverridePullRequestApprovalRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesHeaders.prototype, "xAmzTarget", void 0);
    return OverridePullRequestApprovalRulesHeaders;
}(SpeakeasyBase));
export { OverridePullRequestApprovalRulesHeaders };
var OverridePullRequestApprovalRulesRequest = /** @class */ (function (_super) {
    __extends(OverridePullRequestApprovalRulesRequest, _super);
    function OverridePullRequestApprovalRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OverridePullRequestApprovalRulesHeaders)
    ], OverridePullRequestApprovalRulesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OverridePullRequestApprovalRulesInput)
    ], OverridePullRequestApprovalRulesRequest.prototype, "request", void 0);
    return OverridePullRequestApprovalRulesRequest;
}(SpeakeasyBase));
export { OverridePullRequestApprovalRulesRequest };
var OverridePullRequestApprovalRulesResponse = /** @class */ (function (_super) {
    __extends(OverridePullRequestApprovalRulesResponse, _super);
    function OverridePullRequestApprovalRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OverridePullRequestApprovalRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "invalidOverrideStatusException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "invalidRevisionIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "overrideAlreadySetException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "overrideStatusRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "revisionIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OverridePullRequestApprovalRulesResponse.prototype, "revisionNotCurrentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OverridePullRequestApprovalRulesResponse.prototype, "statusCode", void 0);
    return OverridePullRequestApprovalRulesResponse;
}(SpeakeasyBase));
export { OverridePullRequestApprovalRulesResponse };
