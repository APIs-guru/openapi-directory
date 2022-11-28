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
var UpdateClusterConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigPathParams, _super);
    function UpdateClusterConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigPathParams.prototype, "name", void 0);
    return UpdateClusterConfigPathParams;
}(SpeakeasyBase));
export { UpdateClusterConfigPathParams };
var UpdateClusterConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigHeaders, _super);
    function UpdateClusterConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateClusterConfigHeaders;
}(SpeakeasyBase));
export { UpdateClusterConfigHeaders };
// UpdateClusterConfigRequestBodyLogging
/**
 * An object representing the logging configuration for resources in your cluster.
**/
var UpdateClusterConfigRequestBodyLogging = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBodyLogging, _super);
    function UpdateClusterConfigRequestBodyLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyLogging.prototype, "clusterLogging", void 0);
    return UpdateClusterConfigRequestBodyLogging;
}(SpeakeasyBase));
export { UpdateClusterConfigRequestBodyLogging };
// UpdateClusterConfigRequestBodyResourcesVpcConfig
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
var UpdateClusterConfigRequestBodyResourcesVpcConfig = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBodyResourcesVpcConfig, _super);
    function UpdateClusterConfigRequestBodyResourcesVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointPrivateAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "endpointPrivateAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointPublicAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "endpointPublicAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAccessCidrs" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "publicAccessCidrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetIds" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "subnetIds", void 0);
    return UpdateClusterConfigRequestBodyResourcesVpcConfig;
}(SpeakeasyBase));
export { UpdateClusterConfigRequestBodyResourcesVpcConfig };
var UpdateClusterConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBody, _super);
    function UpdateClusterConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", UpdateClusterConfigRequestBodyLogging)
    ], UpdateClusterConfigRequestBody.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourcesVpcConfig" }),
        __metadata("design:type", UpdateClusterConfigRequestBodyResourcesVpcConfig)
    ], UpdateClusterConfigRequestBody.prototype, "resourcesVpcConfig", void 0);
    return UpdateClusterConfigRequestBody;
}(SpeakeasyBase));
export { UpdateClusterConfigRequestBody };
var UpdateClusterConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequest, _super);
    function UpdateClusterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClusterConfigPathParams)
    ], UpdateClusterConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClusterConfigHeaders)
    ], UpdateClusterConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateClusterConfigRequestBody)
    ], UpdateClusterConfigRequest.prototype, "request", void 0);
    return UpdateClusterConfigRequest;
}(SpeakeasyBase));
export { UpdateClusterConfigRequest };
var UpdateClusterConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigResponse, _super);
    function UpdateClusterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateClusterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateClusterConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateClusterConfigResponse)
    ], UpdateClusterConfigResponse.prototype, "updateClusterConfigResponse", void 0);
    return UpdateClusterConfigResponse;
}(SpeakeasyBase));
export { UpdateClusterConfigResponse };
