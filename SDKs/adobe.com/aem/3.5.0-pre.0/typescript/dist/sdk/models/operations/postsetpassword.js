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
var PostSetPasswordQueryParams = /** @class */ (function (_super) {
    __extends(PostSetPasswordQueryParams, _super);
    function PostSetPasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=old" }),
        __metadata("design:type", String)
    ], PostSetPasswordQueryParams.prototype, "old", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plain" }),
        __metadata("design:type", String)
    ], PostSetPasswordQueryParams.prototype, "plain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verify" }),
        __metadata("design:type", String)
    ], PostSetPasswordQueryParams.prototype, "verify", void 0);
    return PostSetPasswordQueryParams;
}(SpeakeasyBase));
export { PostSetPasswordQueryParams };
var PostSetPasswordRequest = /** @class */ (function (_super) {
    __extends(PostSetPasswordRequest, _super);
    function PostSetPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetPasswordQueryParams)
    ], PostSetPasswordRequest.prototype, "queryParams", void 0);
    return PostSetPasswordRequest;
}(SpeakeasyBase));
export { PostSetPasswordRequest };
var PostSetPasswordResponse = /** @class */ (function (_super) {
    __extends(PostSetPasswordResponse, _super);
    function PostSetPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetPasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetPasswordResponse.prototype, "postSetPasswordDefaultTextPlainString", void 0);
    return PostSetPasswordResponse;
}(SpeakeasyBase));
export { PostSetPasswordResponse };
