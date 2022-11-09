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
export var GetModifyClientVpnEndpointActionEnum;
(function (GetModifyClientVpnEndpointActionEnum) {
    GetModifyClientVpnEndpointActionEnum["ModifyClientVpnEndpoint"] = "ModifyClientVpnEndpoint";
})(GetModifyClientVpnEndpointActionEnum || (GetModifyClientVpnEndpointActionEnum = {}));
// GetModifyClientVpnEndpointClientConnectOptions
/**
 * The options for managing connection authorization for new client connections.
**/
var GetModifyClientVpnEndpointClientConnectOptions = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointClientConnectOptions, _super);
    function GetModifyClientVpnEndpointClientConnectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyClientVpnEndpointClientConnectOptions.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=LambdaFunctionArn" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointClientConnectOptions.prototype, "lambdaFunctionArn", void 0);
    return GetModifyClientVpnEndpointClientConnectOptions;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointClientConnectOptions };
// GetModifyClientVpnEndpointConnectionLogOptions
/**
 * Describes the client connection logging options for the Client VPN endpoint.
**/
var GetModifyClientVpnEndpointConnectionLogOptions = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointConnectionLogOptions, _super);
    function GetModifyClientVpnEndpointConnectionLogOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=CloudwatchLogGroup" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointConnectionLogOptions.prototype, "cloudwatchLogGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=CloudwatchLogStream" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointConnectionLogOptions.prototype, "cloudwatchLogStream", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyClientVpnEndpointConnectionLogOptions.prototype, "enabled", void 0);
    return GetModifyClientVpnEndpointConnectionLogOptions;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointConnectionLogOptions };
// GetModifyClientVpnEndpointDnsServers
/**
 * Information about the DNS server to be used.
**/
var GetModifyClientVpnEndpointDnsServers = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointDnsServers, _super);
    function GetModifyClientVpnEndpointDnsServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=CustomDnsServers" }),
        __metadata("design:type", Array)
    ], GetModifyClientVpnEndpointDnsServers.prototype, "customDnsServers", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyClientVpnEndpointDnsServers.prototype, "enabled", void 0);
    return GetModifyClientVpnEndpointDnsServers;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointDnsServers };
export var GetModifyClientVpnEndpointSelfServicePortalEnum;
(function (GetModifyClientVpnEndpointSelfServicePortalEnum) {
    GetModifyClientVpnEndpointSelfServicePortalEnum["Enabled"] = "enabled";
    GetModifyClientVpnEndpointSelfServicePortalEnum["Disabled"] = "disabled";
})(GetModifyClientVpnEndpointSelfServicePortalEnum || (GetModifyClientVpnEndpointSelfServicePortalEnum = {}));
export var GetModifyClientVpnEndpointVersionEnum;
(function (GetModifyClientVpnEndpointVersionEnum) {
    GetModifyClientVpnEndpointVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyClientVpnEndpointVersionEnum || (GetModifyClientVpnEndpointVersionEnum = {}));
var GetModifyClientVpnEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointQueryParams, _super);
    function GetModifyClientVpnEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientConnectOptions" }),
        __metadata("design:type", GetModifyClientVpnEndpointClientConnectOptions)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "clientConnectOptions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionLogOptions" }),
        __metadata("design:type", GetModifyClientVpnEndpointConnectionLogOptions)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "connectionLogOptions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DnsServers" }),
        __metadata("design:type", GetModifyClientVpnEndpointDnsServers)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "dnsServers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" }),
        __metadata("design:type", Array)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "securityGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SelfServicePortal" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "selfServicePortal", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateArn" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "serverCertificateArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SplitTunnel" }),
        __metadata("design:type", Boolean)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "splitTunnel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "vpcId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnPort" }),
        __metadata("design:type", Number)
    ], GetModifyClientVpnEndpointQueryParams.prototype, "vpnPort", void 0);
    return GetModifyClientVpnEndpointQueryParams;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointQueryParams };
var GetModifyClientVpnEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointHeaders, _super);
    function GetModifyClientVpnEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClientVpnEndpointHeaders;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointHeaders };
var GetModifyClientVpnEndpointRequest = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointRequest, _super);
    function GetModifyClientVpnEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClientVpnEndpointQueryParams)
    ], GetModifyClientVpnEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClientVpnEndpointHeaders)
    ], GetModifyClientVpnEndpointRequest.prototype, "headers", void 0);
    return GetModifyClientVpnEndpointRequest;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointRequest };
var GetModifyClientVpnEndpointResponse = /** @class */ (function (_super) {
    __extends(GetModifyClientVpnEndpointResponse, _super);
    function GetModifyClientVpnEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClientVpnEndpointResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyClientVpnEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyClientVpnEndpointResponse.prototype, "statusCode", void 0);
    return GetModifyClientVpnEndpointResponse;
}(SpeakeasyBase));
export { GetModifyClientVpnEndpointResponse };
