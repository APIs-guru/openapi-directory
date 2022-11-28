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
var DeleteAppsAppIdNamespacesNamespaceIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAppsAppIdNamespacesNamespaceIdPathParams, _super);
    function DeleteAppsAppIdNamespacesNamespaceIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], DeleteAppsAppIdNamespacesNamespaceIdPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" }),
        __metadata("design:type", String)
    ], DeleteAppsAppIdNamespacesNamespaceIdPathParams.prototype, "namespaceId", void 0);
    return DeleteAppsAppIdNamespacesNamespaceIdPathParams;
}(SpeakeasyBase));
export { DeleteAppsAppIdNamespacesNamespaceIdPathParams };
var DeleteAppsAppIdNamespacesNamespaceIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteAppsAppIdNamespacesNamespaceIdSecurity, _super);
    function DeleteAppsAppIdNamespacesNamespaceIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], DeleteAppsAppIdNamespacesNamespaceIdSecurity.prototype, "bearerAuth", void 0);
    return DeleteAppsAppIdNamespacesNamespaceIdSecurity;
}(SpeakeasyBase));
export { DeleteAppsAppIdNamespacesNamespaceIdSecurity };
var DeleteAppsAppIdNamespacesNamespaceIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAppsAppIdNamespacesNamespaceIdRequest, _super);
    function DeleteAppsAppIdNamespacesNamespaceIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAppsAppIdNamespacesNamespaceIdPathParams)
    ], DeleteAppsAppIdNamespacesNamespaceIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAppsAppIdNamespacesNamespaceIdSecurity)
    ], DeleteAppsAppIdNamespacesNamespaceIdRequest.prototype, "security", void 0);
    return DeleteAppsAppIdNamespacesNamespaceIdRequest;
}(SpeakeasyBase));
export { DeleteAppsAppIdNamespacesNamespaceIdRequest };
var DeleteAppsAppIdNamespacesNamespaceIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAppsAppIdNamespacesNamespaceIdResponse, _super);
    function DeleteAppsAppIdNamespacesNamespaceIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAppsAppIdNamespacesNamespaceIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAppsAppIdNamespacesNamespaceIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], DeleteAppsAppIdNamespacesNamespaceIdResponse.prototype, "error", void 0);
    return DeleteAppsAppIdNamespacesNamespaceIdResponse;
}(SpeakeasyBase));
export { DeleteAppsAppIdNamespacesNamespaceIdResponse };
