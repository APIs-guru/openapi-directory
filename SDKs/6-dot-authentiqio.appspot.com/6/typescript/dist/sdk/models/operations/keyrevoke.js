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
var KeyRevokePathParams = /** @class */ (function (_super) {
    __extends(KeyRevokePathParams, _super);
    function KeyRevokePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" }),
        __metadata("design:type", String)
    ], KeyRevokePathParams.prototype, "pk", void 0);
    return KeyRevokePathParams;
}(SpeakeasyBase));
export { KeyRevokePathParams };
var KeyRevokeQueryParams = /** @class */ (function (_super) {
    __extends(KeyRevokeQueryParams, _super);
    function KeyRevokeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" }),
        __metadata("design:type", String)
    ], KeyRevokeQueryParams.prototype, "secret", void 0);
    return KeyRevokeQueryParams;
}(SpeakeasyBase));
export { KeyRevokeQueryParams };
var KeyRevoke200ApplicationJson = /** @class */ (function (_super) {
    __extends(KeyRevoke200ApplicationJson, _super);
    function KeyRevoke200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], KeyRevoke200ApplicationJson.prototype, "status", void 0);
    return KeyRevoke200ApplicationJson;
}(SpeakeasyBase));
export { KeyRevoke200ApplicationJson };
var KeyRevokeRequest = /** @class */ (function (_super) {
    __extends(KeyRevokeRequest, _super);
    function KeyRevokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", KeyRevokePathParams)
    ], KeyRevokeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", KeyRevokeQueryParams)
    ], KeyRevokeRequest.prototype, "queryParams", void 0);
    return KeyRevokeRequest;
}(SpeakeasyBase));
export { KeyRevokeRequest };
var KeyRevokeResponse = /** @class */ (function (_super) {
    __extends(KeyRevokeResponse, _super);
    function KeyRevokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], KeyRevokeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], KeyRevokeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], KeyRevokeResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], KeyRevokeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", KeyRevoke200ApplicationJson)
    ], KeyRevokeResponse.prototype, "keyRevoke200ApplicationJsonObject", void 0);
    return KeyRevokeResponse;
}(SpeakeasyBase));
export { KeyRevokeResponse };
