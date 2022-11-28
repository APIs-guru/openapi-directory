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
var PatchAppsAppIdNamespacesNamespaceIdPathParams = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdNamespacesNamespaceIdPathParams, _super);
    function PatchAppsAppIdNamespacesNamespaceIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdNamespacesNamespaceIdPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdNamespacesNamespaceIdPathParams.prototype, "namespaceId", void 0);
    return PatchAppsAppIdNamespacesNamespaceIdPathParams;
}(SpeakeasyBase));
export { PatchAppsAppIdNamespacesNamespaceIdPathParams };
var PatchAppsAppIdNamespacesNamespaceIdSecurity = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdNamespacesNamespaceIdSecurity, _super);
    function PatchAppsAppIdNamespacesNamespaceIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PatchAppsAppIdNamespacesNamespaceIdSecurity.prototype, "bearerAuth", void 0);
    return PatchAppsAppIdNamespacesNamespaceIdSecurity;
}(SpeakeasyBase));
export { PatchAppsAppIdNamespacesNamespaceIdSecurity };
var PatchAppsAppIdNamespacesNamespaceIdRequest = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdNamespacesNamespaceIdRequest, _super);
    function PatchAppsAppIdNamespacesNamespaceIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdNamespacesNamespaceIdPathParams)
    ], PatchAppsAppIdNamespacesNamespaceIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NamespacePatch)
    ], PatchAppsAppIdNamespacesNamespaceIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdNamespacesNamespaceIdSecurity)
    ], PatchAppsAppIdNamespacesNamespaceIdRequest.prototype, "security", void 0);
    return PatchAppsAppIdNamespacesNamespaceIdRequest;
}(SpeakeasyBase));
export { PatchAppsAppIdNamespacesNamespaceIdRequest };
var PatchAppsAppIdNamespacesNamespaceIdResponse = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdNamespacesNamespaceIdResponse, _super);
    function PatchAppsAppIdNamespacesNamespaceIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchAppsAppIdNamespacesNamespaceIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchAppsAppIdNamespacesNamespaceIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PatchAppsAppIdNamespacesNamespaceIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NamespaceResponse)
    ], PatchAppsAppIdNamespacesNamespaceIdResponse.prototype, "namespaceResponse", void 0);
    return PatchAppsAppIdNamespacesNamespaceIdResponse;
}(SpeakeasyBase));
export { PatchAppsAppIdNamespacesNamespaceIdResponse };
