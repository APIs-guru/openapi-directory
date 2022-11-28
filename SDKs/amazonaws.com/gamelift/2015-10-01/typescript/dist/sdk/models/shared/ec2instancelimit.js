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
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
// Ec2InstanceLimit
/**
 * <p>The GameLift service limits for an EC2 instance type and current utilization. GameLift allows AWS accounts a maximum number of instances, per instance type, per AWS Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeEC2InstanceLimits</a> </p>
**/
var Ec2InstanceLimit = /** @class */ (function (_super) {
    __extends(Ec2InstanceLimit, _super);
    function Ec2InstanceLimit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentInstances" }),
        __metadata("design:type", Number)
    ], Ec2InstanceLimit.prototype, "currentInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2InstanceType" }),
        __metadata("design:type", String)
    ], Ec2InstanceLimit.prototype, "ec2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceLimit" }),
        __metadata("design:type", Number)
    ], Ec2InstanceLimit.prototype, "instanceLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], Ec2InstanceLimit.prototype, "location", void 0);
    return Ec2InstanceLimit;
}(SpeakeasyBase));
export { Ec2InstanceLimit };
