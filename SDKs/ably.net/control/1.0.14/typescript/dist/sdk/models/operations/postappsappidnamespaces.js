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
import * as shared from "../shared";
var PostAppsAppIdNamespacesPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdNamespacesPathParams, _super);
    function PostAppsAppIdNamespacesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PostAppsAppIdNamespacesPathParams.prototype, "appId", void 0);
    return PostAppsAppIdNamespacesPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdNamespacesPathParams };
var PostAppsAppIdNamespacesSecurity = /** @class */ (function (_super) {
    __extends(PostAppsAppIdNamespacesSecurity, _super);
    function PostAppsAppIdNamespacesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostAppsAppIdNamespacesSecurity.prototype, "bearerAuth", void 0);
    return PostAppsAppIdNamespacesSecurity;
}(SpeakeasyBase));
export { PostAppsAppIdNamespacesSecurity };
var PostAppsAppIdNamespacesRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdNamespacesRequest, _super);
    function PostAppsAppIdNamespacesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdNamespacesPathParams)
    ], PostAppsAppIdNamespacesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NamespacePost)
    ], PostAppsAppIdNamespacesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdNamespacesSecurity)
    ], PostAppsAppIdNamespacesRequest.prototype, "security", void 0);
    return PostAppsAppIdNamespacesRequest;
}(SpeakeasyBase));
export { PostAppsAppIdNamespacesRequest };
var PostAppsAppIdNamespacesResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdNamespacesResponse, _super);
    function PostAppsAppIdNamespacesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdNamespacesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdNamespacesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostAppsAppIdNamespacesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NamespaceResponse)
    ], PostAppsAppIdNamespacesResponse.prototype, "namespaceResponse", void 0);
    return PostAppsAppIdNamespacesResponse;
}(SpeakeasyBase));
export { PostAppsAppIdNamespacesResponse };
