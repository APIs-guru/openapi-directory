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
var DealerDbModelsDealer = /** @class */ (function (_super) {
    __extends(DealerDbModelsDealer, _super);
    function DealerDbModelsDealer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress2" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingAddress2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress3" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingAddress3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress4" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingAddress4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingCity" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingCountry" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingCountryCode" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingState" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingZip" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "billingZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brands" }),
        __metadata("design:type", Array)
    ], DealerDbModelsDealer.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerCode" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerName" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "dealerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerStatus" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "dealerStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DealerStatusUpdateDate" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "dealerStatusUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filler" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "filler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsValid" }),
        __metadata("design:type", Boolean)
    ], DealerDbModelsDealer.prototype, "isValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguagePreference" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "languagePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region1" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "region1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region2" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "region2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegionMapping" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "regionMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleBrand" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "roleBrand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress2" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingAddress2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress3" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingAddress3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress4" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingAddress4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingCity" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingCountry" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingState" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingStreet" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingStreet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingZip" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "shippingZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Telephone" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "telephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VATCode" }),
        __metadata("design:type", String)
    ], DealerDbModelsDealer.prototype, "vatCode", void 0);
    return DealerDbModelsDealer;
}(SpeakeasyBase));
export { DealerDbModelsDealer };
