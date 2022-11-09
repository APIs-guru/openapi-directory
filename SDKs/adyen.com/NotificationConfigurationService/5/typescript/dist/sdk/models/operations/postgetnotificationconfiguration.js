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
var PostGetNotificationConfigurationSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostGetNotificationConfigurationSecurityOption1, _super);
    function PostGetNotificationConfigurationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGetNotificationConfigurationSecurityOption1.prototype, "basicAuth", void 0);
    return PostGetNotificationConfigurationSecurityOption1;
}(SpeakeasyBase));
export { PostGetNotificationConfigurationSecurityOption1 };
var PostGetNotificationConfigurationSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostGetNotificationConfigurationSecurityOption2, _super);
    function PostGetNotificationConfigurationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGetNotificationConfigurationSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostGetNotificationConfigurationSecurityOption2;
}(SpeakeasyBase));
export { PostGetNotificationConfigurationSecurityOption2 };
var PostGetNotificationConfigurationSecurity = /** @class */ (function (_super) {
    __extends(PostGetNotificationConfigurationSecurity, _super);
    function PostGetNotificationConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetNotificationConfigurationSecurityOption1)
    ], PostGetNotificationConfigurationSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetNotificationConfigurationSecurityOption2)
    ], PostGetNotificationConfigurationSecurity.prototype, "option2", void 0);
    return PostGetNotificationConfigurationSecurity;
}(SpeakeasyBase));
export { PostGetNotificationConfigurationSecurity };
var PostGetNotificationConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostGetNotificationConfigurationRequest, _super);
    function PostGetNotificationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGetNotificationConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetNotificationConfigurationSecurity)
    ], PostGetNotificationConfigurationRequest.prototype, "security", void 0);
    return PostGetNotificationConfigurationRequest;
}(SpeakeasyBase));
export { PostGetNotificationConfigurationRequest };
var PostGetNotificationConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostGetNotificationConfigurationResponse, _super);
    function PostGetNotificationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetNotificationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetNotificationConfigurationResponse.prototype, "getNotificationConfigurationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetNotificationConfigurationResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetNotificationConfigurationResponse.prototype, "statusCode", void 0);
    return PostGetNotificationConfigurationResponse;
}(SpeakeasyBase));
export { PostGetNotificationConfigurationResponse };
