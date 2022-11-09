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
var CreateVaultItemPathParams = /** @class */ (function (_super) {
    __extends(CreateVaultItemPathParams, _super);
    function CreateVaultItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], CreateVaultItemPathParams.prototype, "vaultUuid", void 0);
    return CreateVaultItemPathParams;
}(SpeakeasyBase));
export { CreateVaultItemPathParams };
var CreateVaultItemSecurity = /** @class */ (function (_super) {
    __extends(CreateVaultItemSecurity, _super);
    function CreateVaultItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], CreateVaultItemSecurity.prototype, "connectToken", void 0);
    return CreateVaultItemSecurity;
}(SpeakeasyBase));
export { CreateVaultItemSecurity };
var CreateVaultItemRequest = /** @class */ (function (_super) {
    __extends(CreateVaultItemRequest, _super);
    function CreateVaultItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVaultItemPathParams)
    ], CreateVaultItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FullItem)
    ], CreateVaultItemRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVaultItemSecurity)
    ], CreateVaultItemRequest.prototype, "security", void 0);
    return CreateVaultItemRequest;
}(SpeakeasyBase));
export { CreateVaultItemRequest };
var CreateVaultItemResponse = /** @class */ (function (_super) {
    __extends(CreateVaultItemResponse, _super);
    function CreateVaultItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVaultItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateVaultItemResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FullItem)
    ], CreateVaultItemResponse.prototype, "fullItem", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateVaultItemResponse.prototype, "statusCode", void 0);
    return CreateVaultItemResponse;
}(SpeakeasyBase));
export { CreateVaultItemResponse };
