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
var PostUpdateNotificationConfigurationSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUpdateNotificationConfigurationSecurityOption1, _super);
    function PostUpdateNotificationConfigurationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUpdateNotificationConfigurationSecurityOption1.prototype, "basicAuth", void 0);
    return PostUpdateNotificationConfigurationSecurityOption1;
}(SpeakeasyBase));
export { PostUpdateNotificationConfigurationSecurityOption1 };
var PostUpdateNotificationConfigurationSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUpdateNotificationConfigurationSecurityOption2, _super);
    function PostUpdateNotificationConfigurationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUpdateNotificationConfigurationSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUpdateNotificationConfigurationSecurityOption2;
}(SpeakeasyBase));
export { PostUpdateNotificationConfigurationSecurityOption2 };
var PostUpdateNotificationConfigurationSecurity = /** @class */ (function (_super) {
    __extends(PostUpdateNotificationConfigurationSecurity, _super);
    function PostUpdateNotificationConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateNotificationConfigurationSecurityOption1)
    ], PostUpdateNotificationConfigurationSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateNotificationConfigurationSecurityOption2)
    ], PostUpdateNotificationConfigurationSecurity.prototype, "option2", void 0);
    return PostUpdateNotificationConfigurationSecurity;
}(SpeakeasyBase));
export { PostUpdateNotificationConfigurationSecurity };
var PostUpdateNotificationConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostUpdateNotificationConfigurationRequest, _super);
    function PostUpdateNotificationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUpdateNotificationConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateNotificationConfigurationSecurity)
    ], PostUpdateNotificationConfigurationRequest.prototype, "security", void 0);
    return PostUpdateNotificationConfigurationRequest;
}(SpeakeasyBase));
export { PostUpdateNotificationConfigurationRequest };
var PostUpdateNotificationConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostUpdateNotificationConfigurationResponse, _super);
    function PostUpdateNotificationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateNotificationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateNotificationConfigurationResponse.prototype, "getNotificationConfigurationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateNotificationConfigurationResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateNotificationConfigurationResponse.prototype, "statusCode", void 0);
    return PostUpdateNotificationConfigurationResponse;
}(SpeakeasyBase));
export { PostUpdateNotificationConfigurationResponse };
