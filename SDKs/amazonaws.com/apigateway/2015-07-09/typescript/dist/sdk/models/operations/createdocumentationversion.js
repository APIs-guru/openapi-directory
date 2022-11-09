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
var CreateDocumentationVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateDocumentationVersionPathParams, _super);
    function CreateDocumentationVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionPathParams.prototype, "restapiId", void 0);
    return CreateDocumentationVersionPathParams;
}(SpeakeasyBase));
export { CreateDocumentationVersionPathParams };
var CreateDocumentationVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateDocumentationVersionHeaders, _super);
    function CreateDocumentationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDocumentationVersionHeaders;
}(SpeakeasyBase));
export { CreateDocumentationVersionHeaders };
var CreateDocumentationVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateDocumentationVersionRequestBody, _super);
    function CreateDocumentationVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=documentationVersion" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionRequestBody.prototype, "documentationVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], CreateDocumentationVersionRequestBody.prototype, "stageName", void 0);
    return CreateDocumentationVersionRequestBody;
}(SpeakeasyBase));
export { CreateDocumentationVersionRequestBody };
var CreateDocumentationVersionRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentationVersionRequest, _super);
    function CreateDocumentationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDocumentationVersionPathParams)
    ], CreateDocumentationVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDocumentationVersionHeaders)
    ], CreateDocumentationVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDocumentationVersionRequestBody)
    ], CreateDocumentationVersionRequest.prototype, "request", void 0);
    return CreateDocumentationVersionRequest;
}(SpeakeasyBase));
export { CreateDocumentationVersionRequest };
var CreateDocumentationVersionResponse = /** @class */ (function (_super) {
    __extends(CreateDocumentationVersionResponse, _super);
    function CreateDocumentationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDocumentationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DocumentationVersion)
    ], CreateDocumentationVersionResponse.prototype, "documentationVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDocumentationVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationVersionResponse.prototype, "unauthorizedException", void 0);
    return CreateDocumentationVersionResponse;
}(SpeakeasyBase));
export { CreateDocumentationVersionResponse };
