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
var UploadMultipartPartPathParams = /** @class */ (function (_super) {
    __extends(UploadMultipartPartPathParams, _super);
    function UploadMultipartPartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], UploadMultipartPartPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" }),
        __metadata("design:type", String)
    ], UploadMultipartPartPathParams.prototype, "uploadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], UploadMultipartPartPathParams.prototype, "vaultName", void 0);
    return UploadMultipartPartPathParams;
}(SpeakeasyBase));
export { UploadMultipartPartPathParams };
var UploadMultipartPartHeaders = /** @class */ (function (_super) {
    __extends(UploadMultipartPartHeaders, _super);
    function UploadMultipartPartHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "contentRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-sha256-tree-hash" }),
        __metadata("design:type", String)
    ], UploadMultipartPartHeaders.prototype, "xAmzSha256TreeHash", void 0);
    return UploadMultipartPartHeaders;
}(SpeakeasyBase));
export { UploadMultipartPartHeaders };
var UploadMultipartPartRequestBody = /** @class */ (function (_super) {
    __extends(UploadMultipartPartRequestBody, _super);
    function UploadMultipartPartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], UploadMultipartPartRequestBody.prototype, "body", void 0);
    return UploadMultipartPartRequestBody;
}(SpeakeasyBase));
export { UploadMultipartPartRequestBody };
var UploadMultipartPartRequest = /** @class */ (function (_super) {
    __extends(UploadMultipartPartRequest, _super);
    function UploadMultipartPartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadMultipartPartPathParams)
    ], UploadMultipartPartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadMultipartPartHeaders)
    ], UploadMultipartPartRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UploadMultipartPartRequestBody)
    ], UploadMultipartPartRequest.prototype, "request", void 0);
    return UploadMultipartPartRequest;
}(SpeakeasyBase));
export { UploadMultipartPartRequest };
var UploadMultipartPartResponse = /** @class */ (function (_super) {
    __extends(UploadMultipartPartResponse, _super);
    function UploadMultipartPartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadMultipartPartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadMultipartPartResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadMultipartPartResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadMultipartPartResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadMultipartPartResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadMultipartPartResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadMultipartPartResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UploadMultipartPartResponse.prototype, "uploadMultipartPartOutput", void 0);
    return UploadMultipartPartResponse;
}(SpeakeasyBase));
export { UploadMultipartPartResponse };
