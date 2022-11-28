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
var GetApiV2VouchersVoucherCodePathParams = /** @class */ (function (_super) {
    __extends(GetApiV2VouchersVoucherCodePathParams, _super);
    function GetApiV2VouchersVoucherCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" }),
        __metadata("design:type", String)
    ], GetApiV2VouchersVoucherCodePathParams.prototype, "voucherCode", void 0);
    return GetApiV2VouchersVoucherCodePathParams;
}(SpeakeasyBase));
export { GetApiV2VouchersVoucherCodePathParams };
export var GetApiV2VouchersVoucherCodeDeletedEnum;
(function (GetApiV2VouchersVoucherCodeDeletedEnum) {
    GetApiV2VouchersVoucherCodeDeletedEnum["NotDeleted"] = "NotDeleted";
    GetApiV2VouchersVoucherCodeDeletedEnum["Deleted"] = "Deleted";
    GetApiV2VouchersVoucherCodeDeletedEnum["All"] = "All";
})(GetApiV2VouchersVoucherCodeDeletedEnum || (GetApiV2VouchersVoucherCodeDeletedEnum = {}));
var GetApiV2VouchersVoucherCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV2VouchersVoucherCodeQueryParams, _super);
    function GetApiV2VouchersVoucherCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deleted" }),
        __metadata("design:type", String)
    ], GetApiV2VouchersVoucherCodeQueryParams.prototype, "deleted", void 0);
    return GetApiV2VouchersVoucherCodeQueryParams;
}(SpeakeasyBase));
export { GetApiV2VouchersVoucherCodeQueryParams };
var GetApiV2VouchersVoucherCodeRequest = /** @class */ (function (_super) {
    __extends(GetApiV2VouchersVoucherCodeRequest, _super);
    function GetApiV2VouchersVoucherCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2VouchersVoucherCodePathParams)
    ], GetApiV2VouchersVoucherCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2VouchersVoucherCodeQueryParams)
    ], GetApiV2VouchersVoucherCodeRequest.prototype, "queryParams", void 0);
    return GetApiV2VouchersVoucherCodeRequest;
}(SpeakeasyBase));
export { GetApiV2VouchersVoucherCodeRequest };
var GetApiV2VouchersVoucherCodeResponse = /** @class */ (function (_super) {
    __extends(GetApiV2VouchersVoucherCodeResponse, _super);
    function GetApiV2VouchersVoucherCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV2VouchersVoucherCodeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2VouchersVoucherCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DealerDbModelsVoucher)
    ], GetApiV2VouchersVoucherCodeResponse.prototype, "dealerDbModelsVoucher", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2VouchersVoucherCodeResponse.prototype, "statusCode", void 0);
    return GetApiV2VouchersVoucherCodeResponse;
}(SpeakeasyBase));
export { GetApiV2VouchersVoucherCodeResponse };
