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
import { MessageFormatValueEnum } from "./messageformatvalueenum";
// KinesisSettings
/**
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
var KinesisSettings = /** @class */ (function (_super) {
    __extends(KinesisSettings, _super);
    function KinesisSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeControlDetails" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "includeControlDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeNullAndEmpty" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "includeNullAndEmpty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludePartitionValue" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "includePartitionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeTableAlterOperations" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "includeTableAlterOperations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeTransactionDetails" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "includeTransactionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageFormat" }),
        __metadata("design:type", String)
    ], KinesisSettings.prototype, "messageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoHexPrefix" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "noHexPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartitionIncludeSchemaTable" }),
        __metadata("design:type", Boolean)
    ], KinesisSettings.prototype, "partitionIncludeSchemaTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], KinesisSettings.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamArn" }),
        __metadata("design:type", String)
    ], KinesisSettings.prototype, "streamArn", void 0);
    return KinesisSettings;
}(SpeakeasyBase));
export { KinesisSettings };
