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
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
// LaunchTemplateOverrides
/**
 * Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 40. The maximum number of distinct launch templates you can define for an Auto Scaling group is 20. For more information about configuring overrides, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
var LaunchTemplateOverrides = /** @class */ (function (_super) {
    __extends(LaunchTemplateOverrides, _super);
    function LaunchTemplateOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchTemplateOverrides.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateSpecification)
    ], LaunchTemplateOverrides.prototype, "launchTemplateSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchTemplateOverrides.prototype, "weightedCapacity", void 0);
    return LaunchTemplateOverrides;
}(SpeakeasyBase));
export { LaunchTemplateOverrides };
