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
export var MergeBranchesByThreeWayXAmzTargetEnum;
(function (MergeBranchesByThreeWayXAmzTargetEnum) {
    MergeBranchesByThreeWayXAmzTargetEnum["CodeCommit20150413MergeBranchesByThreeWay"] = "CodeCommit_20150413.MergeBranchesByThreeWay";
})(MergeBranchesByThreeWayXAmzTargetEnum || (MergeBranchesByThreeWayXAmzTargetEnum = {}));
var MergeBranchesByThreeWayHeaders = /** @class */ (function (_super) {
    __extends(MergeBranchesByThreeWayHeaders, _super);
    function MergeBranchesByThreeWayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayHeaders.prototype, "xAmzTarget", void 0);
    return MergeBranchesByThreeWayHeaders;
}(SpeakeasyBase));
export { MergeBranchesByThreeWayHeaders };
var MergeBranchesByThreeWayRequest = /** @class */ (function (_super) {
    __extends(MergeBranchesByThreeWayRequest, _super);
    function MergeBranchesByThreeWayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeBranchesByThreeWayHeaders)
    ], MergeBranchesByThreeWayRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MergeBranchesByThreeWayInput)
    ], MergeBranchesByThreeWayRequest.prototype, "request", void 0);
    return MergeBranchesByThreeWayRequest;
}(SpeakeasyBase));
export { MergeBranchesByThreeWayRequest };
var MergeBranchesByThreeWayResponse = /** @class */ (function (_super) {
    __extends(MergeBranchesByThreeWayResponse, _super);
    function MergeBranchesByThreeWayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "branchDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "branchNameIsTagNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "branchNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "commitDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "commitMessageLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "commitRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "concurrentReferenceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergeBranchesByThreeWayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "fileContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "fileModeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "folderContentSizeLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidBranchNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidCommitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidConflictDetailLevelException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidConflictResolutionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidConflictResolutionStrategyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidEmailException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidFileModeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidPathException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidReplacementContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidReplacementTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "invalidTargetBranchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "manualMergeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "maximumConflictResolutionEntriesExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "maximumFileContentToLoadExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "maximumItemsToCompareExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MergeBranchesByThreeWayOutput)
    ], MergeBranchesByThreeWayResponse.prototype, "mergeBranchesByThreeWayOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "multipleConflictResolutionEntriesException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "nameLengthExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "pathRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "replacementContentRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "replacementTypeRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergeBranchesByThreeWayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeBranchesByThreeWayResponse.prototype, "tipsDivergenceExceededException", void 0);
    return MergeBranchesByThreeWayResponse;
}(SpeakeasyBase));
export { MergeBranchesByThreeWayResponse };
