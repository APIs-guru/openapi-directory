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
// Ec2InstanceCounts
/**
 * <p>Resource capacity settings. Fleet capacity is measured in EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.</p> <p>EC2 instance counts are part of <a>FleetCapacity</a>.</p>
**/
var Ec2InstanceCounts = /** @class */ (function (_super) {
    __extends(Ec2InstanceCounts, _super);
    function Ec2InstanceCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ACTIVE" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DESIRED" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "desired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IDLE" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "idle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MAXIMUM" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "maximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MINIMUM" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "minimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PENDING" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "pending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TERMINATING" }),
        __metadata("design:type", Number)
    ], Ec2InstanceCounts.prototype, "terminating", void 0);
    return Ec2InstanceCounts;
}(SpeakeasyBase));
export { Ec2InstanceCounts };
