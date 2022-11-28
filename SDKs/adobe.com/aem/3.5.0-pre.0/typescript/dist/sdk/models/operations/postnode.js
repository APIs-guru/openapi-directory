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
var PostNodePathParams = /** @class */ (function (_super) {
    __extends(PostNodePathParams, _super);
    function PostNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PostNodePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], PostNodePathParams.prototype, "path", void 0);
    return PostNodePathParams;
}(SpeakeasyBase));
export { PostNodePathParams };
var PostNodeQueryParams = /** @class */ (function (_super) {
    __extends(PostNodeQueryParams, _super);
    function PostNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" }),
        __metadata("design:type", String)
    ], PostNodeQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleteAuthorizable" }),
        __metadata("design:type", String)
    ], PostNodeQueryParams.prototype, "deleteAuthorizable", void 0);
    return PostNodeQueryParams;
}(SpeakeasyBase));
export { PostNodeQueryParams };
var PostNodeRequestBodyFile = /** @class */ (function (_super) {
    __extends(PostNodeRequestBodyFile, _super);
    function PostNodeRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostNodeRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PostNodeRequestBodyFile.prototype, "file", void 0);
    return PostNodeRequestBodyFile;
}(SpeakeasyBase));
export { PostNodeRequestBodyFile };
var PostNodeRequestBody = /** @class */ (function (_super) {
    __extends(PostNodeRequestBody, _super);
    function PostNodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostNodeRequestBodyFile)
    ], PostNodeRequestBody.prototype, "file", void 0);
    return PostNodeRequestBody;
}(SpeakeasyBase));
export { PostNodeRequestBody };
var PostNodeRequest = /** @class */ (function (_super) {
    __extends(PostNodeRequest, _super);
    function PostNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNodePathParams)
    ], PostNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNodeQueryParams)
    ], PostNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostNodeRequestBody)
    ], PostNodeRequest.prototype, "request", void 0);
    return PostNodeRequest;
}(SpeakeasyBase));
export { PostNodeRequest };
var PostNodeResponse = /** @class */ (function (_super) {
    __extends(PostNodeResponse, _super);
    function PostNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNodeResponse.prototype, "statusCode", void 0);
    return PostNodeResponse;
}(SpeakeasyBase));
export { PostNodeResponse };
