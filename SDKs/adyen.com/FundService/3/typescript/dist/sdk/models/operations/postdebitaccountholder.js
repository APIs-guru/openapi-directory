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
var PostDebitAccountHolderSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDebitAccountHolderSecurityOption1, _super);
    function PostDebitAccountHolderSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDebitAccountHolderSecurityOption1.prototype, "basicAuth", void 0);
    return PostDebitAccountHolderSecurityOption1;
}(SpeakeasyBase));
export { PostDebitAccountHolderSecurityOption1 };
var PostDebitAccountHolderSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDebitAccountHolderSecurityOption2, _super);
    function PostDebitAccountHolderSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDebitAccountHolderSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDebitAccountHolderSecurityOption2;
}(SpeakeasyBase));
export { PostDebitAccountHolderSecurityOption2 };
var PostDebitAccountHolderSecurity = /** @class */ (function (_super) {
    __extends(PostDebitAccountHolderSecurity, _super);
    function PostDebitAccountHolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDebitAccountHolderSecurityOption1)
    ], PostDebitAccountHolderSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDebitAccountHolderSecurityOption2)
    ], PostDebitAccountHolderSecurity.prototype, "option2", void 0);
    return PostDebitAccountHolderSecurity;
}(SpeakeasyBase));
export { PostDebitAccountHolderSecurity };
var PostDebitAccountHolderRequest = /** @class */ (function (_super) {
    __extends(PostDebitAccountHolderRequest, _super);
    function PostDebitAccountHolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDebitAccountHolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDebitAccountHolderSecurity)
    ], PostDebitAccountHolderRequest.prototype, "security", void 0);
    return PostDebitAccountHolderRequest;
}(SpeakeasyBase));
export { PostDebitAccountHolderRequest };
var PostDebitAccountHolderResponse = /** @class */ (function (_super) {
    __extends(PostDebitAccountHolderResponse, _super);
    function PostDebitAccountHolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDebitAccountHolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDebitAccountHolderResponse.prototype, "debitAccountHolderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDebitAccountHolderResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDebitAccountHolderResponse.prototype, "statusCode", void 0);
    return PostDebitAccountHolderResponse;
}(SpeakeasyBase));
export { PostDebitAccountHolderResponse };
