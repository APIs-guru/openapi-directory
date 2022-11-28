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
export var VouchersGetDeletedEnum;
(function (VouchersGetDeletedEnum) {
    VouchersGetDeletedEnum["NotDeleted"] = "NotDeleted";
    VouchersGetDeletedEnum["Deleted"] = "Deleted";
    VouchersGetDeletedEnum["All"] = "All";
})(VouchersGetDeletedEnum || (VouchersGetDeletedEnum = {}));
export var VouchersGetTypeEnum;
(function (VouchersGetTypeEnum) {
    VouchersGetTypeEnum["Commercial"] = "Commercial";
    VouchersGetTypeEnum["Internal"] = "Internal";
    VouchersGetTypeEnum["Temporary"] = "Temporary";
    VouchersGetTypeEnum["RightToRepair"] = "RightToRepair";
})(VouchersGetTypeEnum || (VouchersGetTypeEnum = {}));
var VouchersGetQueryParams = /** @class */ (function (_super) {
    __extends(VouchersGetQueryParams, _super);
    function VouchersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DealerCode" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deleted" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Email" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExpirationAfter" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "expirationAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExpirationBefore" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "expirationBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseTo" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "licenseTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ModifiedBy" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "modifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderNumber" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Punched" }),
        __metadata("design:type", Boolean)
    ], VouchersGetQueryParams.prototype, "punched", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PunchedAfter" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "punchedAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PunchedBefore" }),
        __metadata("design:type", Date)
    ], VouchersGetQueryParams.prototype, "punchedBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Purpose" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" }),
        __metadata("design:type", String)
    ], VouchersGetQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VouchersGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VouchersGetQueryParams.prototype, "offset", void 0);
    return VouchersGetQueryParams;
}(SpeakeasyBase));
export { VouchersGetQueryParams };
var VouchersGetRequest = /** @class */ (function (_super) {
    __extends(VouchersGetRequest, _super);
    function VouchersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VouchersGetQueryParams)
    ], VouchersGetRequest.prototype, "queryParams", void 0);
    return VouchersGetRequest;
}(SpeakeasyBase));
export { VouchersGetRequest };
var VouchersGetResponse = /** @class */ (function (_super) {
    __extends(VouchersGetResponse, _super);
    function VouchersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseDealerDbModelsVoucher)
    ], VouchersGetResponse.prototype, "apiPagedResponseDealerDbModelsVoucher", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VouchersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VouchersGetResponse.prototype, "statusCode", void 0);
    return VouchersGetResponse;
}(SpeakeasyBase));
export { VouchersGetResponse };
