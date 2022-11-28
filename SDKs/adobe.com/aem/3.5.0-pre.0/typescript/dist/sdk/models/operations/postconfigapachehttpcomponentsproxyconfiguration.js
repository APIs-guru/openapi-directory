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
var PostConfigApacheHttpComponentsProxyConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigApacheHttpComponentsProxyConfigurationQueryParams, _super);
    function PostConfigApacheHttpComponentsProxyConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyEnabledAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions" }),
        __metadata("design:type", Array)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyExceptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyExceptionsAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.host" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.host@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyHostAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.password" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.password@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyPasswordAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.port" }),
        __metadata("design:type", Number)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.port@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyPortAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.user" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.user@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationQueryParams.prototype, "proxyUserAtTypeHint", void 0);
    return PostConfigApacheHttpComponentsProxyConfigurationQueryParams;
}(SpeakeasyBase));
export { PostConfigApacheHttpComponentsProxyConfigurationQueryParams };
var PostConfigApacheHttpComponentsProxyConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostConfigApacheHttpComponentsProxyConfigurationRequest, _super);
    function PostConfigApacheHttpComponentsProxyConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigApacheHttpComponentsProxyConfigurationQueryParams)
    ], PostConfigApacheHttpComponentsProxyConfigurationRequest.prototype, "queryParams", void 0);
    return PostConfigApacheHttpComponentsProxyConfigurationRequest;
}(SpeakeasyBase));
export { PostConfigApacheHttpComponentsProxyConfigurationRequest };
var PostConfigApacheHttpComponentsProxyConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostConfigApacheHttpComponentsProxyConfigurationResponse, _super);
    function PostConfigApacheHttpComponentsProxyConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigApacheHttpComponentsProxyConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigApacheHttpComponentsProxyConfigurationResponse.prototype, "statusCode", void 0);
    return PostConfigApacheHttpComponentsProxyConfigurationResponse;
}(SpeakeasyBase));
export { PostConfigApacheHttpComponentsProxyConfigurationResponse };
