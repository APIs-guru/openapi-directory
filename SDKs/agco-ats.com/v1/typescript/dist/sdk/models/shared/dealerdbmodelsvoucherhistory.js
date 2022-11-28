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
export var DealerDbModelsVoucherHistoryTypeEnum;
(function (DealerDbModelsVoucherHistoryTypeEnum) {
    DealerDbModelsVoucherHistoryTypeEnum["Commercial"] = "Commercial";
    DealerDbModelsVoucherHistoryTypeEnum["Internal"] = "Internal";
    DealerDbModelsVoucherHistoryTypeEnum["Temporary"] = "Temporary";
    DealerDbModelsVoucherHistoryTypeEnum["RightToRepair"] = "RightToRepair";
})(DealerDbModelsVoucherHistoryTypeEnum || (DealerDbModelsVoucherHistoryTypeEnum = {}));
var DealerDbModelsVoucherHistory = /** @class */ (function (_super) {
    __extends(DealerDbModelsVoucherHistory, _super);
    function DealerDbModelsVoucherHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChangedDate" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucherHistory.prototype, "changedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucherHistory.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerCode" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deleted" }),
        __metadata("design:type", Boolean)
    ], DealerDbModelsVoucherHistory.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDate" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucherHistory.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", Number)
    ], DealerDbModelsVoucherHistory.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseTo" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "licenseTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModifiedBy" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "modifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderNumber" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Punched" }),
        __metadata("design:type", Boolean)
    ], DealerDbModelsVoucherHistory.prototype, "punched", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PunchedDate" }),
        __metadata("design:type", Date)
    ], DealerDbModelsVoucherHistory.prototype, "punchedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoucherCode" }),
        __metadata("design:type", String)
    ], DealerDbModelsVoucherHistory.prototype, "voucherCode", void 0);
    return DealerDbModelsVoucherHistory;
}(SpeakeasyBase));
export { DealerDbModelsVoucherHistory };
