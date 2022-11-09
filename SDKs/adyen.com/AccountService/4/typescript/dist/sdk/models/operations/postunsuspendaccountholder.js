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
var PostUnSuspendAccountHolderSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUnSuspendAccountHolderSecurityOption1, _super);
    function PostUnSuspendAccountHolderSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUnSuspendAccountHolderSecurityOption1.prototype, "basicAuth", void 0);
    return PostUnSuspendAccountHolderSecurityOption1;
}(SpeakeasyBase));
export { PostUnSuspendAccountHolderSecurityOption1 };
var PostUnSuspendAccountHolderSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUnSuspendAccountHolderSecurityOption2, _super);
    function PostUnSuspendAccountHolderSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUnSuspendAccountHolderSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUnSuspendAccountHolderSecurityOption2;
}(SpeakeasyBase));
export { PostUnSuspendAccountHolderSecurityOption2 };
var PostUnSuspendAccountHolderSecurity = /** @class */ (function (_super) {
    __extends(PostUnSuspendAccountHolderSecurity, _super);
    function PostUnSuspendAccountHolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUnSuspendAccountHolderSecurityOption1)
    ], PostUnSuspendAccountHolderSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUnSuspendAccountHolderSecurityOption2)
    ], PostUnSuspendAccountHolderSecurity.prototype, "option2", void 0);
    return PostUnSuspendAccountHolderSecurity;
}(SpeakeasyBase));
export { PostUnSuspendAccountHolderSecurity };
var PostUnSuspendAccountHolderRequest = /** @class */ (function (_super) {
    __extends(PostUnSuspendAccountHolderRequest, _super);
    function PostUnSuspendAccountHolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUnSuspendAccountHolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUnSuspendAccountHolderSecurity)
    ], PostUnSuspendAccountHolderRequest.prototype, "security", void 0);
    return PostUnSuspendAccountHolderRequest;
}(SpeakeasyBase));
export { PostUnSuspendAccountHolderRequest };
var PostUnSuspendAccountHolderResponse = /** @class */ (function (_super) {
    __extends(PostUnSuspendAccountHolderResponse, _super);
    function PostUnSuspendAccountHolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUnSuspendAccountHolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUnSuspendAccountHolderResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUnSuspendAccountHolderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUnSuspendAccountHolderResponse.prototype, "unSuspendAccountHolderResponse", void 0);
    return PostUnSuspendAccountHolderResponse;
}(SpeakeasyBase));
export { PostUnSuspendAccountHolderResponse };
