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
var VouchersGetVoucherHistoryPathParams = /** @class */ (function (_super) {
    __extends(VouchersGetVoucherHistoryPathParams, _super);
    function VouchersGetVoucherHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" }),
        __metadata("design:type", String)
    ], VouchersGetVoucherHistoryPathParams.prototype, "voucherCode", void 0);
    return VouchersGetVoucherHistoryPathParams;
}(SpeakeasyBase));
export { VouchersGetVoucherHistoryPathParams };
var VouchersGetVoucherHistoryQueryParams = /** @class */ (function (_super) {
    __extends(VouchersGetVoucherHistoryQueryParams, _super);
    function VouchersGetVoucherHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VouchersGetVoucherHistoryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VouchersGetVoucherHistoryQueryParams.prototype, "offset", void 0);
    return VouchersGetVoucherHistoryQueryParams;
}(SpeakeasyBase));
export { VouchersGetVoucherHistoryQueryParams };
var VouchersGetVoucherHistoryRequest = /** @class */ (function (_super) {
    __extends(VouchersGetVoucherHistoryRequest, _super);
    function VouchersGetVoucherHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VouchersGetVoucherHistoryPathParams)
    ], VouchersGetVoucherHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VouchersGetVoucherHistoryQueryParams)
    ], VouchersGetVoucherHistoryRequest.prototype, "queryParams", void 0);
    return VouchersGetVoucherHistoryRequest;
}(SpeakeasyBase));
export { VouchersGetVoucherHistoryRequest };
var VouchersGetVoucherHistoryResponse = /** @class */ (function (_super) {
    __extends(VouchersGetVoucherHistoryResponse, _super);
    function VouchersGetVoucherHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseDealerDbModelsVoucherHistory)
    ], VouchersGetVoucherHistoryResponse.prototype, "apiPagedResponseDealerDbModelsVoucherHistory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VouchersGetVoucherHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VouchersGetVoucherHistoryResponse.prototype, "statusCode", void 0);
    return VouchersGetVoucherHistoryResponse;
}(SpeakeasyBase));
export { VouchersGetVoucherHistoryResponse };
