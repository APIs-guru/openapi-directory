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
var GetAppsAppIdKeysPathParams = /** @class */ (function (_super) {
    __extends(GetAppsAppIdKeysPathParams, _super);
    function GetAppsAppIdKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], GetAppsAppIdKeysPathParams.prototype, "appId", void 0);
    return GetAppsAppIdKeysPathParams;
}(SpeakeasyBase));
export { GetAppsAppIdKeysPathParams };
var GetAppsAppIdKeysSecurity = /** @class */ (function (_super) {
    __extends(GetAppsAppIdKeysSecurity, _super);
    function GetAppsAppIdKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAppsAppIdKeysSecurity.prototype, "bearerAuth", void 0);
    return GetAppsAppIdKeysSecurity;
}(SpeakeasyBase));
export { GetAppsAppIdKeysSecurity };
var GetAppsAppIdKeysRequest = /** @class */ (function (_super) {
    __extends(GetAppsAppIdKeysRequest, _super);
    function GetAppsAppIdKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdKeysPathParams)
    ], GetAppsAppIdKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdKeysSecurity)
    ], GetAppsAppIdKeysRequest.prototype, "security", void 0);
    return GetAppsAppIdKeysRequest;
}(SpeakeasyBase));
export { GetAppsAppIdKeysRequest };
var GetAppsAppIdKeysResponse = /** @class */ (function (_super) {
    __extends(GetAppsAppIdKeysResponse, _super);
    function GetAppsAppIdKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAppsAppIdKeysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAppsAppIdKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetAppsAppIdKeysResponse.prototype, "error", void 0);
    __decorate([
        Metadata({ elemType: shared.KeyResponse }),
        __metadata("design:type", Array)
    ], GetAppsAppIdKeysResponse.prototype, "keyResponses", void 0);
    return GetAppsAppIdKeysResponse;
}(SpeakeasyBase));
export { GetAppsAppIdKeysResponse };
