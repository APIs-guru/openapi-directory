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
var PostAccountHolderTransactionListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostAccountHolderTransactionListSecurityOption1, _super);
    function PostAccountHolderTransactionListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostAccountHolderTransactionListSecurityOption1.prototype, "basicAuth", void 0);
    return PostAccountHolderTransactionListSecurityOption1;
}(SpeakeasyBase));
export { PostAccountHolderTransactionListSecurityOption1 };
var PostAccountHolderTransactionListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostAccountHolderTransactionListSecurityOption2, _super);
    function PostAccountHolderTransactionListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostAccountHolderTransactionListSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostAccountHolderTransactionListSecurityOption2;
}(SpeakeasyBase));
export { PostAccountHolderTransactionListSecurityOption2 };
var PostAccountHolderTransactionListSecurity = /** @class */ (function (_super) {
    __extends(PostAccountHolderTransactionListSecurity, _super);
    function PostAccountHolderTransactionListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAccountHolderTransactionListSecurityOption1)
    ], PostAccountHolderTransactionListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAccountHolderTransactionListSecurityOption2)
    ], PostAccountHolderTransactionListSecurity.prototype, "option2", void 0);
    return PostAccountHolderTransactionListSecurity;
}(SpeakeasyBase));
export { PostAccountHolderTransactionListSecurity };
var PostAccountHolderTransactionListRequest = /** @class */ (function (_super) {
    __extends(PostAccountHolderTransactionListRequest, _super);
    function PostAccountHolderTransactionListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAccountHolderTransactionListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAccountHolderTransactionListSecurity)
    ], PostAccountHolderTransactionListRequest.prototype, "security", void 0);
    return PostAccountHolderTransactionListRequest;
}(SpeakeasyBase));
export { PostAccountHolderTransactionListRequest };
var PostAccountHolderTransactionListResponse = /** @class */ (function (_super) {
    __extends(PostAccountHolderTransactionListResponse, _super);
    function PostAccountHolderTransactionListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostAccountHolderTransactionListResponse.prototype, "accountHolderTransactionListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAccountHolderTransactionListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostAccountHolderTransactionListResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAccountHolderTransactionListResponse.prototype, "statusCode", void 0);
    return PostAccountHolderTransactionListResponse;
}(SpeakeasyBase));
export { PostAccountHolderTransactionListResponse };
