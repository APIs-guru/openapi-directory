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
var VoucherHistoryGetVoucherHistoryQueryParams = /** @class */ (function (_super) {
    __extends(VoucherHistoryGetVoucherHistoryQueryParams, _super);
    function VoucherHistoryGetVoucherHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChangedAfter" }),
        __metadata("design:type", Date)
    ], VoucherHistoryGetVoucherHistoryQueryParams.prototype, "changedAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChangedBefore" }),
        __metadata("design:type", Date)
    ], VoucherHistoryGetVoucherHistoryQueryParams.prototype, "changedBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" }),
        __metadata("design:type", String)
    ], VoucherHistoryGetVoucherHistoryQueryParams.prototype, "voucherCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VoucherHistoryGetVoucherHistoryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VoucherHistoryGetVoucherHistoryQueryParams.prototype, "offset", void 0);
    return VoucherHistoryGetVoucherHistoryQueryParams;
}(SpeakeasyBase));
export { VoucherHistoryGetVoucherHistoryQueryParams };
var VoucherHistoryGetVoucherHistoryRequest = /** @class */ (function (_super) {
    __extends(VoucherHistoryGetVoucherHistoryRequest, _super);
    function VoucherHistoryGetVoucherHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VoucherHistoryGetVoucherHistoryQueryParams)
    ], VoucherHistoryGetVoucherHistoryRequest.prototype, "queryParams", void 0);
    return VoucherHistoryGetVoucherHistoryRequest;
}(SpeakeasyBase));
export { VoucherHistoryGetVoucherHistoryRequest };
var VoucherHistoryGetVoucherHistoryResponse = /** @class */ (function (_super) {
    __extends(VoucherHistoryGetVoucherHistoryResponse, _super);
    function VoucherHistoryGetVoucherHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseDealerDbModelsVoucherHistory)
    ], VoucherHistoryGetVoucherHistoryResponse.prototype, "apiPagedResponseDealerDbModelsVoucherHistory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VoucherHistoryGetVoucherHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VoucherHistoryGetVoucherHistoryResponse.prototype, "statusCode", void 0);
    return VoucherHistoryGetVoucherHistoryResponse;
}(SpeakeasyBase));
export { VoucherHistoryGetVoucherHistoryResponse };
