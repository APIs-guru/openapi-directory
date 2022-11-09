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
var PostCloseAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCloseAccountSecurityOption1, _super);
    function PostCloseAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCloseAccountSecurityOption1.prototype, "basicAuth", void 0);
    return PostCloseAccountSecurityOption1;
}(SpeakeasyBase));
export { PostCloseAccountSecurityOption1 };
var PostCloseAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCloseAccountSecurityOption2, _super);
    function PostCloseAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCloseAccountSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCloseAccountSecurityOption2;
}(SpeakeasyBase));
export { PostCloseAccountSecurityOption2 };
var PostCloseAccountSecurity = /** @class */ (function (_super) {
    __extends(PostCloseAccountSecurity, _super);
    function PostCloseAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCloseAccountSecurityOption1)
    ], PostCloseAccountSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCloseAccountSecurityOption2)
    ], PostCloseAccountSecurity.prototype, "option2", void 0);
    return PostCloseAccountSecurity;
}(SpeakeasyBase));
export { PostCloseAccountSecurity };
var PostCloseAccountRequest = /** @class */ (function (_super) {
    __extends(PostCloseAccountRequest, _super);
    function PostCloseAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCloseAccountRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCloseAccountSecurity)
    ], PostCloseAccountRequest.prototype, "security", void 0);
    return PostCloseAccountRequest;
}(SpeakeasyBase));
export { PostCloseAccountRequest };
var PostCloseAccountResponse = /** @class */ (function (_super) {
    __extends(PostCloseAccountResponse, _super);
    function PostCloseAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCloseAccountResponse.prototype, "closeAccountResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCloseAccountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCloseAccountResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCloseAccountResponse.prototype, "statusCode", void 0);
    return PostCloseAccountResponse;
}(SpeakeasyBase));
export { PostCloseAccountResponse };
