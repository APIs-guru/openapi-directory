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
export var GetCreateRouteActionEnum;
(function (GetCreateRouteActionEnum) {
    GetCreateRouteActionEnum["CreateRoute"] = "CreateRoute";
})(GetCreateRouteActionEnum || (GetCreateRouteActionEnum = {}));
export var GetCreateRouteVersionEnum;
(function (GetCreateRouteVersionEnum) {
    GetCreateRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateRouteVersionEnum || (GetCreateRouteVersionEnum = {}));
var GetCreateRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateRouteQueryParams, _super);
    function GetCreateRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CarrierGatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "carrierGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "destinationIpv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "destinationPrefixListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateRouteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EgressOnlyInternetGatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "egressOnlyInternetGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "localGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NatGatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "natGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "transitGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "vpcEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], GetCreateRouteQueryParams.prototype, "vpcPeeringConnectionId", void 0);
    return GetCreateRouteQueryParams;
}(SpeakeasyBase));
export { GetCreateRouteQueryParams };
var GetCreateRouteHeaders = /** @class */ (function (_super) {
    __extends(GetCreateRouteHeaders, _super);
    function GetCreateRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateRouteHeaders;
}(SpeakeasyBase));
export { GetCreateRouteHeaders };
var GetCreateRouteRequest = /** @class */ (function (_super) {
    __extends(GetCreateRouteRequest, _super);
    function GetCreateRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateRouteQueryParams)
    ], GetCreateRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateRouteHeaders)
    ], GetCreateRouteRequest.prototype, "headers", void 0);
    return GetCreateRouteRequest;
}(SpeakeasyBase));
export { GetCreateRouteRequest };
var GetCreateRouteResponse = /** @class */ (function (_super) {
    __extends(GetCreateRouteResponse, _super);
    function GetCreateRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateRouteResponse.prototype, "statusCode", void 0);
    return GetCreateRouteResponse;
}(SpeakeasyBase));
export { GetCreateRouteResponse };
