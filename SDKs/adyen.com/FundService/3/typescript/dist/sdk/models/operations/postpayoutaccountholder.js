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
var PostPayoutAccountHolderSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostPayoutAccountHolderSecurityOption1, _super);
    function PostPayoutAccountHolderSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostPayoutAccountHolderSecurityOption1.prototype, "basicAuth", void 0);
    return PostPayoutAccountHolderSecurityOption1;
}(SpeakeasyBase));
export { PostPayoutAccountHolderSecurityOption1 };
var PostPayoutAccountHolderSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostPayoutAccountHolderSecurityOption2, _super);
    function PostPayoutAccountHolderSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostPayoutAccountHolderSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostPayoutAccountHolderSecurityOption2;
}(SpeakeasyBase));
export { PostPayoutAccountHolderSecurityOption2 };
var PostPayoutAccountHolderSecurity = /** @class */ (function (_super) {
    __extends(PostPayoutAccountHolderSecurity, _super);
    function PostPayoutAccountHolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostPayoutAccountHolderSecurityOption1)
    ], PostPayoutAccountHolderSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostPayoutAccountHolderSecurityOption2)
    ], PostPayoutAccountHolderSecurity.prototype, "option2", void 0);
    return PostPayoutAccountHolderSecurity;
}(SpeakeasyBase));
export { PostPayoutAccountHolderSecurity };
var PostPayoutAccountHolderRequest = /** @class */ (function (_super) {
    __extends(PostPayoutAccountHolderRequest, _super);
    function PostPayoutAccountHolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostPayoutAccountHolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPayoutAccountHolderSecurity)
    ], PostPayoutAccountHolderRequest.prototype, "security", void 0);
    return PostPayoutAccountHolderRequest;
}(SpeakeasyBase));
export { PostPayoutAccountHolderRequest };
var PostPayoutAccountHolderResponse = /** @class */ (function (_super) {
    __extends(PostPayoutAccountHolderResponse, _super);
    function PostPayoutAccountHolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPayoutAccountHolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostPayoutAccountHolderResponse.prototype, "payoutAccountHolderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostPayoutAccountHolderResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPayoutAccountHolderResponse.prototype, "statusCode", void 0);
    return PostPayoutAccountHolderResponse;
}(SpeakeasyBase));
export { PostPayoutAccountHolderResponse };
