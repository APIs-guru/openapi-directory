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
var PostCreateAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCreateAccountSecurityOption1, _super);
    function PostCreateAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCreateAccountSecurityOption1.prototype, "basicAuth", void 0);
    return PostCreateAccountSecurityOption1;
}(SpeakeasyBase));
export { PostCreateAccountSecurityOption1 };
var PostCreateAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCreateAccountSecurityOption2, _super);
    function PostCreateAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCreateAccountSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCreateAccountSecurityOption2;
}(SpeakeasyBase));
export { PostCreateAccountSecurityOption2 };
var PostCreateAccountSecurity = /** @class */ (function (_super) {
    __extends(PostCreateAccountSecurity, _super);
    function PostCreateAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateAccountSecurityOption1)
    ], PostCreateAccountSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateAccountSecurityOption2)
    ], PostCreateAccountSecurity.prototype, "option2", void 0);
    return PostCreateAccountSecurity;
}(SpeakeasyBase));
export { PostCreateAccountSecurity };
var PostCreateAccountRequest = /** @class */ (function (_super) {
    __extends(PostCreateAccountRequest, _super);
    function PostCreateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCreateAccountRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateAccountSecurity)
    ], PostCreateAccountRequest.prototype, "security", void 0);
    return PostCreateAccountRequest;
}(SpeakeasyBase));
export { PostCreateAccountRequest };
var PostCreateAccountResponse = /** @class */ (function (_super) {
    __extends(PostCreateAccountResponse, _super);
    function PostCreateAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateAccountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateAccountResponse.prototype, "createAccountResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateAccountResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateAccountResponse.prototype, "statusCode", void 0);
    return PostCreateAccountResponse;
}(SpeakeasyBase));
export { PostCreateAccountResponse };
