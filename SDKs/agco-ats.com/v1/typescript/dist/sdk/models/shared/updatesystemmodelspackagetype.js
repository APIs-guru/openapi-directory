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
var UpdateSystemModelsPackageType = /** @class */ (function (_super) {
    __extends(UpdateSystemModelsPackageType, _super);
    function UpdateSystemModelsPackageType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attribute, form, name=Attribute;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category, form, name=Category;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Icon, form, name=Icon;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsPackageType.prototype, "inventoryFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "inventoryPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "localizedDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "localizedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxDeltaPackages, form, name=MaxDeltaPackages;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsPackageType.prototype, "maxDeltaPackages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPackageType.prototype, "packageTypeId", void 0);
    return UpdateSystemModelsPackageType;
}(SpeakeasyBase));
export { UpdateSystemModelsPackageType };
