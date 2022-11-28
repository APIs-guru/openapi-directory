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
var CreateProvisioningTemplateVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionPathParams, _super);
    function CreateProvisioningTemplateVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionPathParams.prototype, "templateName", void 0);
    return CreateProvisioningTemplateVersionPathParams;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionPathParams };
var CreateProvisioningTemplateVersionQueryParams = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionQueryParams, _super);
    function CreateProvisioningTemplateVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" }),
        __metadata("design:type", Boolean)
    ], CreateProvisioningTemplateVersionQueryParams.prototype, "setAsDefault", void 0);
    return CreateProvisioningTemplateVersionQueryParams;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionQueryParams };
var CreateProvisioningTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionHeaders, _super);
    function CreateProvisioningTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateProvisioningTemplateVersionHeaders;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionHeaders };
var CreateProvisioningTemplateVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionRequestBody, _super);
    function CreateProvisioningTemplateVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionRequestBody.prototype, "templateBody", void 0);
    return CreateProvisioningTemplateVersionRequestBody;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionRequestBody };
var CreateProvisioningTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionRequest, _super);
    function CreateProvisioningTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProvisioningTemplateVersionPathParams)
    ], CreateProvisioningTemplateVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProvisioningTemplateVersionQueryParams)
    ], CreateProvisioningTemplateVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProvisioningTemplateVersionHeaders)
    ], CreateProvisioningTemplateVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProvisioningTemplateVersionRequestBody)
    ], CreateProvisioningTemplateVersionRequest.prototype, "request", void 0);
    return CreateProvisioningTemplateVersionRequest;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionRequest };
var CreateProvisioningTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionResponse, _super);
    function CreateProvisioningTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateProvisioningTemplateVersionResponse)
    ], CreateProvisioningTemplateVersionResponse.prototype, "createProvisioningTemplateVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProvisioningTemplateVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateVersionResponse.prototype, "versionsLimitExceededException", void 0);
    return CreateProvisioningTemplateVersionResponse;
}(SpeakeasyBase));
export { CreateProvisioningTemplateVersionResponse };
