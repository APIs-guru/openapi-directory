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
var CreateComputeEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentHeaders, _super);
    function CreateComputeEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateComputeEnvironmentHeaders;
}(SpeakeasyBase));
export { CreateComputeEnvironmentHeaders };
// CreateComputeEnvironmentRequestBodyComputeResources
/**
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
var CreateComputeEnvironmentRequestBodyComputeResources = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequestBodyComputeResources, _super);
    function CreateComputeEnvironmentRequestBodyComputeResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allocationStrategy" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "allocationStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=bidPercentage" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "bidPercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=desiredvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "desiredvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "ec2Configuration", void 0);
    __decorate([
        Metadata({ data: "json, name=ec2KeyPair" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "ec2KeyPair", void 0);
    __decorate([
        Metadata({ data: "json, name=imageId" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "imageId", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "instanceRole", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "instanceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=launchTemplate" }),
        __metadata("design:type", shared.LaunchTemplateSpecification)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "launchTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=maxvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "maxvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=minvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "minvCpus", void 0);
    __decorate([
        Metadata({ data: "json, name=placementGroup" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "placementGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=spotIamFleetRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "spotIamFleetRole", void 0);
    __decorate([
        Metadata({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "subnets", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "type", void 0);
    return CreateComputeEnvironmentRequestBodyComputeResources;
}(SpeakeasyBase));
export { CreateComputeEnvironmentRequestBodyComputeResources };
export var CreateComputeEnvironmentRequestBodyStateEnum;
(function (CreateComputeEnvironmentRequestBodyStateEnum) {
    CreateComputeEnvironmentRequestBodyStateEnum["Enabled"] = "ENABLED";
    CreateComputeEnvironmentRequestBodyStateEnum["Disabled"] = "DISABLED";
})(CreateComputeEnvironmentRequestBodyStateEnum || (CreateComputeEnvironmentRequestBodyStateEnum = {}));
export var CreateComputeEnvironmentRequestBodyTypeEnum;
(function (CreateComputeEnvironmentRequestBodyTypeEnum) {
    CreateComputeEnvironmentRequestBodyTypeEnum["Managed"] = "MANAGED";
    CreateComputeEnvironmentRequestBodyTypeEnum["Unmanaged"] = "UNMANAGED";
})(CreateComputeEnvironmentRequestBodyTypeEnum || (CreateComputeEnvironmentRequestBodyTypeEnum = {}));
var CreateComputeEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequestBody, _super);
    function CreateComputeEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=computeEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "computeEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=computeResources" }),
        __metadata("design:type", CreateComputeEnvironmentRequestBodyComputeResources)
    ], CreateComputeEnvironmentRequestBody.prototype, "computeResources", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "serviceRole", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateComputeEnvironmentRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "type", void 0);
    return CreateComputeEnvironmentRequestBody;
}(SpeakeasyBase));
export { CreateComputeEnvironmentRequestBody };
var CreateComputeEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequest, _super);
    function CreateComputeEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateComputeEnvironmentHeaders)
    ], CreateComputeEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateComputeEnvironmentRequestBody)
    ], CreateComputeEnvironmentRequest.prototype, "request", void 0);
    return CreateComputeEnvironmentRequest;
}(SpeakeasyBase));
export { CreateComputeEnvironmentRequest };
var CreateComputeEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentResponse, _super);
    function CreateComputeEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateComputeEnvironmentResponse)
    ], CreateComputeEnvironmentResponse.prototype, "createComputeEnvironmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentResponse.prototype, "statusCode", void 0);
    return CreateComputeEnvironmentResponse;
}(SpeakeasyBase));
export { CreateComputeEnvironmentResponse };
