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
export var MergePullRequestByFastForwardXAmzTargetEnum;
(function (MergePullRequestByFastForwardXAmzTargetEnum) {
    MergePullRequestByFastForwardXAmzTargetEnum["CodeCommit20150413MergePullRequestByFastForward"] = "CodeCommit_20150413.MergePullRequestByFastForward";
})(MergePullRequestByFastForwardXAmzTargetEnum || (MergePullRequestByFastForwardXAmzTargetEnum = {}));
var MergePullRequestByFastForwardHeaders = /** @class */ (function (_super) {
    __extends(MergePullRequestByFastForwardHeaders, _super);
    function MergePullRequestByFastForwardHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardHeaders.prototype, "xAmzTarget", void 0);
    return MergePullRequestByFastForwardHeaders;
}(SpeakeasyBase));
export { MergePullRequestByFastForwardHeaders };
var MergePullRequestByFastForwardRequest = /** @class */ (function (_super) {
    __extends(MergePullRequestByFastForwardRequest, _super);
    function MergePullRequestByFastForwardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergePullRequestByFastForwardHeaders)
    ], MergePullRequestByFastForwardRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MergePullRequestByFastForwardInput)
    ], MergePullRequestByFastForwardRequest.prototype, "request", void 0);
    return MergePullRequestByFastForwardRequest;
}(SpeakeasyBase));
export { MergePullRequestByFastForwardRequest };
var MergePullRequestByFastForwardResponse = /** @class */ (function (_super) {
    __extends(MergePullRequestByFastForwardResponse, _super);
    function MergePullRequestByFastForwardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "concurrentReferenceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergePullRequestByFastForwardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "invalidCommitIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "manualMergeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MergePullRequestByFastForwardOutput)
    ], MergePullRequestByFastForwardResponse.prototype, "mergePullRequestByFastForwardOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "pullRequestApprovalRulesNotSatisfiedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "referenceDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "repositoryNotAssociatedWithPullRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergePullRequestByFastForwardResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByFastForwardResponse.prototype, "tipOfSourceReferenceIsDifferentException", void 0);
    return MergePullRequestByFastForwardResponse;
}(SpeakeasyBase));
export { MergePullRequestByFastForwardResponse };
