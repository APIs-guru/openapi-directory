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
var PostPackageUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PostPackageUpdateQueryParams, _super);
    function PostPackageUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_charset_" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "charset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupName" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageName" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], PostPackageUpdateQueryParams.prototype, "version", void 0);
    return PostPackageUpdateQueryParams;
}(SpeakeasyBase));
export { PostPackageUpdateQueryParams };
var PostPackageUpdateRequest = /** @class */ (function (_super) {
    __extends(PostPackageUpdateRequest, _super);
    function PostPackageUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPackageUpdateQueryParams)
    ], PostPackageUpdateRequest.prototype, "queryParams", void 0);
    return PostPackageUpdateRequest;
}(SpeakeasyBase));
export { PostPackageUpdateRequest };
var PostPackageUpdateResponse = /** @class */ (function (_super) {
    __extends(PostPackageUpdateResponse, _super);
    function PostPackageUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPackageUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPackageUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPackageUpdateResponse.prototype, "postPackageUpdateDefaultApplicationJsonString", void 0);
    return PostPackageUpdateResponse;
}(SpeakeasyBase));
export { PostPackageUpdateResponse };
