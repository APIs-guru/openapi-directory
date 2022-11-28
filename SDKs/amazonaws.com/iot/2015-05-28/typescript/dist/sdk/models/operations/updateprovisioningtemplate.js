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
var UpdateProvisioningTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplatePathParams, _super);
    function UpdateProvisioningTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplatePathParams.prototype, "templateName", void 0);
    return UpdateProvisioningTemplatePathParams;
}(SpeakeasyBase));
export { UpdateProvisioningTemplatePathParams };
var UpdateProvisioningTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateHeaders, _super);
    function UpdateProvisioningTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateProvisioningTemplateHeaders;
}(SpeakeasyBase));
export { UpdateProvisioningTemplateHeaders };
// UpdateProvisioningTemplateRequestBodyPreProvisioningHook
/**
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
var UpdateProvisioningTemplateRequestBodyPreProvisioningHook = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateRequestBodyPreProvisioningHook, _super);
    function UpdateProvisioningTemplateRequestBodyPreProvisioningHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payloadVersion" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateRequestBodyPreProvisioningHook.prototype, "payloadVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetArn" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateRequestBodyPreProvisioningHook.prototype, "targetArn", void 0);
    return UpdateProvisioningTemplateRequestBodyPreProvisioningHook;
}(SpeakeasyBase));
export { UpdateProvisioningTemplateRequestBodyPreProvisioningHook };
var UpdateProvisioningTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateRequestBody, _super);
    function UpdateProvisioningTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultVersionId" }),
        __metadata("design:type", Number)
    ], UpdateProvisioningTemplateRequestBody.prototype, "defaultVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateProvisioningTemplateRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preProvisioningHook" }),
        __metadata("design:type", UpdateProvisioningTemplateRequestBodyPreProvisioningHook)
    ], UpdateProvisioningTemplateRequestBody.prototype, "preProvisioningHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioningRoleArn" }),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateRequestBody.prototype, "provisioningRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removePreProvisioningHook" }),
        __metadata("design:type", Boolean)
    ], UpdateProvisioningTemplateRequestBody.prototype, "removePreProvisioningHook", void 0);
    return UpdateProvisioningTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateProvisioningTemplateRequestBody };
var UpdateProvisioningTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateRequest, _super);
    function UpdateProvisioningTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProvisioningTemplatePathParams)
    ], UpdateProvisioningTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProvisioningTemplateHeaders)
    ], UpdateProvisioningTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateProvisioningTemplateRequestBody)
    ], UpdateProvisioningTemplateRequest.prototype, "request", void 0);
    return UpdateProvisioningTemplateRequest;
}(SpeakeasyBase));
export { UpdateProvisioningTemplateRequest };
var UpdateProvisioningTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateResponse, _super);
    function UpdateProvisioningTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProvisioningTemplateResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProvisioningTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProvisioningTemplateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProvisioningTemplateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProvisioningTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProvisioningTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProvisioningTemplateResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateProvisioningTemplateResponse.prototype, "updateProvisioningTemplateResponse", void 0);
    return UpdateProvisioningTemplateResponse;
}(SpeakeasyBase));
export { UpdateProvisioningTemplateResponse };
