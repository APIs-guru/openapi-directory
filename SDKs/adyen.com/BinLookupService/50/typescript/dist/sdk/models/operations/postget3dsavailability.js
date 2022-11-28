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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var PostGet3dsAvailabilitySecurity = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilitySecurity, _super);
    function PostGet3dsAvailabilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGet3dsAvailabilitySecurity.prototype, "basicAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGet3dsAvailabilitySecurity.prototype, "apiKeyAuth", void 0);
    return PostGet3dsAvailabilitySecurity;
}(SpeakeasyBase));
export { PostGet3dsAvailabilitySecurity };
var PostGet3dsAvailabilityRequest = /** @class */ (function (_super) {
    __extends(PostGet3dsAvailabilityRequest, _super);
    function PostGet3dsAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
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
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGet3dsAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGet3dsAvailabilityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostGet3dsAvailabilityResponse.prototype, "threeDsAvailabilityResponse", void 0);
    return PostGet3dsAvailabilityResponse;
}(SpeakeasyBase));
export { PostGet3dsAvailabilityResponse };
