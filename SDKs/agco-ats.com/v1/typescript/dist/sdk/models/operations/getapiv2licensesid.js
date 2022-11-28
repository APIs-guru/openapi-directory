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
var GetApiV2LicensesIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV2LicensesIdPathParams, _super);
    function GetApiV2LicensesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], GetApiV2LicensesIdPathParams.prototype, "id", void 0);
    return GetApiV2LicensesIdPathParams;
}(SpeakeasyBase));
export { GetApiV2LicensesIdPathParams };
var GetApiV2LicensesIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV2LicensesIdRequest, _super);
    function GetApiV2LicensesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2LicensesIdPathParams)
    ], GetApiV2LicensesIdRequest.prototype, "pathParams", void 0);
    return GetApiV2LicensesIdRequest;
}(SpeakeasyBase));
export { GetApiV2LicensesIdRequest };
var GetApiV2LicensesIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV2LicensesIdResponse, _super);
    function GetApiV2LicensesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GetApiV2LicensesIdResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV2LicensesIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2LicensesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DealerDbModelsLicense)
    ], GetApiV2LicensesIdResponse.prototype, "dealerDbModelsLicense", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2LicensesIdResponse.prototype, "statusCode", void 0);
    return GetApiV2LicensesIdResponse;
}(SpeakeasyBase));
export { GetApiV2LicensesIdResponse };
