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
var AuthenticationResetPaswordRequests = /** @class */ (function (_super) {
    __extends(AuthenticationResetPaswordRequests, _super);
    function AuthenticationResetPaswordRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiModelsPasswordReset)
    ], AuthenticationResetPaswordRequests.prototype, "apiModelsPasswordReset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiModelsPasswordReset)
    ], AuthenticationResetPaswordRequests.prototype, "apiModelsPasswordReset1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiModelsPasswordReset)
    ], AuthenticationResetPaswordRequests.prototype, "apiModelsPasswordReset2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], AuthenticationResetPaswordRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], AuthenticationResetPaswordRequests.prototype, "textXml", void 0);
    return AuthenticationResetPaswordRequests;
}(SpeakeasyBase));
export { AuthenticationResetPaswordRequests };
var AuthenticationResetPaswordRequest = /** @class */ (function (_super) {
    __extends(AuthenticationResetPaswordRequest, _super);
    function AuthenticationResetPaswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticationResetPaswordRequests)
    ], AuthenticationResetPaswordRequest.prototype, "request", void 0);
    return AuthenticationResetPaswordRequest;
}(SpeakeasyBase));
export { AuthenticationResetPaswordRequest };
var AuthenticationResetPaswordResponse = /** @class */ (function (_super) {
    __extends(AuthenticationResetPaswordResponse, _super);
    function AuthenticationResetPaswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticationResetPaswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthenticationResetPaswordResponse.prototype, "statusCode", void 0);
    return AuthenticationResetPaswordResponse;
}(SpeakeasyBase));
export { AuthenticationResetPaswordResponse };
