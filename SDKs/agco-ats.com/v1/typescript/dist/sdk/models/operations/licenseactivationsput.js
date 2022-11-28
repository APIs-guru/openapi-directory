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
var LicenseActivationsPutPathParams = /** @class */ (function (_super) {
    __extends(LicenseActivationsPutPathParams, _super);
    function LicenseActivationsPutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], LicenseActivationsPutPathParams.prototype, "id", void 0);
    return LicenseActivationsPutPathParams;
}(SpeakeasyBase));
export { LicenseActivationsPutPathParams };
var LicenseActivationsPutRequests = /** @class */ (function (_super) {
    __extends(LicenseActivationsPutRequests, _super);
    function LicenseActivationsPutRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], LicenseActivationsPutRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DealerDbModelsLicenseActivationUpdate)
    ], LicenseActivationsPutRequests.prototype, "dealerDbModelsLicenseActivationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.DealerDbModelsLicenseActivationUpdate)
    ], LicenseActivationsPutRequests.prototype, "dealerDbModelsLicenseActivationUpdate1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.DealerDbModelsLicenseActivationUpdate)
    ], LicenseActivationsPutRequests.prototype, "dealerDbModelsLicenseActivationUpdate2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], LicenseActivationsPutRequests.prototype, "textXml", void 0);
    return LicenseActivationsPutRequests;
}(SpeakeasyBase));
export { LicenseActivationsPutRequests };
var LicenseActivationsPutRequest = /** @class */ (function (_super) {
    __extends(LicenseActivationsPutRequest, _super);
    function LicenseActivationsPutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicenseActivationsPutPathParams)
    ], LicenseActivationsPutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicenseActivationsPutRequests)
    ], LicenseActivationsPutRequest.prototype, "request", void 0);
    return LicenseActivationsPutRequest;
}(SpeakeasyBase));
export { LicenseActivationsPutRequest };
var LicenseActivationsPutResponse = /** @class */ (function (_super) {
    __extends(LicenseActivationsPutResponse, _super);
    function LicenseActivationsPutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], LicenseActivationsPutResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LicenseActivationsPutResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicenseActivationsPutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DealerDbModelsLicenseActivation)
    ], LicenseActivationsPutResponse.prototype, "dealerDbModelsLicenseActivation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicenseActivationsPutResponse.prototype, "statusCode", void 0);
    return LicenseActivationsPutResponse;
}(SpeakeasyBase));
export { LicenseActivationsPutResponse };
