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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var CompleteAttachmentUploadHeaders = /** @class */ (function (_super) {
    __extends(CompleteAttachmentUploadHeaders, _super);
    function CompleteAttachmentUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzBearer", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CompleteAttachmentUploadHeaders;
}(SpeakeasyBase));
export { CompleteAttachmentUploadHeaders };
var CompleteAttachmentUploadRequestBody = /** @class */ (function (_super) {
    __extends(CompleteAttachmentUploadRequestBody, _super);
    function CompleteAttachmentUploadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AttachmentIds" }),
        __metadata("design:type", Array)
    ], CompleteAttachmentUploadRequestBody.prototype, "attachmentIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadRequestBody.prototype, "clientToken", void 0);
    return CompleteAttachmentUploadRequestBody;
}(SpeakeasyBase));
export { CompleteAttachmentUploadRequestBody };
var CompleteAttachmentUploadRequest = /** @class */ (function (_super) {
    __extends(CompleteAttachmentUploadRequest, _super);
    function CompleteAttachmentUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CompleteAttachmentUploadHeaders)
    ], CompleteAttachmentUploadRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CompleteAttachmentUploadRequestBody)
    ], CompleteAttachmentUploadRequest.prototype, "request", void 0);
    return CompleteAttachmentUploadRequest;
}(SpeakeasyBase));
export { CompleteAttachmentUploadRequest };
var CompleteAttachmentUploadResponse = /** @class */ (function (_super) {
    __extends(CompleteAttachmentUploadResponse, _super);
    function CompleteAttachmentUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CompleteAttachmentUploadResponse.prototype, "completeAttachmentUploadResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CompleteAttachmentUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CompleteAttachmentUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompleteAttachmentUploadResponse.prototype, "validationException", void 0);
    return CompleteAttachmentUploadResponse;
}(SpeakeasyBase));
export { CompleteAttachmentUploadResponse };
