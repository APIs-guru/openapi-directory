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
var GetVaultItemsPathParams = /** @class */ (function (_super) {
    __extends(GetVaultItemsPathParams, _super);
    function GetVaultItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetVaultItemsPathParams.prototype, "vaultUuid", void 0);
    return GetVaultItemsPathParams;
}(SpeakeasyBase));
export { GetVaultItemsPathParams };
var GetVaultItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetVaultItemsQueryParams, _super);
    function GetVaultItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVaultItemsQueryParams.prototype, "filter", void 0);
    return GetVaultItemsQueryParams;
}(SpeakeasyBase));
export { GetVaultItemsQueryParams };
var GetVaultItemsSecurity = /** @class */ (function (_super) {
    __extends(GetVaultItemsSecurity, _super);
    function GetVaultItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetVaultItemsSecurity.prototype, "connectToken", void 0);
    return GetVaultItemsSecurity;
}(SpeakeasyBase));
export { GetVaultItemsSecurity };
var GetVaultItemsRequest = /** @class */ (function (_super) {
    __extends(GetVaultItemsRequest, _super);
    function GetVaultItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultItemsPathParams)
    ], GetVaultItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultItemsQueryParams)
    ], GetVaultItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultItemsSecurity)
    ], GetVaultItemsRequest.prototype, "security", void 0);
    return GetVaultItemsRequest;
}(SpeakeasyBase));
export { GetVaultItemsRequest };
var GetVaultItemsResponse = /** @class */ (function (_super) {
    __extends(GetVaultItemsResponse, _super);
    function GetVaultItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVaultItemsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetVaultItemsResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata({ elemType: shared.Item }),
        __metadata("design:type", Array)
    ], GetVaultItemsResponse.prototype, "items", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVaultItemsResponse.prototype, "statusCode", void 0);
    return GetVaultItemsResponse;
}(SpeakeasyBase));
export { GetVaultItemsResponse };
