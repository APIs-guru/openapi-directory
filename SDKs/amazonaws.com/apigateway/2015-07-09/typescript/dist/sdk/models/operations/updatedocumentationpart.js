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
var UpdateDocumentationPartPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocumentationPartPathParams, _super);
    function UpdateDocumentationPartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=part_id" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartPathParams.prototype, "partId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartPathParams.prototype, "restapiId", void 0);
    return UpdateDocumentationPartPathParams;
}(SpeakeasyBase));
export { UpdateDocumentationPartPathParams };
var UpdateDocumentationPartHeaders = /** @class */ (function (_super) {
    __extends(UpdateDocumentationPartHeaders, _super);
    function UpdateDocumentationPartHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDocumentationPartHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDocumentationPartHeaders;
}(SpeakeasyBase));
export { UpdateDocumentationPartHeaders };
var UpdateDocumentationPartRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDocumentationPartRequestBody, _super);
    function UpdateDocumentationPartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation }),
        __metadata("design:type", Array)
    ], UpdateDocumentationPartRequestBody.prototype, "patchOperations", void 0);
    return UpdateDocumentationPartRequestBody;
}(SpeakeasyBase));
export { UpdateDocumentationPartRequestBody };
var UpdateDocumentationPartRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentationPartRequest, _super);
    function UpdateDocumentationPartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentationPartPathParams)
    ], UpdateDocumentationPartRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentationPartHeaders)
    ], UpdateDocumentationPartRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDocumentationPartRequestBody)
    ], UpdateDocumentationPartRequest.prototype, "request", void 0);
    return UpdateDocumentationPartRequest;
}(SpeakeasyBase));
export { UpdateDocumentationPartRequest };
var UpdateDocumentationPartResponse = /** @class */ (function (_super) {
    __extends(UpdateDocumentationPartResponse, _super);
    function UpdateDocumentationPartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDocumentationPartResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DocumentationPart)
    ], UpdateDocumentationPartResponse.prototype, "documentationPart", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDocumentationPartResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDocumentationPartResponse.prototype, "unauthorizedException", void 0);
    return UpdateDocumentationPartResponse;
}(SpeakeasyBase));
export { UpdateDocumentationPartResponse };
