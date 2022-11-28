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
export var CreateUnreferencedMergeCommitXAmzTargetEnum;
(function (CreateUnreferencedMergeCommitXAmzTargetEnum) {
    CreateUnreferencedMergeCommitXAmzTargetEnum["CodeCommit20150413CreateUnreferencedMergeCommit"] = "CodeCommit_20150413.CreateUnreferencedMergeCommit";
})(CreateUnreferencedMergeCommitXAmzTargetEnum || (CreateUnreferencedMergeCommitXAmzTargetEnum = {}));
var CreateUnreferencedMergeCommitHeaders = /** @class */ (function (_super) {
    __extends(CreateUnreferencedMergeCommitHeaders, _super);
    function CreateUnreferencedMergeCommitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitHeaders.prototype, "xAmzTarget", void 0);
    return CreateUnreferencedMergeCommitHeaders;
}(SpeakeasyBase));
export { CreateUnreferencedMergeCommitHeaders };
var CreateUnreferencedMergeCommitRequest = /** @class */ (function (_super) {
    __extends(CreateUnreferencedMergeCommitRequest, _super);
    function CreateUnreferencedMergeCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnreferencedMergeCommitHeaders)
    ], CreateUnreferencedMergeCommitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateUnreferencedMergeCommitInput)
    ], CreateUnreferencedMergeCommitRequest.prototype, "request", void 0);
    return CreateUnreferencedMergeCommitRequest;
}(SpeakeasyBase));
export { CreateUnreferencedMergeCommitRequest };
var CreateUnreferencedMergeCommitResponse = /** @class */ (function (_super) {
    __extends(CreateUnreferencedMergeCommitResponse, _super);
    function CreateUnreferencedMergeCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "commitDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "commitMessageLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "commitRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "concurrentReferenceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnreferencedMergeCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateUnreferencedMergeCommitOutput)
    ], CreateUnreferencedMergeCommitResponse.prototype, "createUnreferencedMergeCommitOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "fileContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "fileModeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "folderContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidCommitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidConflictDetailLevelException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidConflictResolutionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidConflictResolutionStrategyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidEmailException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidFileModeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidMergeOptionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidPathException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidReplacementContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidReplacementTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "manualMergeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "maximumConflictResolutionEntriesExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "maximumFileContentToLoadExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "maximumItemsToCompareExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "mergeOptionRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "multipleConflictResolutionEntriesException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "nameLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "pathRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "replacementContentRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "replacementTypeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnreferencedMergeCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateUnreferencedMergeCommitResponse.prototype, "tipsDivergenceExceededException", void 0);
    return CreateUnreferencedMergeCommitResponse;
}(SpeakeasyBase));
export { CreateUnreferencedMergeCommitResponse };
