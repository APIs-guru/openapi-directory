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
var CreateClusterHeaders = /** @class */ (function (_super) {
    __extends(CreateClusterHeaders, _super);
    function CreateClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateClusterHeaders;
}(SpeakeasyBase));
export { CreateClusterHeaders };
// CreateClusterRequestBodyKubernetesNetworkConfig
/**
 * The Kubernetes network configuration for the cluster.
**/
var CreateClusterRequestBodyKubernetesNetworkConfig = /** @class */ (function (_super) {
    __extends(CreateClusterRequestBodyKubernetesNetworkConfig, _super);
    function CreateClusterRequestBodyKubernetesNetworkConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=serviceIpv4Cidr" }),
        __metadata("design:type", String)
    ], CreateClusterRequestBodyKubernetesNetworkConfig.prototype, "serviceIpv4Cidr", void 0);
    return CreateClusterRequestBodyKubernetesNetworkConfig;
}(SpeakeasyBase));
export { CreateClusterRequestBodyKubernetesNetworkConfig };
// CreateClusterRequestBodyLogging
/**
 * An object representing the logging configuration for resources in your cluster.
**/
var CreateClusterRequestBodyLogging = /** @class */ (function (_super) {
    __extends(CreateClusterRequestBodyLogging, _super);
    function CreateClusterRequestBodyLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup }),
        __metadata("design:type", Array)
    ], CreateClusterRequestBodyLogging.prototype, "clusterLogging", void 0);
    return CreateClusterRequestBodyLogging;
}(SpeakeasyBase));
export { CreateClusterRequestBodyLogging };
// CreateClusterRequestBodyResourcesVpcConfig
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
var CreateClusterRequestBodyResourcesVpcConfig = /** @class */ (function (_super) {
    __extends(CreateClusterRequestBodyResourcesVpcConfig, _super);
    function CreateClusterRequestBodyResourcesVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=endpointPrivateAccess" }),
        __metadata("design:type", Boolean)
    ], CreateClusterRequestBodyResourcesVpcConfig.prototype, "endpointPrivateAccess", void 0);
    __decorate([
        Metadata({ data: "json, name=endpointPublicAccess" }),
        __metadata("design:type", Boolean)
    ], CreateClusterRequestBodyResourcesVpcConfig.prototype, "endpointPublicAccess", void 0);
    __decorate([
        Metadata({ data: "json, name=publicAccessCidrs" }),
        __metadata("design:type", Array)
    ], CreateClusterRequestBodyResourcesVpcConfig.prototype, "publicAccessCidrs", void 0);
    __decorate([
        Metadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateClusterRequestBodyResourcesVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=subnetIds" }),
        __metadata("design:type", Array)
    ], CreateClusterRequestBodyResourcesVpcConfig.prototype, "subnetIds", void 0);
    return CreateClusterRequestBodyResourcesVpcConfig;
}(SpeakeasyBase));
export { CreateClusterRequestBodyResourcesVpcConfig };
var CreateClusterRequestBody = /** @class */ (function (_super) {
    __extends(CreateClusterRequestBody, _super);
    function CreateClusterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateClusterRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=encryptionConfig", elemType: shared.EncryptionConfig }),
        __metadata("design:type", Array)
    ], CreateClusterRequestBody.prototype, "encryptionConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=kubernetesNetworkConfig" }),
        __metadata("design:type", CreateClusterRequestBodyKubernetesNetworkConfig)
    ], CreateClusterRequestBody.prototype, "kubernetesNetworkConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=logging" }),
        __metadata("design:type", CreateClusterRequestBodyLogging)
    ], CreateClusterRequestBody.prototype, "logging", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateClusterRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=resourcesVpcConfig" }),
        __metadata("design:type", CreateClusterRequestBodyResourcesVpcConfig)
    ], CreateClusterRequestBody.prototype, "resourcesVpcConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateClusterRequestBody.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateClusterRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateClusterRequestBody.prototype, "version", void 0);
    return CreateClusterRequestBody;
}(SpeakeasyBase));
export { CreateClusterRequestBody };
var CreateClusterRequest = /** @class */ (function (_super) {
    __extends(CreateClusterRequest, _super);
    function CreateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateClusterHeaders)
    ], CreateClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateClusterRequestBody)
    ], CreateClusterRequest.prototype, "request", void 0);
    return CreateClusterRequest;
}(SpeakeasyBase));
export { CreateClusterRequest };
var CreateClusterResponse = /** @class */ (function (_super) {
    __extends(CreateClusterResponse, _super);
    function CreateClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateClusterResponse)
    ], CreateClusterResponse.prototype, "createClusterResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateClusterResponse.prototype, "unsupportedAvailabilityZoneException", void 0);
    return CreateClusterResponse;
}(SpeakeasyBase));
export { CreateClusterResponse };
