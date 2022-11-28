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
import { ComputeCapacityStatus } from "./computecapacitystatus";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetError } from "./fleeterror";
import { FleetTypeEnum } from "./fleettypeenum";
import { FleetStateEnum } from "./fleetstateenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
// Fleet
/**
 * Describes a fleet.
**/
var Fleet = /** @class */ (function (_super) {
    __extends(Fleet, _super);
    function Fleet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputeCapacityStatus" }),
        __metadata("design:type", ComputeCapacityStatus)
    ], Fleet.prototype, "computeCapacityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], Fleet.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], Fleet.prototype, "disconnectTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainJoinInfo" }),
        __metadata("design:type", DomainJoinInfo)
    ], Fleet.prototype, "domainJoinInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDefaultInternetAccess" }),
        __metadata("design:type", Boolean)
    ], Fleet.prototype, "enableDefaultInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetErrors", elemType: FleetError }),
        __metadata("design:type", Array)
    ], Fleet.prototype, "fleetErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetType" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "fleetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRoleArn" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], Fleet.prototype, "idleDisconnectTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageArn" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "imageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageName" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "imageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxUserDurationInSeconds" }),
        __metadata("design:type", Number)
    ], Fleet.prototype, "maxUserDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamView" }),
        __metadata("design:type", String)
    ], Fleet.prototype, "streamView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], Fleet.prototype, "vpcConfig", void 0);
    return Fleet;
}(SpeakeasyBase));
export { Fleet };
