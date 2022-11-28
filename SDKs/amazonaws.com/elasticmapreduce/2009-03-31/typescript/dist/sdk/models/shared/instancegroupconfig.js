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
import { AutoScalingPolicy } from "./autoscalingpolicy";
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
// InstanceGroupConfig
/**
 * Configuration defining a new instance group.
**/
var InstanceGroupConfig = /** @class */ (function (_super) {
    __extends(InstanceGroupConfig, _super);
    function InstanceGroupConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" }),
        __metadata("design:type", AutoScalingPolicy)
    ], InstanceGroupConfig.prototype, "autoScalingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BidPrice" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "bidPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], InstanceGroupConfig.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsConfiguration" }),
        __metadata("design:type", EbsConfiguration)
    ], InstanceGroupConfig.prototype, "ebsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCount" }),
        __metadata("design:type", Number)
    ], InstanceGroupConfig.prototype, "instanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRole" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "instanceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Market" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "name", void 0);
    return InstanceGroupConfig;
}(SpeakeasyBase));
export { InstanceGroupConfig };
