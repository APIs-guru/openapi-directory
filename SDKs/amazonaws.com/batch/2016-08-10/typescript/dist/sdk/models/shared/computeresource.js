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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrAllocationStrategyEnum } from "./crallocationstrategyenum";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { CrTypeEnum } from "./crtypeenum";
// ComputeResource
/**
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
var ComputeResource = /** @class */ (function (_super) {
    __extends(ComputeResource, _super);
    function ComputeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allocationStrategy" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "allocationStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=bidPercentage" }),
        __metadata("design:type", Number)
    ], ComputeResource.prototype, "bidPercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=desiredvCpus" }),
        __metadata("design:type", Number)
    ], ComputeResource.prototype, "desiredvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration }),
        __metadata("design:type", Array)
    ], ComputeResource.prototype, "ec2Configuration", void 0);
    __decorate([
        Metadata({ data: "json, name=ec2KeyPair" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "ec2KeyPair", void 0);
    __decorate([
        Metadata({ data: "json, name=imageId" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "imageId", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceRole" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "instanceRole", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], ComputeResource.prototype, "instanceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=launchTemplate" }),
        __metadata("design:type", LaunchTemplateSpecification)
    ], ComputeResource.prototype, "launchTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=maxvCpus" }),
        __metadata("design:type", Number)
    ], ComputeResource.prototype, "maxvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=minvCpus" }),
        __metadata("design:type", Number)
    ], ComputeResource.prototype, "minvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=placementGroup" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "placementGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], ComputeResource.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=spotIamFleetRole" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "spotIamFleetRole", void 0);
    __decorate([
        Metadata({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], ComputeResource.prototype, "subnets", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], ComputeResource.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ComputeResource.prototype, "type", void 0);
    return ComputeResource;
}(SpeakeasyBase));
export { ComputeResource };
