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
import { IndexFieldTypeEnum } from "./indexfieldtypeenum";
import { LiteralOptions } from "./literaloptions";
import { SourceAttribute } from "./sourceattribute";
import { TextOptions } from "./textoptions";
import { UIntOptions } from "./uintoptions";
// IndexField
/**
 * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
**/
var IndexField = /** @class */ (function (_super) {
    __extends(IndexField, _super);
    function IndexField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IndexField.prototype, "indexFieldName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IndexField.prototype, "indexFieldType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LiteralOptions)
    ], IndexField.prototype, "literalOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SourceAttribute }),
        __metadata("design:type", Array)
    ], IndexField.prototype, "sourceAttributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TextOptions)
    ], IndexField.prototype, "textOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UIntOptions)
    ], IndexField.prototype, "uIntOptions", void 0);
    return IndexField;
}(SpeakeasyBase));
export { IndexField };
