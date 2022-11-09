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
var PostUpdateAccountHolderSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderSecurityOption1, _super);
    function PostUpdateAccountHolderSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUpdateAccountHolderSecurityOption1.prototype, "basicAuth", void 0);
    return PostUpdateAccountHolderSecurityOption1;
}(SpeakeasyBase));
export { PostUpdateAccountHolderSecurityOption1 };
var PostUpdateAccountHolderSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderSecurityOption2, _super);
    function PostUpdateAccountHolderSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUpdateAccountHolderSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUpdateAccountHolderSecurityOption2;
}(SpeakeasyBase));
export { PostUpdateAccountHolderSecurityOption2 };
var PostUpdateAccountHolderSecurity = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderSecurity, _super);
    function PostUpdateAccountHolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountHolderSecurityOption1)
    ], PostUpdateAccountHolderSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountHolderSecurityOption2)
    ], PostUpdateAccountHolderSecurity.prototype, "option2", void 0);
    return PostUpdateAccountHolderSecurity;
}(SpeakeasyBase));
export { PostUpdateAccountHolderSecurity };
var PostUpdateAccountHolderRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderRequest, _super);
    function PostUpdateAccountHolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccountHolderSecurity)
    ], PostUpdateAccountHolderRequest.prototype, "security", void 0);
    return PostUpdateAccountHolderRequest;
}(SpeakeasyBase));
export { PostUpdateAccountHolderRequest };
var PostUpdateAccountHolderResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderResponse, _super);
    function PostUpdateAccountHolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateAccountHolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateAccountHolderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderResponse.prototype, "updateAccountHolderResponse", void 0);
    return PostUpdateAccountHolderResponse;
}(SpeakeasyBase));
export { PostUpdateAccountHolderResponse };
