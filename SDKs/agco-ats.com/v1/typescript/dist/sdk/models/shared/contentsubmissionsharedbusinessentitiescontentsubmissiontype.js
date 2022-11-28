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
var ContentSubmissionSharedBusinessEntitiesContentSubmissionType = /** @class */ (function (_super) {
    __extends(ContentSubmissionSharedBusinessEntitiesContentSubmissionType, _super);
    function ContentSubmissionSharedBusinessEntitiesContentSubmissionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeTemplate, form, name=AttributeTemplate;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "attributeTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CategoryTemplate, form, name=CategoryTemplate;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "categoryTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled, form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryPackageID, form, name=InventoryPackageID;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "inventoryPackageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobID, form, name=JobID;" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseNotesDescription, form, name=ReleaseNotesDescription;" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmissionType.prototype, "releaseNotesDescription", void 0);
    return ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
}(SpeakeasyBase));
export { ContentSubmissionSharedBusinessEntitiesContentSubmissionType };
