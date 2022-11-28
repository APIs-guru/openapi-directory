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
var AftermarketServicesUpdateUserStatusRequests = /** @class */ (function (_super) {
    __extends(AftermarketServicesUpdateUserStatusRequests, _super);
    function AftermarketServicesUpdateUserStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsUserStatus)
    ], AftermarketServicesUpdateUserStatusRequests.prototype, "agcoPowerServicesModelsUserStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsUserStatus)
    ], AftermarketServicesUpdateUserStatusRequests.prototype, "agcoPowerServicesModelsUserStatus1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsUserStatus)
    ], AftermarketServicesUpdateUserStatusRequests.prototype, "agcoPowerServicesModelsUserStatus2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesUpdateUserStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesUpdateUserStatusRequests.prototype, "textXml", void 0);
    return AftermarketServicesUpdateUserStatusRequests;
}(SpeakeasyBase));
export { AftermarketServicesUpdateUserStatusRequests };
var AftermarketServicesUpdateUserStatusRequest = /** @class */ (function (_super) {
    __extends(AftermarketServicesUpdateUserStatusRequest, _super);
    function AftermarketServicesUpdateUserStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesUpdateUserStatusRequests)
    ], AftermarketServicesUpdateUserStatusRequest.prototype, "request", void 0);
    return AftermarketServicesUpdateUserStatusRequest;
}(SpeakeasyBase));
export { AftermarketServicesUpdateUserStatusRequest };
var AftermarketServicesUpdateUserStatusResponse = /** @class */ (function (_super) {
    __extends(AftermarketServicesUpdateUserStatusResponse, _super);
    function AftermarketServicesUpdateUserStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "aftermarketServicesUpdateUserStatus200ApplicationJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "aftermarketServicesUpdateUserStatus200TextJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AftermarketServicesUpdateUserStatusResponse.prototype, "statusCode", void 0);
    return AftermarketServicesUpdateUserStatusResponse;
}(SpeakeasyBase));
export { AftermarketServicesUpdateUserStatusResponse };
