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
export var DealerDbModelsVoucherTypeEnum;
(function (DealerDbModelsVoucherTypeEnum) {
    DealerDbModelsVoucherTypeEnum["Commercial"] = "Commercial";
    DealerDbModelsVoucherTypeEnum["Internal"] = "Internal";
    DealerDbModelsVoucherTypeEnum["Temporary"] = "Temporary";
    DealerDbModelsVoucherTypeEnum["RightToRepair"] = "RightToRepair";
})(DealerDbModelsVoucherTypeEnum || (DealerDbModelsVoucherTypeEnum = {}));
// DealerDbModelsVoucher
/**
 * A voucher for EDT activation
**/
var DealerDbModelsVoucher = /** @class */ (function (_super) {
    __extends(DealerDbModelsVoucher, _super);
    function DealerDbModelsVoucher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate, form, name=CreatedDate;" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucher.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" }),
        __metadata("design:type", Boolean)
    ], DealerDbModelsVoucher.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDate, form, name=ExpirationDate;" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucher.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseTo, form, name=LicenseTo;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "licenseTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModifiedBy, form, name=ModifiedBy;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "modifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderNumber, form, name=OrderNumber;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Punched, form, name=Punched;" }),
        __metadata("design:type", Boolean)
    ], DealerDbModelsVoucher.prototype, "punched", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PunchedDate, form, name=PunchedDate;" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucher.prototype, "punchedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose, form, name=Purpose;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type, form, name=Type;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucher.prototype, "voucherCode", void 0);
    return DealerDbModelsVoucher;
}(SpeakeasyBase));
export { DealerDbModelsVoucher };
