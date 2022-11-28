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
var UpdateNodegroupVersionPathParams = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionPathParams, _super);
    function UpdateNodegroupVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionPathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodegroupName" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionPathParams.prototype, "nodegroupName", void 0);
    return UpdateNodegroupVersionPathParams;
}(SpeakeasyBase));
export { UpdateNodegroupVersionPathParams };
var UpdateNodegroupVersionHeaders = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionHeaders, _super);
    function UpdateNodegroupVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateNodegroupVersionHeaders;
}(SpeakeasyBase));
export { UpdateNodegroupVersionHeaders };
// UpdateNodegroupVersionRequestBodyLaunchTemplate
/**
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
var UpdateNodegroupVersionRequestBodyLaunchTemplate = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionRequestBodyLaunchTemplate, _super);
    function UpdateNodegroupVersionRequestBodyLaunchTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBodyLaunchTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBodyLaunchTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBodyLaunchTemplate.prototype, "version", void 0);
    return UpdateNodegroupVersionRequestBodyLaunchTemplate;
}(SpeakeasyBase));
export { UpdateNodegroupVersionRequestBodyLaunchTemplate };
var UpdateNodegroupVersionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionRequestBody, _super);
    function UpdateNodegroupVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], UpdateNodegroupVersionRequestBody.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchTemplate" }),
        __metadata("design:type", UpdateNodegroupVersionRequestBodyLaunchTemplate)
    ], UpdateNodegroupVersionRequestBody.prototype, "launchTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBody.prototype, "releaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionRequestBody.prototype, "version", void 0);
    return UpdateNodegroupVersionRequestBody;
}(SpeakeasyBase));
export { UpdateNodegroupVersionRequestBody };
var UpdateNodegroupVersionRequest = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionRequest, _super);
    function UpdateNodegroupVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodegroupVersionPathParams)
    ], UpdateNodegroupVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodegroupVersionHeaders)
    ], UpdateNodegroupVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNodegroupVersionRequestBody)
    ], UpdateNodegroupVersionRequest.prototype, "request", void 0);
    return UpdateNodegroupVersionRequest;
}(SpeakeasyBase));
export { UpdateNodegroupVersionRequest };
var UpdateNodegroupVersionResponse = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionResponse, _super);
    function UpdateNodegroupVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNodegroupVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNodegroupVersionResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNodegroupVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateNodegroupVersionResponse)
    ], UpdateNodegroupVersionResponse.prototype, "updateNodegroupVersionResponse", void 0);
    return UpdateNodegroupVersionResponse;
}(SpeakeasyBase));
export { UpdateNodegroupVersionResponse };
