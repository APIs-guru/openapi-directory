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
import { EntityTypeEnum } from "./entitytypeenum";
import { RelationshipTypeEnum } from "./relationshiptypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";
// Attribute
/**
 *  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.
**/
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeginOffset" }),
        __metadata("design:type", Number)
    ], Attribute.prototype, "beginOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndOffset" }),
        __metadata("design:type", Number)
    ], Attribute.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Attribute.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelationshipScore" }),
        __metadata("design:type", Number)
    ], Attribute.prototype, "relationshipScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelationshipType" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "relationshipType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], Attribute.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Traits", elemType: Trait }),
        __metadata("design:type", Array)
    ], Attribute.prototype, "traits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "type", void 0);
    return Attribute;
}(SpeakeasyBase));
export { Attribute };
