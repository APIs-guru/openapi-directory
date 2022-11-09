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
var CreateTypePathParams = /** @class */ (function (_super) {
    __extends(CreateTypePathParams, _super);
    function CreateTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateTypePathParams.prototype, "apiId", void 0);
    return CreateTypePathParams;
}(SpeakeasyBase));
export { CreateTypePathParams };
var CreateTypeHeaders = /** @class */ (function (_super) {
    __extends(CreateTypeHeaders, _super);
    function CreateTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateTypeHeaders;
}(SpeakeasyBase));
export { CreateTypeHeaders };
export var CreateTypeRequestBodyFormatEnum;
(function (CreateTypeRequestBodyFormatEnum) {
    CreateTypeRequestBodyFormatEnum["Sdl"] = "SDL";
    CreateTypeRequestBodyFormatEnum["Json"] = "JSON";
})(CreateTypeRequestBodyFormatEnum || (CreateTypeRequestBodyFormatEnum = {}));
var CreateTypeRequestBody = /** @class */ (function (_super) {
    __extends(CreateTypeRequestBody, _super);
    function CreateTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], CreateTypeRequestBody.prototype, "definition", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CreateTypeRequestBody.prototype, "format", void 0);
    return CreateTypeRequestBody;
}(SpeakeasyBase));
export { CreateTypeRequestBody };
var CreateTypeRequest = /** @class */ (function (_super) {
    __extends(CreateTypeRequest, _super);
    function CreateTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTypePathParams)
    ], CreateTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTypeHeaders)
    ], CreateTypeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTypeRequestBody)
    ], CreateTypeRequest.prototype, "request", void 0);
    return CreateTypeRequest;
}(SpeakeasyBase));
export { CreateTypeRequest };
var CreateTypeResponse = /** @class */ (function (_super) {
    __extends(CreateTypeResponse, _super);
    function CreateTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTypeResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTypeResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateTypeResponse)
    ], CreateTypeResponse.prototype, "createTypeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTypeResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTypeResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTypeResponse.prototype, "unauthorizedException", void 0);
    return CreateTypeResponse;
}(SpeakeasyBase));
export { CreateTypeResponse };
