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
import { CertificateConfiguration } from "./certificateconfiguration";
import { FleetTypeEnum } from "./fleettypeenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { FleetStatusEnum } from "./fleetstatusenum";
// FleetAttributes
/**
 * <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
**/
var FleetAttributes = /** @class */ (function (_super) {
    __extends(FleetAttributes, _super);
    function FleetAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildArn" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "buildArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildId" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateConfiguration" }),
        __metadata("design:type", CertificateConfiguration)
    ], FleetAttributes.prototype, "certificateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], FleetAttributes.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetType" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "fleetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRoleArn" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "instanceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogPaths" }),
        __metadata("design:type", Array)
    ], FleetAttributes.prototype, "logPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricGroups" }),
        __metadata("design:type", Array)
    ], FleetAttributes.prototype, "metricGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewGameSessionProtectionPolicy" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "newGameSessionProtectionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperatingSystem" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "operatingSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCreationLimitPolicy" }),
        __metadata("design:type", ResourceCreationLimitPolicy)
    ], FleetAttributes.prototype, "resourceCreationLimitPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScriptArn" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "scriptArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScriptId" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerLaunchParameters" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "serverLaunchParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerLaunchPath" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "serverLaunchPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], FleetAttributes.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppedActions" }),
        __metadata("design:type", Array)
    ], FleetAttributes.prototype, "stoppedActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationTime" }),
        __metadata("design:type", Date)
    ], FleetAttributes.prototype, "terminationTime", void 0);
    return FleetAttributes;
}(SpeakeasyBase));
export { FleetAttributes };
