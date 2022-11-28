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
import { IpPermission } from "./ippermission";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { FleetTypeEnum } from "./fleettypeenum";
import { LocationConfiguration } from "./locationconfiguration";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { RuntimeConfiguration } from "./runtimeconfiguration";
import { Tag } from "./tag";
// CreateFleetInput
/**
 * Represents the input for a request operation.
**/
var CreateFleetInput = /** @class */ (function (_super) {
    __extends(CreateFleetInput, _super);
    function CreateFleetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildId" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateConfiguration" }),
        __metadata("design:type", CertificateConfiguration)
    ], CreateFleetInput.prototype, "certificateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2InboundPermissions", elemType: IpPermission }),
        __metadata("design:type", Array)
    ], CreateFleetInput.prototype, "ec2InboundPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2InstanceType" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "ec2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetType" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "fleetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRoleArn" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "instanceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locations", elemType: LocationConfiguration }),
        __metadata("design:type", Array)
    ], CreateFleetInput.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogPaths" }),
        __metadata("design:type", Array)
    ], CreateFleetInput.prototype, "logPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricGroups" }),
        __metadata("design:type", Array)
    ], CreateFleetInput.prototype, "metricGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewGameSessionProtectionPolicy" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "newGameSessionProtectionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeerVpcAwsAccountId" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "peerVpcAwsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeerVpcId" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "peerVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCreationLimitPolicy" }),
        __metadata("design:type", ResourceCreationLimitPolicy)
    ], CreateFleetInput.prototype, "resourceCreationLimitPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" }),
        __metadata("design:type", RuntimeConfiguration)
    ], CreateFleetInput.prototype, "runtimeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScriptId" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerLaunchParameters" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "serverLaunchParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerLaunchPath" }),
        __metadata("design:type", String)
    ], CreateFleetInput.prototype, "serverLaunchPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateFleetInput.prototype, "tags", void 0);
    return CreateFleetInput;
}(SpeakeasyBase));
export { CreateFleetInput };
