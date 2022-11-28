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
import { DataSourceEnum } from "./datasourceenum";
import { ContinuousExportStatusEnum } from "./continuousexportstatusenum";
// ContinuousExportDescription
/**
 * A list of continuous export descriptions.
**/
var ContinuousExportDescription = /** @class */ (function (_super) {
    __extends(ContinuousExportDescription, _super);
    function ContinuousExportDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", String)
    ], ContinuousExportDescription.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportId" }),
        __metadata("design:type", String)
    ], ContinuousExportDescription.prototype, "exportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Bucket" }),
        __metadata("design:type", String)
    ], ContinuousExportDescription.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaStorageConfig" }),
        __metadata("design:type", Map)
    ], ContinuousExportDescription.prototype, "schemaStorageConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], ContinuousExportDescription.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ContinuousExportDescription.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusDetail" }),
        __metadata("design:type", String)
    ], ContinuousExportDescription.prototype, "statusDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopTime" }),
        __metadata("design:type", Date)
    ], ContinuousExportDescription.prototype, "stopTime", void 0);
    return ContinuousExportDescription;
}(SpeakeasyBase));
export { ContinuousExportDescription };
