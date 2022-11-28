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
export var UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;
(function (UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum) {
    UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum["CodeCommit20150413UpdateApprovalRuleTemplateDescription"] = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription";
})(UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum || (UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum = {}));
var UpdateApprovalRuleTemplateDescriptionHeaders = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateDescriptionHeaders, _super);
    function UpdateApprovalRuleTemplateDescriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionHeaders.prototype, "xAmzTarget", void 0);
    return UpdateApprovalRuleTemplateDescriptionHeaders;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateDescriptionHeaders };
var UpdateApprovalRuleTemplateDescriptionRequest = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateDescriptionRequest, _super);
    function UpdateApprovalRuleTemplateDescriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApprovalRuleTemplateDescriptionHeaders)
    ], UpdateApprovalRuleTemplateDescriptionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateApprovalRuleTemplateDescriptionInput)
    ], UpdateApprovalRuleTemplateDescriptionRequest.prototype, "request", void 0);
    return UpdateApprovalRuleTemplateDescriptionRequest;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateDescriptionRequest };
var UpdateApprovalRuleTemplateDescriptionResponse = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateDescriptionResponse, _super);
    function UpdateApprovalRuleTemplateDescriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "invalidApprovalRuleTemplateDescriptionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApprovalRuleTemplateDescriptionOutput)
    ], UpdateApprovalRuleTemplateDescriptionResponse.prototype, "updateApprovalRuleTemplateDescriptionOutput", void 0);
    return UpdateApprovalRuleTemplateDescriptionResponse;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateDescriptionResponse };
