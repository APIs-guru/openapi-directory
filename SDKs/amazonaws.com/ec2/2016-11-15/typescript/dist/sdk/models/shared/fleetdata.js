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
import { FleetActivityStatusEnum } from "./fleetactivitystatusenum";
import { DescribeFleetError } from "./describefleeterror";
import { FleetExcessCapacityTerminationPolicyEnum } from "./fleetexcesscapacityterminationpolicyenum";
import { FleetStateCodeEnum } from "./fleetstatecodeenum";
import { DescribeFleetsInstances } from "./describefleetsinstances";
import { FleetLaunchTemplateConfig } from "./fleetlaunchtemplateconfig";
import { OnDemandOptions } from "./ondemandoptions";
import { SpotOptions } from "./spotoptions";
import { Tag } from "./tag";
import { TargetCapacitySpecification } from "./targetcapacityspecification";
import { FleetTypeEnum } from "./fleettypeenum";
// FleetData
/**
 * Describes an EC2 Fleet.
**/
var FleetData = /** @class */ (function (_super) {
    __extends(FleetData, _super);
    function FleetData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "activityStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], FleetData.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DescribeFleetError }),
        __metadata("design:type", Array)
    ], FleetData.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "excessCapacityTerminationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "fleetState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FleetData.prototype, "fulfilledCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FleetData.prototype, "fulfilledOnDemandCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DescribeFleetsInstances }),
        __metadata("design:type", Array)
    ], FleetData.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FleetLaunchTemplateConfig }),
        __metadata("design:type", Array)
    ], FleetData.prototype, "launchTemplateConfigs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnDemandOptions)
    ], FleetData.prototype, "onDemandOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], FleetData.prototype, "replaceUnhealthyInstances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpotOptions)
    ], FleetData.prototype, "spotOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], FleetData.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TargetCapacitySpecification)
    ], FleetData.prototype, "targetCapacitySpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], FleetData.prototype, "terminateInstancesWithExpiration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FleetData.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], FleetData.prototype, "validFrom", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], FleetData.prototype, "validUntil", void 0);
    return FleetData;
}(SpeakeasyBase));
export { FleetData };
