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
var PostCheckAccountHolderSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCheckAccountHolderSecurityOption1, _super);
    function PostCheckAccountHolderSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCheckAccountHolderSecurityOption1.prototype, "basicAuth", void 0);
    return PostCheckAccountHolderSecurityOption1;
}(SpeakeasyBase));
export { PostCheckAccountHolderSecurityOption1 };
var PostCheckAccountHolderSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCheckAccountHolderSecurityOption2, _super);
    function PostCheckAccountHolderSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCheckAccountHolderSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCheckAccountHolderSecurityOption2;
}(SpeakeasyBase));
export { PostCheckAccountHolderSecurityOption2 };
var PostCheckAccountHolderSecurity = /** @class */ (function (_super) {
    __extends(PostCheckAccountHolderSecurity, _super);
    function PostCheckAccountHolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCheckAccountHolderSecurityOption1)
    ], PostCheckAccountHolderSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCheckAccountHolderSecurityOption2)
    ], PostCheckAccountHolderSecurity.prototype, "option2", void 0);
    return PostCheckAccountHolderSecurity;
}(SpeakeasyBase));
export { PostCheckAccountHolderSecurity };
var PostCheckAccountHolderRequest = /** @class */ (function (_super) {
    __extends(PostCheckAccountHolderRequest, _super);
    function PostCheckAccountHolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCheckAccountHolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCheckAccountHolderSecurity)
    ], PostCheckAccountHolderRequest.prototype, "security", void 0);
    return PostCheckAccountHolderRequest;
}(SpeakeasyBase));
export { PostCheckAccountHolderRequest };
var PostCheckAccountHolderResponse = /** @class */ (function (_super) {
    __extends(PostCheckAccountHolderResponse, _super);
    function PostCheckAccountHolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCheckAccountHolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCheckAccountHolderResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCheckAccountHolderResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCheckAccountHolderResponse.prototype, "statusCode", void 0);
    return PostCheckAccountHolderResponse;
}(SpeakeasyBase));
export { PostCheckAccountHolderResponse };
