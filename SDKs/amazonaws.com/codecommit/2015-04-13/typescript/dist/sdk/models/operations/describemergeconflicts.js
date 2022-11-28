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
var DescribeMergeConflictsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeMergeConflictsQueryParams, _super);
    function DescribeMergeConflictsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxMergeHunks" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsQueryParams.prototype, "maxMergeHunks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsQueryParams.prototype, "nextToken", void 0);
    return DescribeMergeConflictsQueryParams;
}(SpeakeasyBase));
export { DescribeMergeConflictsQueryParams };
export var DescribeMergeConflictsXAmzTargetEnum;
(function (DescribeMergeConflictsXAmzTargetEnum) {
    DescribeMergeConflictsXAmzTargetEnum["CodeCommit20150413DescribeMergeConflicts"] = "CodeCommit_20150413.DescribeMergeConflicts";
})(DescribeMergeConflictsXAmzTargetEnum || (DescribeMergeConflictsXAmzTargetEnum = {}));
var DescribeMergeConflictsHeaders = /** @class */ (function (_super) {
    __extends(DescribeMergeConflictsHeaders, _super);
    function DescribeMergeConflictsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMergeConflictsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMergeConflictsHeaders;
}(SpeakeasyBase));
export { DescribeMergeConflictsHeaders };
var DescribeMergeConflictsRequest = /** @class */ (function (_super) {
    __extends(DescribeMergeConflictsRequest, _super);
    function DescribeMergeConflictsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMergeConflictsQueryParams)
    ], DescribeMergeConflictsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMergeConflictsHeaders)
    ], DescribeMergeConflictsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMergeConflictsInput)
    ], DescribeMergeConflictsRequest.prototype, "request", void 0);
    return DescribeMergeConflictsRequest;
}(SpeakeasyBase));
export { DescribeMergeConflictsRequest };
var DescribeMergeConflictsResponse = /** @class */ (function (_super) {
    __extends(DescribeMergeConflictsResponse, _super);
    function DescribeMergeConflictsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "commitDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "commitRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeMergeConflictsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeMergeConflictsOutput)
    ], DescribeMergeConflictsResponse.prototype, "describeMergeConflictsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "fileDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidCommitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidConflictDetailLevelException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidConflictResolutionStrategyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidContinuationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidMaxMergeHunksException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidMergeOptionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidPathException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "maximumFileContentToLoadExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "maximumItemsToCompareExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "mergeOptionRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "pathRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeMergeConflictsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMergeConflictsResponse.prototype, "tipsDivergenceExceededException", void 0);
    return DescribeMergeConflictsResponse;
}(SpeakeasyBase));
export { DescribeMergeConflictsResponse };
