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
export var MergePullRequestByThreeWayXAmzTargetEnum;
(function (MergePullRequestByThreeWayXAmzTargetEnum) {
    MergePullRequestByThreeWayXAmzTargetEnum["CodeCommit20150413MergePullRequestByThreeWay"] = "CodeCommit_20150413.MergePullRequestByThreeWay";
})(MergePullRequestByThreeWayXAmzTargetEnum || (MergePullRequestByThreeWayXAmzTargetEnum = {}));
var MergePullRequestByThreeWayHeaders = /** @class */ (function (_super) {
    __extends(MergePullRequestByThreeWayHeaders, _super);
    function MergePullRequestByThreeWayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayHeaders.prototype, "xAmzTarget", void 0);
    return MergePullRequestByThreeWayHeaders;
}(SpeakeasyBase));
export { MergePullRequestByThreeWayHeaders };
var MergePullRequestByThreeWayRequest = /** @class */ (function (_super) {
    __extends(MergePullRequestByThreeWayRequest, _super);
    function MergePullRequestByThreeWayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergePullRequestByThreeWayHeaders)
    ], MergePullRequestByThreeWayRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MergePullRequestByThreeWayInput)
    ], MergePullRequestByThreeWayRequest.prototype, "request", void 0);
    return MergePullRequestByThreeWayRequest;
}(SpeakeasyBase));
export { MergePullRequestByThreeWayRequest };
var MergePullRequestByThreeWayResponse = /** @class */ (function (_super) {
    __extends(MergePullRequestByThreeWayResponse, _super);
    function MergePullRequestByThreeWayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "commitMessageLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "concurrentReferenceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergePullRequestByThreeWayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "fileContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "folderContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidCommitIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidConflictDetailLevelException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidConflictResolutionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidConflictResolutionStrategyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidEmailException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidFileModeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidPathException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidReplacementContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidReplacementTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "manualMergeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "maximumConflictResolutionEntriesExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "maximumFileContentToLoadExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "maximumItemsToCompareExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MergePullRequestByThreeWayOutput)
    ], MergePullRequestByThreeWayResponse.prototype, "mergePullRequestByThreeWayOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "multipleConflictResolutionEntriesException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "nameLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "pathRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "pullRequestApprovalRulesNotSatisfiedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "replacementContentRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "replacementTypeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "repositoryNotAssociatedWithPullRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergePullRequestByThreeWayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "tipOfSourceReferenceIsDifferentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergePullRequestByThreeWayResponse.prototype, "tipsDivergenceExceededException", void 0);
    return MergePullRequestByThreeWayResponse;
}(SpeakeasyBase));
export { MergePullRequestByThreeWayResponse };
