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
import { Icd10CmAttribute } from "./icd10cmattribute";
import { Icd10CmEntityCategoryEnum } from "./icd10cmentitycategoryenum";
import { Icd10CmConcept } from "./icd10cmconcept";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
// Icd10CmEntity
/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
**/
var Icd10CmEntity = /** @class */ (function (_super) {
    __extends(Icd10CmEntity, _super);
    function Icd10CmEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes", elemType: Icd10CmAttribute }),
        __metadata("design:type", Array)
    ], Icd10CmEntity.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeginOffset" }),
        __metadata("design:type", Number)
    ], Icd10CmEntity.prototype, "beginOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], Icd10CmEntity.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndOffset" }),
        __metadata("design:type", Number)
    ], Icd10CmEntity.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ICD10CMConcepts", elemType: Icd10CmConcept }),
        __metadata("design:type", Array)
    ], Icd10CmEntity.prototype, "icd10CmConcepts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Icd10CmEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], Icd10CmEntity.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], Icd10CmEntity.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Traits", elemType: Icd10CmTrait }),
        __metadata("design:type", Array)
    ], Icd10CmEntity.prototype, "traits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Icd10CmEntity.prototype, "type", void 0);
    return Icd10CmEntity;
}(SpeakeasyBase));
export { Icd10CmEntity };
