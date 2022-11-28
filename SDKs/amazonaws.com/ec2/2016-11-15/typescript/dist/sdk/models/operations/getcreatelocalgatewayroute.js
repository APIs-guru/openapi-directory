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
export var GetCreateLocalGatewayRouteActionEnum;
(function (GetCreateLocalGatewayRouteActionEnum) {
    GetCreateLocalGatewayRouteActionEnum["CreateLocalGatewayRoute"] = "CreateLocalGatewayRoute";
})(GetCreateLocalGatewayRouteActionEnum || (GetCreateLocalGatewayRouteActionEnum = {}));
export var GetCreateLocalGatewayRouteVersionEnum;
(function (GetCreateLocalGatewayRouteVersionEnum) {
    GetCreateLocalGatewayRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateLocalGatewayRouteVersionEnum || (GetCreateLocalGatewayRouteVersionEnum = {}));
var GetCreateLocalGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateLocalGatewayRouteQueryParams, _super);
    function GetCreateLocalGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "localGatewayRouteTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayVirtualInterfaceGroupId" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "localGatewayVirtualInterfaceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteQueryParams.prototype, "version", void 0);
    return GetCreateLocalGatewayRouteQueryParams;
}(SpeakeasyBase));
export { GetCreateLocalGatewayRouteQueryParams };
var GetCreateLocalGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(GetCreateLocalGatewayRouteHeaders, _super);
    function GetCreateLocalGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateLocalGatewayRouteHeaders;
}(SpeakeasyBase));
export { GetCreateLocalGatewayRouteHeaders };
var GetCreateLocalGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(GetCreateLocalGatewayRouteRequest, _super);
    function GetCreateLocalGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateLocalGatewayRouteQueryParams)
    ], GetCreateLocalGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateLocalGatewayRouteHeaders)
    ], GetCreateLocalGatewayRouteRequest.prototype, "headers", void 0);
    return GetCreateLocalGatewayRouteRequest;
}(SpeakeasyBase));
export { GetCreateLocalGatewayRouteRequest };
var GetCreateLocalGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(GetCreateLocalGatewayRouteResponse, _super);
    function GetCreateLocalGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateLocalGatewayRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateLocalGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateLocalGatewayRouteResponse.prototype, "statusCode", void 0);
    return GetCreateLocalGatewayRouteResponse;
}(SpeakeasyBase));
export { GetCreateLocalGatewayRouteResponse };
