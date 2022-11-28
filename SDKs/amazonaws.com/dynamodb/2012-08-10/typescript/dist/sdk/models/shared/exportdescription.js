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
import { ExportFormatEnum } from "./exportformatenum";
import { ExportStatusEnum } from "./exportstatusenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";
// ExportDescription
/**
 * Represents the properties of the exported table.
**/
var ExportDescription = /** @class */ (function (_super) {
    __extends(ExportDescription, _super);
    function ExportDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BilledSizeBytes" }),
        __metadata("design:type", Number)
    ], ExportDescription.prototype, "billedSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], ExportDescription.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportArn" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "exportArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportFormat" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "exportFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportManifest" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "exportManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportStatus" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "exportStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportTime" }),
        __metadata("design:type", Date)
    ], ExportDescription.prototype, "exportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureCode" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "failureCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureMessage" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "failureMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], ExportDescription.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BucketOwner" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "s3BucketOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Prefix" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "s3Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3SseAlgorithm" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "s3SseAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3SseKmsKeyId" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "s3SseKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], ExportDescription.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableArn" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "tableArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableId" }),
        __metadata("design:type", String)
    ], ExportDescription.prototype, "tableId", void 0);
    return ExportDescription;
}(SpeakeasyBase));
export { ExportDescription };
