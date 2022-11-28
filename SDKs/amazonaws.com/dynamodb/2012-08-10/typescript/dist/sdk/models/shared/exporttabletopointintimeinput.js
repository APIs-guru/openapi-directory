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
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";
var ExportTableToPointInTimeInput = /** @class */ (function (_super) {
    __extends(ExportTableToPointInTimeInput, _super);
    function ExportTableToPointInTimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportFormat" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "exportFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportTime" }),
        __metadata("design:type", Date)
    ], ExportTableToPointInTimeInput.prototype, "exportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BucketOwner" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "s3BucketOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Prefix" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "s3Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3SseAlgorithm" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "s3SseAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3SseKmsKeyId" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "s3SseKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableArn" }),
        __metadata("design:type", String)
    ], ExportTableToPointInTimeInput.prototype, "tableArn", void 0);
    return ExportTableToPointInTimeInput;
}(SpeakeasyBase));
export { ExportTableToPointInTimeInput };
