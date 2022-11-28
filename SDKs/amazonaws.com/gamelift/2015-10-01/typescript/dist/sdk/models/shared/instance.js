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
import { OperatingSystemEnum } from "./operatingsystemenum";
import { InstanceStatusEnum } from "./instancestatusenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
// Instance
/**
 * <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeInstances</a> </p>
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Instance.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], Instance.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], Instance.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperatingSystem" }),
        __metadata("design:type", String)
    ], Instance.prototype, "operatingSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Instance.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Instance.prototype, "type", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
