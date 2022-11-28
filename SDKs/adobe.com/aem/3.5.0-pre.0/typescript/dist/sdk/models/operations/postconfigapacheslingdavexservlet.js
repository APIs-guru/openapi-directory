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
var PostConfigApacheSlingDavExServletQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingDavExServletQueryParams, _super);
    function PostConfigApacheSlingDavExServletQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingDavExServletQueryParams.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingDavExServletQueryParams.prototype, "aliasAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheSlingDavExServletQueryParams.prototype, "davCreateAbsoluteUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dav.create-absolute-uri@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingDavExServletQueryParams.prototype, "davCreateAbsoluteUriAtTypeHint", void 0);
    return PostConfigApacheSlingDavExServletQueryParams;
}(SpeakeasyBase));
export { PostConfigApacheSlingDavExServletQueryParams };
var PostConfigApacheSlingDavExServletRequest = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingDavExServletRequest, _super);
    function PostConfigApacheSlingDavExServletRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigApacheSlingDavExServletQueryParams)
    ], PostConfigApacheSlingDavExServletRequest.prototype, "queryParams", void 0);
    return PostConfigApacheSlingDavExServletRequest;
}(SpeakeasyBase));
export { PostConfigApacheSlingDavExServletRequest };
var PostConfigApacheSlingDavExServletResponse = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingDavExServletResponse, _super);
    function PostConfigApacheSlingDavExServletResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigApacheSlingDavExServletResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigApacheSlingDavExServletResponse.prototype, "statusCode", void 0);
    return PostConfigApacheSlingDavExServletResponse;
}(SpeakeasyBase));
export { PostConfigApacheSlingDavExServletResponse };
