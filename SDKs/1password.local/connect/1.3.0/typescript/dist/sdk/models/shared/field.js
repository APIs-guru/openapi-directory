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
import { GeneratorRecipe } from "./generatorrecipe";
export var FieldPurposeEnum;
(function (FieldPurposeEnum) {
    FieldPurposeEnum["Unknown"] = "";
    FieldPurposeEnum["Username"] = "USERNAME";
    FieldPurposeEnum["Password"] = "PASSWORD";
    FieldPurposeEnum["Notes"] = "NOTES";
})(FieldPurposeEnum || (FieldPurposeEnum = {}));
var FieldSection = /** @class */ (function (_super) {
    __extends(FieldSection, _super);
    function FieldSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FieldSection.prototype, "id", void 0);
    return FieldSection;
}(SpeakeasyBase));
export { FieldSection };
export var FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum["String"] = "STRING";
    FieldTypeEnum["Email"] = "EMAIL";
    FieldTypeEnum["Concealed"] = "CONCEALED";
    FieldTypeEnum["Url"] = "URL";
    FieldTypeEnum["Totp"] = "TOTP";
    FieldTypeEnum["Date"] = "DATE";
    FieldTypeEnum["MonthYear"] = "MONTH_YEAR";
    FieldTypeEnum["Menu"] = "MENU";
})(FieldTypeEnum || (FieldTypeEnum = {}));
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entropy" }),
        __metadata("design:type", Number)
    ], Field.prototype, "entropy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generate" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "generate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Field.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Field.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], Field.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipe" }),
        __metadata("design:type", GeneratorRecipe)
    ], Field.prototype, "recipe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", FieldSection)
    ], Field.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Field.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Field.prototype, "value", void 0);
    return Field;
}(SpeakeasyBase));
export { Field };
var FieldInput = /** @class */ (function (_super) {
    __extends(FieldInput, _super);
    function FieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generate" }),
        __metadata("design:type", Boolean)
    ], FieldInput.prototype, "generate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FieldInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FieldInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], FieldInput.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipe" }),
        __metadata("design:type", GeneratorRecipe)
    ], FieldInput.prototype, "recipe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", FieldSection)
    ], FieldInput.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FieldInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], FieldInput.prototype, "value", void 0);
    return FieldInput;
}(SpeakeasyBase));
export { FieldInput };
