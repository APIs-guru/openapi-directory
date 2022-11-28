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
var UpdateSystemModelsUpdateGroup = /** @class */ (function (_super) {
    __extends(UpdateSystemModelsUpdateGroup, _super);
    function UpdateSystemModelsUpdateGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsUpdateGroup.prototype, "inventoryFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "inventoryPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "localizedDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "localizedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority, form, name=Priority;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsUpdateGroup.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportField, form, name=ReportField;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "reportField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateType, form, name=UpdateType;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "updateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidatingField, form, name=ValidatingField;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "validatingField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueToValidate, form, name=ValueToValidate;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "valueToValidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version, form, name=Version;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateGroup.prototype, "version", void 0);
    return UpdateSystemModelsUpdateGroup;
}(SpeakeasyBase));
export { UpdateSystemModelsUpdateGroup };
