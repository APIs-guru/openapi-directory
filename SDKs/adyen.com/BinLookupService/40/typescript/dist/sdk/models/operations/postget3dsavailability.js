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
var PostGet3dsAvailabilitySecurityOption1 = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilitySecurityOption1, _super);
    function PostGet3dsAvailabilitySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGet3dsAvailabilitySecurityOption1.prototype, "basicAuth", void 0);
    return PostGet3dsAvailabilitySecurityOption1;
}(SpeakeasyBase));
export { PostGet3dsAvailabilitySecurityOption1 };
var PostGet3dsAvailabilitySecurityOption2 = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilitySecurityOption2, _super);
    function PostGet3dsAvailabilitySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGet3dsAvailabilitySecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostGet3dsAvailabilitySecurityOption2;
}(SpeakeasyBase));
export { PostGet3dsAvailabilitySecurityOption2 };
var PostGet3dsAvailabilitySecurity = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilitySecurity, _super);
    function PostGet3dsAvailabilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGet3dsAvailabilitySecurityOption1)
    ], PostGet3dsAvailabilitySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGet3dsAvailabilitySecurityOption2)
    ], PostGet3dsAvailabilitySecurity.prototype, "option2", void 0);
    return PostGet3dsAvailabilitySecurity;
}(SpeakeasyBase));
export { PostGet3dsAvailabilitySecurity };
var PostGet3dsAvailabilityRequest = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilityRequest, _super);
    function PostGet3dsAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGet3dsAvailabilitySecurity)
    ], PostGet3dsAvailabilityRequest.prototype, "security", void 0);
    return PostGet3dsAvailabilityRequest;
}(SpeakeasyBase));
export { PostGet3dsAvailabilityRequest };
var PostGet3dsAvailabilityResponse = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilityResponse, _super);
    function PostGet3dsAvailabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGet3dsAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGet3dsAvailabilityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityResponse.prototype, "threeDsAvailabilityResponse", void 0);
    return PostGet3dsAvailabilityResponse;
}(SpeakeasyBase));
export { PostGet3dsAvailabilityResponse };
