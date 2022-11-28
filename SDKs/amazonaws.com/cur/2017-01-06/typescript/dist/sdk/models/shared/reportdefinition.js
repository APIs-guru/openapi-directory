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
import { CompressionFormatEnum } from "./compressionformatenum";
import { ReportFormatEnum } from "./reportformatenum";
import { ReportVersioningEnum } from "./reportversioningenum";
import { AwsRegionEnum } from "./awsregionenum";
import { TimeUnitEnum } from "./timeunitenum";
// ReportDefinition
/**
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
**/
var ReportDefinition = /** @class */ (function (_super) {
    __extends(ReportDefinition, _super);
    function ReportDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalArtifacts" }),
        __metadata("design:type", Array)
    ], ReportDefinition.prototype, "additionalArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalSchemaElements" }),
        __metadata("design:type", Array)
    ], ReportDefinition.prototype, "additionalSchemaElements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingViewArn" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "billingViewArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Compression" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "compression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshClosedReports" }),
        __metadata("design:type", Boolean)
    ], ReportDefinition.prototype, "refreshClosedReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportName" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "reportName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportVersioning" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "reportVersioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Prefix" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "s3Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Region" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "s3Region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeUnit" }),
        __metadata("design:type", String)
    ], ReportDefinition.prototype, "timeUnit", void 0);
    return ReportDefinition;
}(SpeakeasyBase));
export { ReportDefinition };
