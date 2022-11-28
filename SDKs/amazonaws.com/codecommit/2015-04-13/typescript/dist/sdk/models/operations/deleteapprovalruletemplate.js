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
export var DeleteApprovalRuleTemplateXAmzTargetEnum;
(function (DeleteApprovalRuleTemplateXAmzTargetEnum) {
    DeleteApprovalRuleTemplateXAmzTargetEnum["CodeCommit20150413DeleteApprovalRuleTemplate"] = "CodeCommit_20150413.DeleteApprovalRuleTemplate";
})(DeleteApprovalRuleTemplateXAmzTargetEnum || (DeleteApprovalRuleTemplateXAmzTargetEnum = {}));
var DeleteApprovalRuleTemplateHeaders = /** @class */ (function (_super) {
    __extends(DeleteApprovalRuleTemplateHeaders, _super);
    function DeleteApprovalRuleTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateHeaders.prototype, "xAmzTarget", void 0);
    return DeleteApprovalRuleTemplateHeaders;
}(SpeakeasyBase));
export { DeleteApprovalRuleTemplateHeaders };
var DeleteApprovalRuleTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteApprovalRuleTemplateRequest, _super);
    function DeleteApprovalRuleTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApprovalRuleTemplateHeaders)
    ], DeleteApprovalRuleTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteApprovalRuleTemplateInput)
    ], DeleteApprovalRuleTemplateRequest.prototype, "request", void 0);
    return DeleteApprovalRuleTemplateRequest;
}(SpeakeasyBase));
export { DeleteApprovalRuleTemplateRequest };
var DeleteApprovalRuleTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteApprovalRuleTemplateResponse, _super);
    function DeleteApprovalRuleTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApprovalRuleTemplateResponse.prototype, "approvalRuleTemplateInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApprovalRuleTemplateResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApprovalRuleTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteApprovalRuleTemplateOutput)
    ], DeleteApprovalRuleTemplateResponse.prototype, "deleteApprovalRuleTemplateOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApprovalRuleTemplateResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApprovalRuleTemplateResponse.prototype, "statusCode", void 0);
    return DeleteApprovalRuleTemplateResponse;
}(SpeakeasyBase));
export { DeleteApprovalRuleTemplateResponse };
