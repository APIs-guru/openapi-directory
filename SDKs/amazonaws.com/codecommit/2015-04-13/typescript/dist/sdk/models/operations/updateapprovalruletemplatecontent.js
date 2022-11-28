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
export var UpdateApprovalRuleTemplateContentXAmzTargetEnum;
(function (UpdateApprovalRuleTemplateContentXAmzTargetEnum) {
    UpdateApprovalRuleTemplateContentXAmzTargetEnum["CodeCommit20150413UpdateApprovalRuleTemplateContent"] = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent";
})(UpdateApprovalRuleTemplateContentXAmzTargetEnum || (UpdateApprovalRuleTemplateContentXAmzTargetEnum = {}));
var UpdateApprovalRuleTemplateContentHeaders = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateContentHeaders, _super);
    function UpdateApprovalRuleTemplateContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentHeaders.prototype, "xAmzTarget", void 0);
    return UpdateApprovalRuleTemplateContentHeaders;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateContentHeaders };
var UpdateApprovalRuleTemplateContentRequest = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateContentRequest, _super);
    function UpdateApprovalRuleTemplateContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApprovalRuleTemplateContentHeaders)
    ], UpdateApprovalRuleTemplateContentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateApprovalRuleTemplateContentInput)
    ], UpdateApprovalRuleTemplateContentRequest.prototype, "request", void 0);
    return UpdateApprovalRuleTemplateContentRequest;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateContentRequest };
var UpdateApprovalRuleTemplateContentResponse = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateContentResponse, _super);
    function UpdateApprovalRuleTemplateContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "approvalRuleTemplateContentRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "invalidApprovalRuleTemplateContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "invalidRuleContentSha256Exception", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApprovalRuleTemplateContentOutput)
    ], UpdateApprovalRuleTemplateContentResponse.prototype, "updateApprovalRuleTemplateContentOutput", void 0);
    return UpdateApprovalRuleTemplateContentResponse;
}(SpeakeasyBase));
export { UpdateApprovalRuleTemplateContentResponse };
