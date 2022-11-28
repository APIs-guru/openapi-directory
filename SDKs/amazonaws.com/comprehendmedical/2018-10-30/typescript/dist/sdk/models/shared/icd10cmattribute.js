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
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CmRelationshipTypeEnum } from "./icd10cmrelationshiptypeenum";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmAttributeTypeEnum } from "./icd10cmattributetypeenum";
// Icd10CmAttribute
/**
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
**/
var Icd10CmAttribute = /** @class */ (function (_super) {
    __extends(Icd10CmAttribute, _super);
    function Icd10CmAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeginOffset" }),
        __metadata("design:type", Number)
    ], Icd10CmAttribute.prototype, "beginOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], Icd10CmAttribute.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndOffset" }),
        __metadata("design:type", Number)
    ], Icd10CmAttribute.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Icd10CmAttribute.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelationshipScore" }),
        __metadata("design:type", Number)
    ], Icd10CmAttribute.prototype, "relationshipScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelationshipType" }),
        __metadata("design:type", String)
    ], Icd10CmAttribute.prototype, "relationshipType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], Icd10CmAttribute.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], Icd10CmAttribute.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Traits", elemType: Icd10CmTrait }),
        __metadata("design:type", Array)
    ], Icd10CmAttribute.prototype, "traits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Icd10CmAttribute.prototype, "type", void 0);
    return Icd10CmAttribute;
}(SpeakeasyBase));
export { Icd10CmAttribute };
