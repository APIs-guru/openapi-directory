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
import { RxNormAttribute } from "./rxnormattribute";
import { RxNormEntityCategoryEnum } from "./rxnormentitycategoryenum";
import { RxNormConcept } from "./rxnormconcept";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormEntityTypeEnum } from "./rxnormentitytypeenum";
// RxNormEntity
/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
**/
var RxNormEntity = /** @class */ (function (_super) {
    __extends(RxNormEntity, _super);
    function RxNormEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes", elemType: RxNormAttribute }),
        __metadata("design:type", Array)
    ], RxNormEntity.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeginOffset" }),
        __metadata("design:type", Number)
    ], RxNormEntity.prototype, "beginOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], RxNormEntity.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndOffset" }),
        __metadata("design:type", Number)
    ], RxNormEntity.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], RxNormEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RxNormConcepts", elemType: RxNormConcept }),
        __metadata("design:type", Array)
    ], RxNormEntity.prototype, "rxNormConcepts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], RxNormEntity.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], RxNormEntity.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Traits", elemType: RxNormTrait }),
        __metadata("design:type", Array)
    ], RxNormEntity.prototype, "traits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], RxNormEntity.prototype, "type", void 0);
    return RxNormEntity;
}(SpeakeasyBase));
export { RxNormEntity };
