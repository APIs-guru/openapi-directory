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
var PostGetOnboardingUrlSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostGetOnboardingUrlSecurityOption1, _super);
    function PostGetOnboardingUrlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGetOnboardingUrlSecurityOption1.prototype, "basicAuth", void 0);
    return PostGetOnboardingUrlSecurityOption1;
}(SpeakeasyBase));
export { PostGetOnboardingUrlSecurityOption1 };
var PostGetOnboardingUrlSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostGetOnboardingUrlSecurityOption2, _super);
    function PostGetOnboardingUrlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGetOnboardingUrlSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostGetOnboardingUrlSecurityOption2;
}(SpeakeasyBase));
export { PostGetOnboardingUrlSecurityOption2 };
var PostGetOnboardingUrlSecurity = /** @class */ (function (_super) {
    __extends(PostGetOnboardingUrlSecurity, _super);
    function PostGetOnboardingUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetOnboardingUrlSecurityOption1)
    ], PostGetOnboardingUrlSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetOnboardingUrlSecurityOption2)
    ], PostGetOnboardingUrlSecurity.prototype, "option2", void 0);
    return PostGetOnboardingUrlSecurity;
}(SpeakeasyBase));
export { PostGetOnboardingUrlSecurity };
var PostGetOnboardingUrlRequest = /** @class */ (function (_super) {
    __extends(PostGetOnboardingUrlRequest, _super);
    function PostGetOnboardingUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGetOnboardingUrlRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetOnboardingUrlSecurity)
    ], PostGetOnboardingUrlRequest.prototype, "security", void 0);
    return PostGetOnboardingUrlRequest;
}(SpeakeasyBase));
export { PostGetOnboardingUrlRequest };
var PostGetOnboardingUrlResponse = /** @class */ (function (_super) {
    __extends(PostGetOnboardingUrlResponse, _super);
    function PostGetOnboardingUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetOnboardingUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetOnboardingUrlResponse.prototype, "getOnboardingUrlResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetOnboardingUrlResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetOnboardingUrlResponse.prototype, "statusCode", void 0);
    return PostGetOnboardingUrlResponse;
}(SpeakeasyBase));
export { PostGetOnboardingUrlResponse };
