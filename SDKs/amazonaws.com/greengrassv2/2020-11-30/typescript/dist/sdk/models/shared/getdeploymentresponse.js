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
import { DeploymentPolicies } from "./deploymentpolicies";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { DeploymentIoTJobConfiguration } from "./deploymentiotjobconfiguration";
var GetDeploymentResponse = /** @class */ (function (_super) {
    __extends(GetDeploymentResponse, _super);
    function GetDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=components", elemType: shared.ComponentDeploymentSpecification }),
        __metadata("design:type", Map)
    ], GetDeploymentResponse.prototype, "components", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTimestamp" }),
        __metadata("design:type", Date)
    ], GetDeploymentResponse.prototype, "creationTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "deploymentId", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentName" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "deploymentName", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentPolicies" }),
        __metadata("design:type", DeploymentPolicies)
    ], GetDeploymentResponse.prototype, "deploymentPolicies", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentStatus" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "deploymentStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=iotJobArn" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "iotJobArn", void 0);
    __decorate([
        Metadata({ data: "json, name=iotJobConfiguration" }),
        __metadata("design:type", DeploymentIoTJobConfiguration)
    ], GetDeploymentResponse.prototype, "iotJobConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=iotJobId" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "iotJobId", void 0);
    __decorate([
        Metadata({ data: "json, name=isLatestForTarget" }),
        __metadata("design:type", Boolean)
    ], GetDeploymentResponse.prototype, "isLatestForTarget", void 0);
    __decorate([
        Metadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "revisionId", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], GetDeploymentResponse.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=targetArn" }),
        __metadata("design:type", String)
    ], GetDeploymentResponse.prototype, "targetArn", void 0);
    return GetDeploymentResponse;
}(SpeakeasyBase));
export { GetDeploymentResponse };
