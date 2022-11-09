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
var PostAppsAppIdKeysPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdKeysPathParams, _super);
    function PostAppsAppIdKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PostAppsAppIdKeysPathParams.prototype, "appId", void 0);
    return PostAppsAppIdKeysPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdKeysPathParams };
var PostAppsAppIdKeysSecurity = /** @class */ (function (_super) {
    __extends(PostAppsAppIdKeysSecurity, _super);
    function PostAppsAppIdKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostAppsAppIdKeysSecurity.prototype, "bearerAuth", void 0);
    return PostAppsAppIdKeysSecurity;
}(SpeakeasyBase));
export { PostAppsAppIdKeysSecurity };
var PostAppsAppIdKeysRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdKeysRequest, _super);
    function PostAppsAppIdKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdKeysPathParams)
    ], PostAppsAppIdKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KeyPost)
    ], PostAppsAppIdKeysRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdKeysSecurity)
    ], PostAppsAppIdKeysRequest.prototype, "security", void 0);
    return PostAppsAppIdKeysRequest;
}(SpeakeasyBase));
export { PostAppsAppIdKeysRequest };
var PostAppsAppIdKeysResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdKeysResponse, _super);
    function PostAppsAppIdKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdKeysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], PostAppsAppIdKeysResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.KeyResponse)
    ], PostAppsAppIdKeysResponse.prototype, "keyResponse", void 0);
    return PostAppsAppIdKeysResponse;
}(SpeakeasyBase));
export { PostAppsAppIdKeysResponse };
