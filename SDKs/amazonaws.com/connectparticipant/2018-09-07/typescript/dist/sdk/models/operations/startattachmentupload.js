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
var StartAttachmentUploadHeaders = /** @class */ (function (_super) {
    __extends(StartAttachmentUploadHeaders, _super);
    function StartAttachmentUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartAttachmentUploadHeaders;
}(SpeakeasyBase));
export { StartAttachmentUploadHeaders };
var StartAttachmentUploadRequestBody = /** @class */ (function (_super) {
    __extends(StartAttachmentUploadRequestBody, _super);
    function StartAttachmentUploadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachmentName" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadRequestBody.prototype, "attachmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachmentSizeInBytes" }),
        __metadata("design:type", Number)
    ], StartAttachmentUploadRequestBody.prototype, "attachmentSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentType" }),
        __metadata("design:type", String)
    ], StartAttachmentUploadRequestBody.prototype, "contentType", void 0);
    return StartAttachmentUploadRequestBody;
}(SpeakeasyBase));
export { StartAttachmentUploadRequestBody };
var StartAttachmentUploadRequest = /** @class */ (function (_super) {
    __extends(StartAttachmentUploadRequest, _super);
    function StartAttachmentUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartAttachmentUploadHeaders)
    ], StartAttachmentUploadRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartAttachmentUploadRequestBody)
    ], StartAttachmentUploadRequest.prototype, "request", void 0);
    return StartAttachmentUploadRequest;
}(SpeakeasyBase));
export { StartAttachmentUploadRequest };
var StartAttachmentUploadResponse = /** @class */ (function (_super) {
    __extends(StartAttachmentUploadResponse, _super);
    function StartAttachmentUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAttachmentUploadResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartAttachmentUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAttachmentUploadResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAttachmentUploadResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartAttachmentUploadResponse)
    ], StartAttachmentUploadResponse.prototype, "startAttachmentUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartAttachmentUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAttachmentUploadResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAttachmentUploadResponse.prototype, "validationException", void 0);
    return StartAttachmentUploadResponse;
}(SpeakeasyBase));
export { StartAttachmentUploadResponse };
