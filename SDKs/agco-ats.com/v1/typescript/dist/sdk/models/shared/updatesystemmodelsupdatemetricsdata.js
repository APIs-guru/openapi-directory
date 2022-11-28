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
import { UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord } from "./updatesystemmodelsupdatemetricsdataactiveversionbyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord } from "./updatesystemmodelsupdatemetricsdatacurrentstatebyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord } from "./updatesystemmodelsupdatemetricsdatapackageerrorsrecord";
// UpdateSystemModelsUpdateMetricsData
/**
 * Model that retrieves the data for UpdateMetrics
**/
var UpdateSystemModelsUpdateMetricsData = /** @class */ (function (_super) {
    __extends(UpdateSystemModelsUpdateMetricsData, _super);
    function UpdateSystemModelsUpdateMetricsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveVersion" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "activeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveVersionByClient", elemType: UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord }),
        __metadata("design:type", Array)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "activeVersionByClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentStateByClient", elemType: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord }),
        __metadata("design:type", Array)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "currentStateByClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDate" }),
        __metadata("design:type", Date)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "cutOffDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataRefreshed" }),
        __metadata("design:type", Date)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "dataRefreshed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilteredClientCount" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "filteredClientCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageErrors", elemType: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord }),
        __metadata("design:type", Array)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "packageErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalClientCount" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsUpdateMetricsData.prototype, "totalClientCount", void 0);
    return UpdateSystemModelsUpdateMetricsData;
}(SpeakeasyBase));
export { UpdateSystemModelsUpdateMetricsData };
