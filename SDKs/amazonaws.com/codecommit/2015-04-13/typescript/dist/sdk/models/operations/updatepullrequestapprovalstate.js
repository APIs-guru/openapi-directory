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
export var UpdatePullRequestApprovalStateXAmzTargetEnum;
(function (UpdatePullRequestApprovalStateXAmzTargetEnum) {
    UpdatePullRequestApprovalStateXAmzTargetEnum["CodeCommit20150413UpdatePullRequestApprovalState"] = "CodeCommit_20150413.UpdatePullRequestApprovalState";
})(UpdatePullRequestApprovalStateXAmzTargetEnum || (UpdatePullRequestApprovalStateXAmzTargetEnum = {}));
var UpdatePullRequestApprovalStateHeaders = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalStateHeaders, _super);
    function UpdatePullRequestApprovalStateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateHeaders.prototype, "xAmzTarget", void 0);
    return UpdatePullRequestApprovalStateHeaders;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalStateHeaders };
var UpdatePullRequestApprovalStateRequest = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalStateRequest, _super);
    function UpdatePullRequestApprovalStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePullRequestApprovalStateHeaders)
    ], UpdatePullRequestApprovalStateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePullRequestApprovalStateInput)
    ], UpdatePullRequestApprovalStateRequest.prototype, "request", void 0);
    return UpdatePullRequestApprovalStateRequest;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalStateRequest };
var UpdatePullRequestApprovalStateResponse = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalStateResponse, _super);
    function UpdatePullRequestApprovalStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "approvalStateRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePullRequestApprovalStateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "invalidApprovalStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "invalidRevisionIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "maximumNumberOfApprovalsExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "pullRequestCannotBeApprovedByAuthorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "revisionIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePullRequestApprovalStateResponse.prototype, "revisionNotCurrentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePullRequestApprovalStateResponse.prototype, "statusCode", void 0);
    return UpdatePullRequestApprovalStateResponse;
}(SpeakeasyBase));
export { UpdatePullRequestApprovalStateResponse };
