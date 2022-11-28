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
var PatchAppsAppIdKeysKeyIdPathParams = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdKeysKeyIdPathParams, _super);
    function PatchAppsAppIdKeysKeyIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdKeysKeyIdPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdKeysKeyIdPathParams.prototype, "keyId", void 0);
    return PatchAppsAppIdKeysKeyIdPathParams;
}(SpeakeasyBase));
export { PatchAppsAppIdKeysKeyIdPathParams };
var PatchAppsAppIdKeysKeyIdSecurity = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdKeysKeyIdSecurity, _super);
    function PatchAppsAppIdKeysKeyIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PatchAppsAppIdKeysKeyIdSecurity.prototype, "bearerAuth", void 0);
    return PatchAppsAppIdKeysKeyIdSecurity;
}(SpeakeasyBase));
export { PatchAppsAppIdKeysKeyIdSecurity };
var PatchAppsAppIdKeysKeyIdRequest = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdKeysKeyIdRequest, _super);
    function PatchAppsAppIdKeysKeyIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdKeysKeyIdPathParams)
    ], PatchAppsAppIdKeysKeyIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KeyPatch)
    ], PatchAppsAppIdKeysKeyIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdKeysKeyIdSecurity)
    ], PatchAppsAppIdKeysKeyIdRequest.prototype, "security", void 0);
    return PatchAppsAppIdKeysKeyIdRequest;
}(SpeakeasyBase));
export { PatchAppsAppIdKeysKeyIdRequest };
var PatchAppsAppIdKeysKeyIdResponse = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdKeysKeyIdResponse, _super);
    function PatchAppsAppIdKeysKeyIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchAppsAppIdKeysKeyIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchAppsAppIdKeysKeyIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PatchAppsAppIdKeysKeyIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.KeyResponse)
    ], PatchAppsAppIdKeysKeyIdResponse.prototype, "keyResponse", void 0);
    return PatchAppsAppIdKeysKeyIdResponse;
}(SpeakeasyBase));
export { PatchAppsAppIdKeysKeyIdResponse };
