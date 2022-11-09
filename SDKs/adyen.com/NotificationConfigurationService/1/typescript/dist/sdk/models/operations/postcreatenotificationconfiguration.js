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
var PostCreateNotificationConfigurationSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCreateNotificationConfigurationSecurityOption1, _super);
    function PostCreateNotificationConfigurationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCreateNotificationConfigurationSecurityOption1.prototype, "basicAuth", void 0);
    return PostCreateNotificationConfigurationSecurityOption1;
}(SpeakeasyBase));
export { PostCreateNotificationConfigurationSecurityOption1 };
var PostCreateNotificationConfigurationSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCreateNotificationConfigurationSecurityOption2, _super);
    function PostCreateNotificationConfigurationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCreateNotificationConfigurationSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCreateNotificationConfigurationSecurityOption2;
}(SpeakeasyBase));
export { PostCreateNotificationConfigurationSecurityOption2 };
var PostCreateNotificationConfigurationSecurity = /** @class */ (function (_super) {
    __extends(PostCreateNotificationConfigurationSecurity, _super);
    function PostCreateNotificationConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateNotificationConfigurationSecurityOption1)
    ], PostCreateNotificationConfigurationSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateNotificationConfigurationSecurityOption2)
    ], PostCreateNotificationConfigurationSecurity.prototype, "option2", void 0);
    return PostCreateNotificationConfigurationSecurity;
}(SpeakeasyBase));
export { PostCreateNotificationConfigurationSecurity };
var PostCreateNotificationConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostCreateNotificationConfigurationRequest, _super);
    function PostCreateNotificationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCreateNotificationConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateNotificationConfigurationSecurity)
    ], PostCreateNotificationConfigurationRequest.prototype, "security", void 0);
    return PostCreateNotificationConfigurationRequest;
}(SpeakeasyBase));
export { PostCreateNotificationConfigurationRequest };
var PostCreateNotificationConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostCreateNotificationConfigurationResponse, _super);
    function PostCreateNotificationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateNotificationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateNotificationConfigurationResponse.prototype, "getNotificationConfigurationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateNotificationConfigurationResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateNotificationConfigurationResponse.prototype, "statusCode", void 0);
    return PostCreateNotificationConfigurationResponse;
}(SpeakeasyBase));
export { PostCreateNotificationConfigurationResponse };
