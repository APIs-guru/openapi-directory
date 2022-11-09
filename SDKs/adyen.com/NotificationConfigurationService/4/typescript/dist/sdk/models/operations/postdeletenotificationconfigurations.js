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
var PostDeleteNotificationConfigurationsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDeleteNotificationConfigurationsSecurityOption1, _super);
    function PostDeleteNotificationConfigurationsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDeleteNotificationConfigurationsSecurityOption1.prototype, "basicAuth", void 0);
    return PostDeleteNotificationConfigurationsSecurityOption1;
}(SpeakeasyBase));
export { PostDeleteNotificationConfigurationsSecurityOption1 };
var PostDeleteNotificationConfigurationsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDeleteNotificationConfigurationsSecurityOption2, _super);
    function PostDeleteNotificationConfigurationsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDeleteNotificationConfigurationsSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDeleteNotificationConfigurationsSecurityOption2;
}(SpeakeasyBase));
export { PostDeleteNotificationConfigurationsSecurityOption2 };
var PostDeleteNotificationConfigurationsSecurity = /** @class */ (function (_super) {
    __extends(PostDeleteNotificationConfigurationsSecurity, _super);
    function PostDeleteNotificationConfigurationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteNotificationConfigurationsSecurityOption1)
    ], PostDeleteNotificationConfigurationsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteNotificationConfigurationsSecurityOption2)
    ], PostDeleteNotificationConfigurationsSecurity.prototype, "option2", void 0);
    return PostDeleteNotificationConfigurationsSecurity;
}(SpeakeasyBase));
export { PostDeleteNotificationConfigurationsSecurity };
var PostDeleteNotificationConfigurationsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteNotificationConfigurationsRequest, _super);
    function PostDeleteNotificationConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDeleteNotificationConfigurationsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteNotificationConfigurationsSecurity)
    ], PostDeleteNotificationConfigurationsRequest.prototype, "security", void 0);
    return PostDeleteNotificationConfigurationsRequest;
}(SpeakeasyBase));
export { PostDeleteNotificationConfigurationsRequest };
var PostDeleteNotificationConfigurationsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteNotificationConfigurationsResponse, _super);
    function PostDeleteNotificationConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteNotificationConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteNotificationConfigurationsResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteNotificationConfigurationsResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteNotificationConfigurationsResponse.prototype, "statusCode", void 0);
    return PostDeleteNotificationConfigurationsResponse;
}(SpeakeasyBase));
export { PostDeleteNotificationConfigurationsResponse };
