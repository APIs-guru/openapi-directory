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
var PostDeleteBankAccountsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDeleteBankAccountsSecurityOption1, _super);
    function PostDeleteBankAccountsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDeleteBankAccountsSecurityOption1.prototype, "basicAuth", void 0);
    return PostDeleteBankAccountsSecurityOption1;
}(SpeakeasyBase));
export { PostDeleteBankAccountsSecurityOption1 };
var PostDeleteBankAccountsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDeleteBankAccountsSecurityOption2, _super);
    function PostDeleteBankAccountsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDeleteBankAccountsSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDeleteBankAccountsSecurityOption2;
}(SpeakeasyBase));
export { PostDeleteBankAccountsSecurityOption2 };
var PostDeleteBankAccountsSecurity = /** @class */ (function (_super) {
    __extends(PostDeleteBankAccountsSecurity, _super);
    function PostDeleteBankAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteBankAccountsSecurityOption1)
    ], PostDeleteBankAccountsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteBankAccountsSecurityOption2)
    ], PostDeleteBankAccountsSecurity.prototype, "option2", void 0);
    return PostDeleteBankAccountsSecurity;
}(SpeakeasyBase));
export { PostDeleteBankAccountsSecurity };
var PostDeleteBankAccountsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteBankAccountsRequest, _super);
    function PostDeleteBankAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDeleteBankAccountsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteBankAccountsSecurity)
    ], PostDeleteBankAccountsRequest.prototype, "security", void 0);
    return PostDeleteBankAccountsRequest;
}(SpeakeasyBase));
export { PostDeleteBankAccountsRequest };
var PostDeleteBankAccountsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteBankAccountsResponse, _super);
    function PostDeleteBankAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteBankAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteBankAccountsResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteBankAccountsResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteBankAccountsResponse.prototype, "statusCode", void 0);
    return PostDeleteBankAccountsResponse;
}(SpeakeasyBase));
export { PostDeleteBankAccountsResponse };
