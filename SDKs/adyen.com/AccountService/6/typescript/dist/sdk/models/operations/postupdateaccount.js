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
var PostUpdateAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountSecurityOption1, _super);
    function PostUpdateAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUpdateAccountSecurityOption1.prototype, "basicAuth", void 0);
    return PostUpdateAccountSecurityOption1;
}(SpeakeasyBase));
export { PostUpdateAccountSecurityOption1 };
var PostUpdateAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountSecurityOption2, _super);
    function PostUpdateAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUpdateAccountSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUpdateAccountSecurityOption2;
}(SpeakeasyBase));
export { PostUpdateAccountSecurityOption2 };
var PostUpdateAccountSecurity = /** @class */ (function (_super) {
    __extends(PostUpdateAccountSecurity, _super);
    function PostUpdateAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountSecurityOption1)
    ], PostUpdateAccountSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountSecurityOption2)
    ], PostUpdateAccountSecurity.prototype, "option2", void 0);
    return PostUpdateAccountSecurity;
}(SpeakeasyBase));
export { PostUpdateAccountSecurity };
var PostUpdateAccountRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAccountRequest, _super);
    function PostUpdateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUpdateAccountRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccountSecurity)
    ], PostUpdateAccountRequest.prototype, "security", void 0);
    return PostUpdateAccountRequest;
}(SpeakeasyBase));
export { PostUpdateAccountRequest };
var PostUpdateAccountResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAccountResponse, _super);
    function PostUpdateAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateAccountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountResponse.prototype, "updateAccountResponse", void 0);
    return PostUpdateAccountResponse;
}(SpeakeasyBase));
export { PostUpdateAccountResponse };
