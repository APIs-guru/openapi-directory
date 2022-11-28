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
export var AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
(function (AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum) {
    AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum["CodeCommit20150413AssociateApprovalRuleTemplateWithRepository"] = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";
})(AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum || (AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum = {}));
var AssociateApprovalRuleTemplateWithRepositoryHeaders = /** @class */ (function (_super) {
    __extends(AssociateApprovalRuleTemplateWithRepositoryHeaders, _super);
    function AssociateApprovalRuleTemplateWithRepositoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryHeaders.prototype, "xAmzTarget", void 0);
    return AssociateApprovalRuleTemplateWithRepositoryHeaders;
}(SpeakeasyBase));
export { AssociateApprovalRuleTemplateWithRepositoryHeaders };
var AssociateApprovalRuleTemplateWithRepositoryRequest = /** @class */ (function (_super) {
    __extends(AssociateApprovalRuleTemplateWithRepositoryRequest, _super);
    function AssociateApprovalRuleTemplateWithRepositoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateApprovalRuleTemplateWithRepositoryHeaders)
    ], AssociateApprovalRuleTemplateWithRepositoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssociateApprovalRuleTemplateWithRepositoryInput)
    ], AssociateApprovalRuleTemplateWithRepositoryRequest.prototype, "request", void 0);
    return AssociateApprovalRuleTemplateWithRepositoryRequest;
}(SpeakeasyBase));
export { AssociateApprovalRuleTemplateWithRepositoryRequest };
var AssociateApprovalRuleTemplateWithRepositoryResponse = /** @class */ (function (_super) {
    __extends(AssociateApprovalRuleTemplateWithRepositoryResponse, _super);
    function AssociateApprovalRuleTemplateWithRepositoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "maximumRuleTemplatesAssociatedWithRepositoryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateApprovalRuleTemplateWithRepositoryResponse.prototype, "statusCode", void 0);
    return AssociateApprovalRuleTemplateWithRepositoryResponse;
}(SpeakeasyBase));
export { AssociateApprovalRuleTemplateWithRepositoryResponse };
