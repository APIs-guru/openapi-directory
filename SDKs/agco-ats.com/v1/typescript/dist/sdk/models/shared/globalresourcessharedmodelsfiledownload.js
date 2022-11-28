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
export var GlobalResourcesSharedModelsFileDownloadStateEnum;
(function (GlobalResourcesSharedModelsFileDownloadStateEnum) {
    GlobalResourcesSharedModelsFileDownloadStateEnum["Created"] = "Created";
    GlobalResourcesSharedModelsFileDownloadStateEnum["Available"] = "Available";
    GlobalResourcesSharedModelsFileDownloadStateEnum["Removed"] = "Removed";
})(GlobalResourcesSharedModelsFileDownloadStateEnum || (GlobalResourcesSharedModelsFileDownloadStateEnum = {}));
// GlobalResourcesSharedModelsFileDownload
/**
 * A language used for string translations.
**/
var GlobalResourcesSharedModelsFileDownload = /** @class */ (function (_super) {
    __extends(GlobalResourcesSharedModelsFileDownload, _super);
    function GlobalResourcesSharedModelsFileDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CRC, form, name=CRC;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "crc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentType, form, name=ContentType;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPublic, form, name=IsPublic;" }),
        __metadata("design:type", Boolean)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path, form, name=Path;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size, form, name=Size;" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State, form, name=State;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsFileDownload.prototype, "state", void 0);
    return GlobalResourcesSharedModelsFileDownload;
}(SpeakeasyBase));
export { GlobalResourcesSharedModelsFileDownload };
