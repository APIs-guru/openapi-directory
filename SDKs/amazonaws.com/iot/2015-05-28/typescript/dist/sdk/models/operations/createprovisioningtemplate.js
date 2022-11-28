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
var CreateProvisioningTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateHeaders, _super);
    function CreateProvisioningTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateProvisioningTemplateHeaders;
}(SpeakeasyBase));
export { CreateProvisioningTemplateHeaders };
// CreateProvisioningTemplateRequestBodyPreProvisioningHook
/**
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
var CreateProvisioningTemplateRequestBodyPreProvisioningHook = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateRequestBodyPreProvisioningHook, _super);
    function CreateProvisioningTemplateRequestBodyPreProvisioningHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payloadVersion" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBodyPreProvisioningHook.prototype, "payloadVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetArn" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBodyPreProvisioningHook.prototype, "targetArn", void 0);
    return CreateProvisioningTemplateRequestBodyPreProvisioningHook;
}(SpeakeasyBase));
export { CreateProvisioningTemplateRequestBodyPreProvisioningHook };
var CreateProvisioningTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateRequestBody, _super);
    function CreateProvisioningTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateProvisioningTemplateRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preProvisioningHook" }),
        __metadata("design:type", CreateProvisioningTemplateRequestBodyPreProvisioningHook)
    ], CreateProvisioningTemplateRequestBody.prototype, "preProvisioningHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioningRoleArn" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBody.prototype, "provisioningRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateProvisioningTemplateRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBody.prototype, "templateBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateName" }),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateRequestBody.prototype, "templateName", void 0);
    return CreateProvisioningTemplateRequestBody;
}(SpeakeasyBase));
export { CreateProvisioningTemplateRequestBody };
var CreateProvisioningTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateRequest, _super);
    function CreateProvisioningTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProvisioningTemplateHeaders)
    ], CreateProvisioningTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProvisioningTemplateRequestBody)
    ], CreateProvisioningTemplateRequest.prototype, "request", void 0);
    return CreateProvisioningTemplateRequest;
}(SpeakeasyBase));
export { CreateProvisioningTemplateRequest };
var CreateProvisioningTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateResponse, _super);
    function CreateProvisioningTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProvisioningTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateProvisioningTemplateResponse)
    ], CreateProvisioningTemplateResponse.prototype, "createProvisioningTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProvisioningTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningTemplateResponse.prototype, "unauthorizedException", void 0);
    return CreateProvisioningTemplateResponse;
}(SpeakeasyBase));
export { CreateProvisioningTemplateResponse };
