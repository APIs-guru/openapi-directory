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
export var GetModifyVpcEndpointServiceConfigurationActionEnum;
(function (GetModifyVpcEndpointServiceConfigurationActionEnum) {
    GetModifyVpcEndpointServiceConfigurationActionEnum["ModifyVpcEndpointServiceConfiguration"] = "ModifyVpcEndpointServiceConfiguration";
})(GetModifyVpcEndpointServiceConfigurationActionEnum || (GetModifyVpcEndpointServiceConfigurationActionEnum = {}));
export var GetModifyVpcEndpointServiceConfigurationVersionEnum;
(function (GetModifyVpcEndpointServiceConfigurationVersionEnum) {
    GetModifyVpcEndpointServiceConfigurationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcEndpointServiceConfigurationVersionEnum || (GetModifyVpcEndpointServiceConfigurationVersionEnum = {}));
var GetModifyVpcEndpointServiceConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServiceConfigurationQueryParams, _super);
    function GetModifyVpcEndpointServiceConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AcceptanceRequired" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "acceptanceRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AddGatewayLoadBalancerArn" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "addGatewayLoadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AddNetworkLoadBalancerArn" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "addNetworkLoadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsName" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "privateDnsName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveGatewayLoadBalancerArn" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "removeGatewayLoadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkLoadBalancerArn" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "removeNetworkLoadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemovePrivateDnsName" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "removePrivateDnsName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationQueryParams.prototype, "version", void 0);
    return GetModifyVpcEndpointServiceConfigurationQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServiceConfigurationQueryParams };
var GetModifyVpcEndpointServiceConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServiceConfigurationHeaders, _super);
    function GetModifyVpcEndpointServiceConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcEndpointServiceConfigurationHeaders;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServiceConfigurationHeaders };
var GetModifyVpcEndpointServiceConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServiceConfigurationRequest, _super);
    function GetModifyVpcEndpointServiceConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyVpcEndpointServiceConfigurationQueryParams)
    ], GetModifyVpcEndpointServiceConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyVpcEndpointServiceConfigurationHeaders)
    ], GetModifyVpcEndpointServiceConfigurationRequest.prototype, "headers", void 0);
    return GetModifyVpcEndpointServiceConfigurationRequest;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServiceConfigurationRequest };
var GetModifyVpcEndpointServiceConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServiceConfigurationResponse, _super);
    function GetModifyVpcEndpointServiceConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcEndpointServiceConfigurationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServiceConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcEndpointServiceConfigurationResponse.prototype, "statusCode", void 0);
    return GetModifyVpcEndpointServiceConfigurationResponse;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServiceConfigurationResponse };
