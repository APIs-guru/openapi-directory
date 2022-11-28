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
import { BillingModeSummary } from "./billingmodesummary";
import { ReplicaGlobalSecondaryIndexSettingsDescription } from "./replicaglobalsecondaryindexsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
// ReplicaSettingsDescription
/**
 * Represents the properties of a replica.
**/
var ReplicaSettingsDescription = /** @class */ (function (_super) {
    __extends(ReplicaSettingsDescription, _super);
    function ReplicaSettingsDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegionName" }),
        __metadata("design:type", String)
    ], ReplicaSettingsDescription.prototype, "regionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaBillingModeSummary" }),
        __metadata("design:type", BillingModeSummary)
    ], ReplicaSettingsDescription.prototype, "replicaBillingModeSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaGlobalSecondaryIndexSettings", elemType: ReplicaGlobalSecondaryIndexSettingsDescription }),
        __metadata("design:type", Array)
    ], ReplicaSettingsDescription.prototype, "replicaGlobalSecondaryIndexSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettings" }),
        __metadata("design:type", AutoScalingSettingsDescription)
    ], ReplicaSettingsDescription.prototype, "replicaProvisionedReadCapacityAutoScalingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityUnits" }),
        __metadata("design:type", Number)
    ], ReplicaSettingsDescription.prototype, "replicaProvisionedReadCapacityUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedWriteCapacityAutoScalingSettings" }),
        __metadata("design:type", AutoScalingSettingsDescription)
    ], ReplicaSettingsDescription.prototype, "replicaProvisionedWriteCapacityAutoScalingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedWriteCapacityUnits" }),
        __metadata("design:type", Number)
    ], ReplicaSettingsDescription.prototype, "replicaProvisionedWriteCapacityUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicaStatus" }),
        __metadata("design:type", String)
    ], ReplicaSettingsDescription.prototype, "replicaStatus", void 0);
    return ReplicaSettingsDescription;
}(SpeakeasyBase));
export { ReplicaSettingsDescription };
