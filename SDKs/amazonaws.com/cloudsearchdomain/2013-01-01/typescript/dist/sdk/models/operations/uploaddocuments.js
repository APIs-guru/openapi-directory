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
import * as shared from "../shared";
export var UploadDocumentsFormatEnum;
(function (UploadDocumentsFormatEnum) {
    UploadDocumentsFormatEnum["Sdk"] = "sdk";
})(UploadDocumentsFormatEnum || (UploadDocumentsFormatEnum = {}));
var UploadDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(UploadDocumentsQueryParams, _super);
    function UploadDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], UploadDocumentsQueryParams.prototype, "format", void 0);
    return UploadDocumentsQueryParams;
}(SpeakeasyBase));
export { UploadDocumentsQueryParams };
export var UploadDocumentsContentTypeEnum;
(function (UploadDocumentsContentTypeEnum) {
    UploadDocumentsContentTypeEnum["ApplicationJson"] = "application/json";
    UploadDocumentsContentTypeEnum["ApplicationXml"] = "application/xml";
})(UploadDocumentsContentTypeEnum || (UploadDocumentsContentTypeEnum = {}));
var UploadDocumentsHeaders = /** @class */ (function (_super) {
    __extends(UploadDocumentsHeaders, _super);
    function UploadDocumentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UploadDocumentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UploadDocumentsHeaders;
}(SpeakeasyBase));
export { UploadDocumentsHeaders };
var UploadDocumentsRequestBody = /** @class */ (function (_super) {
    __extends(UploadDocumentsRequestBody, _super);
    function UploadDocumentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=documents" }),
        __metadata("design:type", String)
    ], UploadDocumentsRequestBody.prototype, "documents", void 0);
    return UploadDocumentsRequestBody;
}(SpeakeasyBase));
export { UploadDocumentsRequestBody };
var UploadDocumentsRequest = /** @class */ (function (_super) {
    __extends(UploadDocumentsRequest, _super);
    function UploadDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UploadDocumentsQueryParams)
    ], UploadDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UploadDocumentsHeaders)
    ], UploadDocumentsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UploadDocumentsRequestBody)
    ], UploadDocumentsRequest.prototype, "request", void 0);
    return UploadDocumentsRequest;
}(SpeakeasyBase));
export { UploadDocumentsRequest };
var UploadDocumentsResponse = /** @class */ (function (_super) {
    __extends(UploadDocumentsResponse, _super);
    function UploadDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UploadDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DocumentServiceException)
    ], UploadDocumentsResponse.prototype, "documentServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UploadDocumentsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UploadDocumentsResponse)
    ], UploadDocumentsResponse.prototype, "uploadDocumentsResponse", void 0);
    return UploadDocumentsResponse;
}(SpeakeasyBase));
export { UploadDocumentsResponse };
