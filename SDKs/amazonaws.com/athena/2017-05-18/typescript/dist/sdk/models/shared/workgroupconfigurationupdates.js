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
import { EngineVersion } from "./engineversion";
import { ResultConfigurationUpdates } from "./resultconfigurationupdates";
// WorkGroupConfigurationUpdates
/**
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
**/
var WorkGroupConfigurationUpdates = /** @class */ (function (_super) {
    __extends(WorkGroupConfigurationUpdates, _super);
    function WorkGroupConfigurationUpdates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BytesScannedCutoffPerQuery" }),
        __metadata("design:type", Number)
    ], WorkGroupConfigurationUpdates.prototype, "bytesScannedCutoffPerQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnforceWorkGroupConfiguration" }),
        __metadata("design:type", Boolean)
    ], WorkGroupConfigurationUpdates.prototype, "enforceWorkGroupConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", EngineVersion)
    ], WorkGroupConfigurationUpdates.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublishCloudWatchMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], WorkGroupConfigurationUpdates.prototype, "publishCloudWatchMetricsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveBytesScannedCutoffPerQuery" }),
        __metadata("design:type", Boolean)
    ], WorkGroupConfigurationUpdates.prototype, "removeBytesScannedCutoffPerQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequesterPaysEnabled" }),
        __metadata("design:type", Boolean)
    ], WorkGroupConfigurationUpdates.prototype, "requesterPaysEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResultConfigurationUpdates" }),
        __metadata("design:type", ResultConfigurationUpdates)
    ], WorkGroupConfigurationUpdates.prototype, "resultConfigurationUpdates", void 0);
    return WorkGroupConfigurationUpdates;
}(SpeakeasyBase));
export { WorkGroupConfigurationUpdates };
