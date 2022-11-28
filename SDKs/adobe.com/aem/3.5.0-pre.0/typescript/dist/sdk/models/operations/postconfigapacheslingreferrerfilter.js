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
var PostConfigApacheSlingReferrerFilterQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingReferrerFilterQueryParams, _super);
    function PostConfigApacheSlingReferrerFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.empty" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowEmpty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.empty@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowEmptyAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowHosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowHostsRegexp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowHostsRegexpAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "allowHostsAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter.methods" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "filterMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter.methods@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterQueryParams.prototype, "filterMethodsAtTypeHint", void 0);
    return PostConfigApacheSlingReferrerFilterQueryParams;
}(SpeakeasyBase));
export { PostConfigApacheSlingReferrerFilterQueryParams };
var PostConfigApacheSlingReferrerFilterRequest = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingReferrerFilterRequest, _super);
    function PostConfigApacheSlingReferrerFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigApacheSlingReferrerFilterQueryParams)
    ], PostConfigApacheSlingReferrerFilterRequest.prototype, "queryParams", void 0);
    return PostConfigApacheSlingReferrerFilterRequest;
}(SpeakeasyBase));
export { PostConfigApacheSlingReferrerFilterRequest };
var PostConfigApacheSlingReferrerFilterResponse = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingReferrerFilterResponse, _super);
    function PostConfigApacheSlingReferrerFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigApacheSlingReferrerFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigApacheSlingReferrerFilterResponse.prototype, "statusCode", void 0);
    return PostConfigApacheSlingReferrerFilterResponse;
}(SpeakeasyBase));
export { PostConfigApacheSlingReferrerFilterResponse };
