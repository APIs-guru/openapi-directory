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
var PostTruststoreQueryParams = /** @class */ (function (_super) {
    __extends(PostTruststoreQueryParams, _super);
    function PostTruststoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" }),
        __metadata("design:type", String)
    ], PostTruststoreQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStoreType" }),
        __metadata("design:type", String)
    ], PostTruststoreQueryParams.prototype, "keyStoreType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" }),
        __metadata("design:type", String)
    ], PostTruststoreQueryParams.prototype, "newPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rePassword" }),
        __metadata("design:type", String)
    ], PostTruststoreQueryParams.prototype, "rePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeAlias" }),
        __metadata("design:type", String)
    ], PostTruststoreQueryParams.prototype, "removeAlias", void 0);
    return PostTruststoreQueryParams;
}(SpeakeasyBase));
export { PostTruststoreQueryParams };
var PostTruststoreRequestBodyCertificate = /** @class */ (function (_super) {
    __extends(PostTruststoreRequestBodyCertificate, _super);
    function PostTruststoreRequestBodyCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=certificate" }),
        __metadata("design:type", String)
    ], PostTruststoreRequestBodyCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostTruststoreRequestBodyCertificate.prototype, "content", void 0);
    return PostTruststoreRequestBodyCertificate;
}(SpeakeasyBase));
export { PostTruststoreRequestBodyCertificate };
var PostTruststoreRequestBody = /** @class */ (function (_super) {
    __extends(PostTruststoreRequestBody, _super);
    function PostTruststoreRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostTruststoreRequestBodyCertificate)
    ], PostTruststoreRequestBody.prototype, "certificate", void 0);
    return PostTruststoreRequestBody;
}(SpeakeasyBase));
export { PostTruststoreRequestBody };
var PostTruststoreRequest = /** @class */ (function (_super) {
    __extends(PostTruststoreRequest, _super);
    function PostTruststoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTruststoreQueryParams)
    ], PostTruststoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostTruststoreRequestBody)
    ], PostTruststoreRequest.prototype, "request", void 0);
    return PostTruststoreRequest;
}(SpeakeasyBase));
export { PostTruststoreRequest };
var PostTruststoreResponse = /** @class */ (function (_super) {
    __extends(PostTruststoreResponse, _super);
    function PostTruststoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruststoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTruststoreResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruststoreResponse.prototype, "postTruststoreDefaultTextPlainString", void 0);
    return PostTruststoreResponse;
}(SpeakeasyBase));
export { PostTruststoreResponse };
