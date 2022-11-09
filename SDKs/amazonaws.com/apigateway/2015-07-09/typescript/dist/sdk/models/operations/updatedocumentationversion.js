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
var UpdateDocumentationVersionPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocumentationVersionPathParams, _super);
    function UpdateDocumentationVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=doc_version" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionPathParams.prototype, "docVersion", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionPathParams.prototype, "restapiId", void 0);
    return UpdateDocumentationVersionPathParams;
}(SpeakeasyBase));
export { UpdateDocumentationVersionPathParams };
var UpdateDocumentationVersionHeaders = /** @class */ (function (_super) {
    __extends(UpdateDocumentationVersionHeaders, _super);
    function UpdateDocumentationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDocumentationVersionHeaders;
}(SpeakeasyBase));
export { UpdateDocumentationVersionHeaders };
var UpdateDocumentationVersionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDocumentationVersionRequestBody, _super);
    function UpdateDocumentationVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation }),
        __metadata("design:type", Array)
    ], UpdateDocumentationVersionRequestBody.prototype, "patchOperations", void 0);
    return UpdateDocumentationVersionRequestBody;
}(SpeakeasyBase));
export { UpdateDocumentationVersionRequestBody };
var UpdateDocumentationVersionRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentationVersionRequest, _super);
    function UpdateDocumentationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentationVersionPathParams)
    ], UpdateDocumentationVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentationVersionHeaders)
    ], UpdateDocumentationVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDocumentationVersionRequestBody)
    ], UpdateDocumentationVersionRequest.prototype, "request", void 0);
    return UpdateDocumentationVersionRequest;
}(SpeakeasyBase));
export { UpdateDocumentationVersionRequest };
var UpdateDocumentationVersionResponse = /** @class */ (function (_super) {
    __extends(UpdateDocumentationVersionResponse, _super);
    function UpdateDocumentationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDocumentationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DocumentationVersion)
    ], UpdateDocumentationVersionResponse.prototype, "documentationVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDocumentationVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationVersionResponse.prototype, "unauthorizedException", void 0);
    return UpdateDocumentationVersionResponse;
}(SpeakeasyBase));
export { UpdateDocumentationVersionResponse };
