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
export var GetReplaceRouteActionEnum;
(function (GetReplaceRouteActionEnum) {
    GetReplaceRouteActionEnum["ReplaceRoute"] = "ReplaceRoute";
})(GetReplaceRouteActionEnum || (GetReplaceRouteActionEnum = {}));
export var GetReplaceRouteVersionEnum;
(function (GetReplaceRouteVersionEnum) {
    GetReplaceRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReplaceRouteVersionEnum || (GetReplaceRouteVersionEnum = {}));
var GetReplaceRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetReplaceRouteQueryParams, _super);
    function GetReplaceRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CarrierGatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "carrierGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "destinationIpv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "destinationPrefixListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetReplaceRouteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EgressOnlyInternetGatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "egressOnlyInternetGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "localGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalTarget" }),
        __metadata("design:type", Boolean)
    ], GetReplaceRouteQueryParams.prototype, "localTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NatGatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "natGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "transitGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "vpcEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteQueryParams.prototype, "vpcPeeringConnectionId", void 0);
    return GetReplaceRouteQueryParams;
}(SpeakeasyBase));
export { GetReplaceRouteQueryParams };
var GetReplaceRouteHeaders = /** @class */ (function (_super) {
    __extends(GetReplaceRouteHeaders, _super);
    function GetReplaceRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReplaceRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReplaceRouteHeaders;
}(SpeakeasyBase));
export { GetReplaceRouteHeaders };
var GetReplaceRouteRequest = /** @class */ (function (_super) {
    __extends(GetReplaceRouteRequest, _super);
    function GetReplaceRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceRouteQueryParams)
    ], GetReplaceRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceRouteHeaders)
    ], GetReplaceRouteRequest.prototype, "headers", void 0);
    return GetReplaceRouteRequest;
}(SpeakeasyBase));
export { GetReplaceRouteRequest };
var GetReplaceRouteResponse = /** @class */ (function (_super) {
    __extends(GetReplaceRouteResponse, _super);
    function GetReplaceRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReplaceRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReplaceRouteResponse.prototype, "statusCode", void 0);
    return GetReplaceRouteResponse;
}(SpeakeasyBase));
export { GetReplaceRouteResponse };
