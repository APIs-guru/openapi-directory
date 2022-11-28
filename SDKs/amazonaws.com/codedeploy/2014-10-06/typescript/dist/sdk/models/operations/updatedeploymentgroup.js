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
import * as shared from "../shared";
export var UpdateDeploymentGroupXAmzTargetEnum;
(function (UpdateDeploymentGroupXAmzTargetEnum) {
    UpdateDeploymentGroupXAmzTargetEnum["CodeDeploy20141006UpdateDeploymentGroup"] = "CodeDeploy_20141006.UpdateDeploymentGroup";
})(UpdateDeploymentGroupXAmzTargetEnum || (UpdateDeploymentGroupXAmzTargetEnum = {}));
var UpdateDeploymentGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateDeploymentGroupHeaders, _super);
    function UpdateDeploymentGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupHeaders.prototype, "xAmzTarget", void 0);
    return UpdateDeploymentGroupHeaders;
}(SpeakeasyBase));
export { UpdateDeploymentGroupHeaders };
var UpdateDeploymentGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateDeploymentGroupRequest, _super);
    function UpdateDeploymentGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeploymentGroupHeaders)
    ], UpdateDeploymentGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDeploymentGroupInput)
    ], UpdateDeploymentGroupRequest.prototype, "request", void 0);
    return UpdateDeploymentGroupRequest;
}(SpeakeasyBase));
export { UpdateDeploymentGroupRequest };
var UpdateDeploymentGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateDeploymentGroupResponse, _super);
    function UpdateDeploymentGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "alarmsLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "applicationDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "applicationNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "deploymentConfigDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "deploymentGroupAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "deploymentGroupDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "deploymentGroupNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "ecsServiceMappingLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidAlarmConfigException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidApplicationNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidAutoRollbackConfigException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidAutoScalingGroupException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidBlueGreenDeploymentConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidDeploymentConfigNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidDeploymentGroupNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidDeploymentStyleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidEc2TagCombinationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidEc2TagException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidEcsServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidLoadBalancerInfoException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidOnPremisesTagCombinationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidRoleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidTagException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidTargetGroupPairException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidTrafficRoutingConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "invalidTriggerConfigException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "lifecycleHookLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeploymentGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "tagSetListLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeploymentGroupResponse.prototype, "triggerTargetsLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDeploymentGroupOutput)
    ], UpdateDeploymentGroupResponse.prototype, "updateDeploymentGroupOutput", void 0);
    return UpdateDeploymentGroupResponse;
}(SpeakeasyBase));
export { UpdateDeploymentGroupResponse };
