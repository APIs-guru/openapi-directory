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
import { Ec2TagSet } from "./ec2tagset";
import { Ec2TagFilter } from "./ec2tagfilter";
// TargetInstances
/**
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
**/
var TargetInstances = /** @class */ (function (_super) {
    __extends(TargetInstances, _super);
    function TargetInstances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoScalingGroups" }),
        __metadata("design:type", Array)
    ], TargetInstances.prototype, "autoScalingGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2TagSet" }),
        __metadata("design:type", Ec2TagSet)
    ], TargetInstances.prototype, "ec2TagSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFilters", elemType: Ec2TagFilter }),
        __metadata("design:type", Array)
    ], TargetInstances.prototype, "tagFilters", void 0);
    return TargetInstances;
}(SpeakeasyBase));
export { TargetInstances };
