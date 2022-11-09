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
var GetApiActivityQueryParams = /** @class */ (function (_super) {
    __extends(GetApiActivityQueryParams, _super);
    function GetApiActivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetApiActivityQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetApiActivityQueryParams.prototype, "offset", void 0);
    return GetApiActivityQueryParams;
}(SpeakeasyBase));
export { GetApiActivityQueryParams };
var GetApiActivitySecurity = /** @class */ (function (_super) {
    __extends(GetApiActivitySecurity, _super);
    function GetApiActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetApiActivitySecurity.prototype, "connectToken", void 0);
    return GetApiActivitySecurity;
}(SpeakeasyBase));
export { GetApiActivitySecurity };
var GetApiActivityRequest = /** @class */ (function (_super) {
    __extends(GetApiActivityRequest, _super);
    function GetApiActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiActivityQueryParams)
    ], GetApiActivityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiActivitySecurity)
    ], GetApiActivityRequest.prototype, "security", void 0);
    return GetApiActivityRequest;
}(SpeakeasyBase));
export { GetApiActivityRequest };
var GetApiActivityResponse = /** @class */ (function (_super) {
    __extends(GetApiActivityResponse, _super);
    function GetApiActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.ApiRequest }),
        __metadata("design:type", Array)
    ], GetApiActivityResponse.prototype, "apiRequests", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiActivityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetApiActivityResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiActivityResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiActivityResponse.prototype, "statusCode", void 0);
    return GetApiActivityResponse;
}(SpeakeasyBase));
export { GetApiActivityResponse };
