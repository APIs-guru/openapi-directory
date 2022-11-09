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
var PostAccountHolderBalanceSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostAccountHolderBalanceSecurityOption1, _super);
    function PostAccountHolderBalanceSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostAccountHolderBalanceSecurityOption1.prototype, "basicAuth", void 0);
    return PostAccountHolderBalanceSecurityOption1;
}(SpeakeasyBase));
export { PostAccountHolderBalanceSecurityOption1 };
var PostAccountHolderBalanceSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostAccountHolderBalanceSecurityOption2, _super);
    function PostAccountHolderBalanceSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostAccountHolderBalanceSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostAccountHolderBalanceSecurityOption2;
}(SpeakeasyBase));
export { PostAccountHolderBalanceSecurityOption2 };
var PostAccountHolderBalanceSecurity = /** @class */ (function (_super) {
    __extends(PostAccountHolderBalanceSecurity, _super);
    function PostAccountHolderBalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAccountHolderBalanceSecurityOption1)
    ], PostAccountHolderBalanceSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAccountHolderBalanceSecurityOption2)
    ], PostAccountHolderBalanceSecurity.prototype, "option2", void 0);
    return PostAccountHolderBalanceSecurity;
}(SpeakeasyBase));
export { PostAccountHolderBalanceSecurity };
var PostAccountHolderBalanceRequest = /** @class */ (function (_super) {
    __extends(PostAccountHolderBalanceRequest, _super);
    function PostAccountHolderBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAccountHolderBalanceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAccountHolderBalanceSecurity)
    ], PostAccountHolderBalanceRequest.prototype, "security", void 0);
    return PostAccountHolderBalanceRequest;
}(SpeakeasyBase));
export { PostAccountHolderBalanceRequest };
var PostAccountHolderBalanceResponse = /** @class */ (function (_super) {
    __extends(PostAccountHolderBalanceResponse, _super);
    function PostAccountHolderBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostAccountHolderBalanceResponse.prototype, "accountHolderBalanceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAccountHolderBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostAccountHolderBalanceResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAccountHolderBalanceResponse.prototype, "statusCode", void 0);
    return PostAccountHolderBalanceResponse;
}(SpeakeasyBase));
export { PostAccountHolderBalanceResponse };
