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
var PostPackageServiceJsonPathParams = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonPathParams, _super);
    function PostPackageServiceJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonPathParams.prototype, "path", void 0);
    return PostPackageServiceJsonPathParams;
}(SpeakeasyBase));
export { PostPackageServiceJsonPathParams };
var PostPackageServiceJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonQueryParams, _super);
    function PostPackageServiceJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_charset_" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonQueryParams.prototype, "charset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonQueryParams.prototype, "cmd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], PostPackageServiceJsonQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupName" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageName" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonQueryParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageVersion" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonQueryParams.prototype, "packageVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], PostPackageServiceJsonQueryParams.prototype, "recursive", void 0);
    return PostPackageServiceJsonQueryParams;
}(SpeakeasyBase));
export { PostPackageServiceJsonQueryParams };
var PostPackageServiceJsonRequestBodyPackage = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonRequestBodyPackage, _super);
    function PostPackageServiceJsonRequestBodyPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostPackageServiceJsonRequestBodyPackage.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=package" }),
        __metadata("design:type", String)
    ], PostPackageServiceJsonRequestBodyPackage.prototype, "package", void 0);
    return PostPackageServiceJsonRequestBodyPackage;
}(SpeakeasyBase));
export { PostPackageServiceJsonRequestBodyPackage };
var PostPackageServiceJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonRequestBody, _super);
    function PostPackageServiceJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostPackageServiceJsonRequestBodyPackage)
    ], PostPackageServiceJsonRequestBody.prototype, "package", void 0);
    return PostPackageServiceJsonRequestBody;
}(SpeakeasyBase));
export { PostPackageServiceJsonRequestBody };
var PostPackageServiceJsonRequest = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonRequest, _super);
    function PostPackageServiceJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPackageServiceJsonPathParams)
    ], PostPackageServiceJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPackageServiceJsonQueryParams)
    ], PostPackageServiceJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostPackageServiceJsonRequestBody)
    ], PostPackageServiceJsonRequest.prototype, "request", void 0);
    return PostPackageServiceJsonRequest;
}(SpeakeasyBase));
export { PostPackageServiceJsonRequest };
var PostPackageServiceJsonResponse = /** @class */ (function (_super) {
    __extends(PostPackageServiceJsonResponse, _super);
    function PostPackageServiceJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPackageServiceJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPackageServiceJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPackageServiceJsonResponse.prototype, "postPackageServiceJsonDefaultApplicationJsonString", void 0);
    return PostPackageServiceJsonResponse;
}(SpeakeasyBase));
export { PostPackageServiceJsonResponse };
