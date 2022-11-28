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
var DeleteProvisioningTemplateVersionPathParams = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateVersionPathParams, _super);
    function DeleteProvisioningTemplateVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionPathParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" }),
        __metadata("design:type", Number)
    ], DeleteProvisioningTemplateVersionPathParams.prototype, "versionId", void 0);
    return DeleteProvisioningTemplateVersionPathParams;
}(SpeakeasyBase));
export { DeleteProvisioningTemplateVersionPathParams };
var DeleteProvisioningTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateVersionHeaders, _super);
    function DeleteProvisioningTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteProvisioningTemplateVersionHeaders;
}(SpeakeasyBase));
export { DeleteProvisioningTemplateVersionHeaders };
var DeleteProvisioningTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateVersionRequest, _super);
    function DeleteProvisioningTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProvisioningTemplateVersionPathParams)
    ], DeleteProvisioningTemplateVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProvisioningTemplateVersionHeaders)
    ], DeleteProvisioningTemplateVersionRequest.prototype, "headers", void 0);
    return DeleteProvisioningTemplateVersionRequest;
}(SpeakeasyBase));
export { DeleteProvisioningTemplateVersionRequest };
var DeleteProvisioningTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateVersionResponse, _super);
    function DeleteProvisioningTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "deleteConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "deleteProvisioningTemplateVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningTemplateVersionResponse.prototype, "unauthorizedException", void 0);
    return DeleteProvisioningTemplateVersionResponse;
}(SpeakeasyBase));
export { DeleteProvisioningTemplateVersionResponse };
