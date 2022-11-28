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
export var BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum) {
    BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum["CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories"] = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories";
})(BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum || (BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzTarget", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;
}(SpeakeasyBase));
export { BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders };
var BatchAssociateApprovalRuleTemplateWithRepositoriesRequest = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesRequest, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesRequest.prototype, "request", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesRequest;
}(SpeakeasyBase));
export { BatchAssociateApprovalRuleTemplateWithRepositoriesRequest };
var BatchAssociateApprovalRuleTemplateWithRepositoriesResponse = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesResponse, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "batchAssociateApprovalRuleTemplateWithRepositoriesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "maximumRepositoryNamesExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "repositoryNamesRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "statusCode", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesResponse;
}(SpeakeasyBase));
export { BatchAssociateApprovalRuleTemplateWithRepositoriesResponse };
