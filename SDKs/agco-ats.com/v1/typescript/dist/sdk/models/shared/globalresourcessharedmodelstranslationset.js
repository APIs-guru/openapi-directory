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
import { GlobalResourcesSharedModelsTranslationSetAttribute } from "./globalresourcessharedmodelstranslationsetattribute";
export var GlobalResourcesSharedModelsTranslationSetStateEnum;
(function (GlobalResourcesSharedModelsTranslationSetStateEnum) {
    GlobalResourcesSharedModelsTranslationSetStateEnum["OutForProcessing"] = "OutForProcessing";
    GlobalResourcesSharedModelsTranslationSetStateEnum["Processing"] = "Processing";
    GlobalResourcesSharedModelsTranslationSetStateEnum["PendingApproval"] = "PendingApproval";
    GlobalResourcesSharedModelsTranslationSetStateEnum["OutForTranslation"] = "OutForTranslation";
    GlobalResourcesSharedModelsTranslationSetStateEnum["Cancelled"] = "Cancelled";
    GlobalResourcesSharedModelsTranslationSetStateEnum["Completed"] = "Completed";
})(GlobalResourcesSharedModelsTranslationSetStateEnum || (GlobalResourcesSharedModelsTranslationSetStateEnum = {}));
// GlobalResourcesSharedModelsTranslationSet
/**
 * A set of strings submitted for translation
**/
var GlobalResourcesSharedModelsTranslationSet = /** @class */ (function (_super) {
    __extends(GlobalResourcesSharedModelsTranslationSet, _super);
    function GlobalResourcesSharedModelsTranslationSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes", elemType: GlobalResourcesSharedModelsTranslationSetAttribute }),
        __metadata("design:type", Array)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileIDs" }),
        __metadata("design:type", Array)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "fileIDs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InDate" }),
        __metadata("design:type", Date)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "inDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutDate" }),
        __metadata("design:type", Date)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "outDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranslationRequestID" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationSet.prototype, "translationRequestId", void 0);
    return GlobalResourcesSharedModelsTranslationSet;
}(SpeakeasyBase));
export { GlobalResourcesSharedModelsTranslationSet };
