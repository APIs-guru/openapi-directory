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
export var GetDeleteTransitGatewayRouteActionEnum;
(function (GetDeleteTransitGatewayRouteActionEnum) {
    GetDeleteTransitGatewayRouteActionEnum["DeleteTransitGatewayRoute"] = "DeleteTransitGatewayRoute";
})(GetDeleteTransitGatewayRouteActionEnum || (GetDeleteTransitGatewayRouteActionEnum = {}));
export var GetDeleteTransitGatewayRouteVersionEnum;
(function (GetDeleteTransitGatewayRouteVersionEnum) {
    GetDeleteTransitGatewayRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayRouteVersionEnum || (GetDeleteTransitGatewayRouteVersionEnum = {}));
var GetDeleteTransitGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteQueryParams, _super);
    function GetDeleteTransitGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayRouteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayRouteQueryParams;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteQueryParams };
var GetDeleteTransitGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteHeaders, _super);
    function GetDeleteTransitGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayRouteHeaders;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteHeaders };
var GetDeleteTransitGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteRequest, _super);
    function GetDeleteTransitGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayRouteQueryParams)
    ], GetDeleteTransitGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayRouteHeaders)
    ], GetDeleteTransitGatewayRouteRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayRouteRequest;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteRequest };
var GetDeleteTransitGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteResponse, _super);
    function GetDeleteTransitGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayRouteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayRouteResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayRouteResponse;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteResponse };
