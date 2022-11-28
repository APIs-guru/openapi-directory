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
export var LicensesGetStatusEnum;
(function (LicensesGetStatusEnum) {
    LicensesGetStatusEnum["Active"] = "Active";
    LicensesGetStatusEnum["Inactive"] = "Inactive";
    LicensesGetStatusEnum["All"] = "All";
})(LicensesGetStatusEnum || (LicensesGetStatusEnum = {}));
var LicensesGetQueryParams = /** @class */ (function (_super) {
    __extends(LicensesGetQueryParams, _super);
    function LicensesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DealerCode" }),
        __metadata("design:type", String)
    ], LicensesGetQueryParams.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], LicensesGetQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" }),
        __metadata("design:type", String)
    ], LicensesGetQueryParams.prototype, "voucherCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], LicensesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], LicensesGetQueryParams.prototype, "offset", void 0);
    return LicensesGetQueryParams;
}(SpeakeasyBase));
export { LicensesGetQueryParams };
var LicensesGetRequest = /** @class */ (function (_super) {
    __extends(LicensesGetRequest, _super);
    function LicensesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensesGetQueryParams)
    ], LicensesGetRequest.prototype, "queryParams", void 0);
    return LicensesGetRequest;
}(SpeakeasyBase));
export { LicensesGetRequest };
var LicensesGetResponse = /** @class */ (function (_super) {
    __extends(LicensesGetResponse, _super);
    function LicensesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], LicensesGetResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseDealerDbModelsLicense)
    ], LicensesGetResponse.prototype, "apiPagedResponseDealerDbModelsLicense", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensesGetResponse.prototype, "statusCode", void 0);
    return LicensesGetResponse;
}(SpeakeasyBase));
export { LicensesGetResponse };
