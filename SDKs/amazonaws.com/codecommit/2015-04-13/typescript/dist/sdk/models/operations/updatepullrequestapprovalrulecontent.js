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
export var UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
(function (UpdatePullRequestApprovalRuleContentXAmzTargetEnum) {
    UpdatePullRequestApprovalRuleContentXAmzTargetEnum["CodeCommit20150413UpdatePullRequestApprovalRuleContent"] = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent";
})(UpdatePullRequestApprovalRuleContentXAmzTargetEnum || (UpdatePullRequestApprovalRuleContentXAmzTargetEnum = {}));
var UpdatePullRequestApprovalRuleContentHeaders = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalRuleContentHeaders, _super);
    function UpdatePullRequestApprovalRuleContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentHeaders.prototype, "xAmzTarget", void 0);
    return UpdatePullRequestApprovalRuleContentHeaders;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalRuleContentHeaders };
var UpdatePullRequestApprovalRuleContentRequest = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalRuleContentRequest, _super);
    function UpdatePullRequestApprovalRuleContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePullRequestApprovalRuleContentHeaders)
    ], UpdatePullRequestApprovalRuleContentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePullRequestApprovalRuleContentInput)
    ], UpdatePullRequestApprovalRuleContentRequest.prototype, "request", void 0);
    return UpdatePullRequestApprovalRuleContentRequest;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalRuleContentRequest };
var UpdatePullRequestApprovalRuleContentResponse = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalRuleContentResponse, _super);
    function UpdatePullRequestApprovalRuleContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "approvalRuleContentRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "approvalRuleDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "approvalRuleNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "cannotModifyApprovalRuleFromTemplateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "invalidApprovalRuleContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "invalidApprovalRuleNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "invalidRuleContentSha256Exception", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePullRequestApprovalRuleContentOutput)
    ], UpdatePullRequestApprovalRuleContentResponse.prototype, "updatePullRequestApprovalRuleContentOutput", void 0);
    return UpdatePullRequestApprovalRuleContentResponse;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalRuleContentResponse };
