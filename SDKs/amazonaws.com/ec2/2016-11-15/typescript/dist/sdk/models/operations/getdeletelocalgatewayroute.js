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
export var GetDeleteLocalGatewayRouteActionEnum;
(function (GetDeleteLocalGatewayRouteActionEnum) {
    GetDeleteLocalGatewayRouteActionEnum["DeleteLocalGatewayRoute"] = "DeleteLocalGatewayRoute";
})(GetDeleteLocalGatewayRouteActionEnum || (GetDeleteLocalGatewayRouteActionEnum = {}));
export var GetDeleteLocalGatewayRouteVersionEnum;
(function (GetDeleteLocalGatewayRouteVersionEnum) {
    GetDeleteLocalGatewayRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteLocalGatewayRouteVersionEnum || (GetDeleteLocalGatewayRouteVersionEnum = {}));
var GetDeleteLocalGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteQueryParams, _super);
    function GetDeleteLocalGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteLocalGatewayRouteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteQueryParams.prototype, "localGatewayRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteQueryParams.prototype, "version", void 0);
    return GetDeleteLocalGatewayRouteQueryParams;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteQueryParams };
var GetDeleteLocalGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteHeaders, _super);
    function GetDeleteLocalGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLocalGatewayRouteHeaders;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteHeaders };
var GetDeleteLocalGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteRequest, _super);
    function GetDeleteLocalGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteLocalGatewayRouteQueryParams)
    ], GetDeleteLocalGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteLocalGatewayRouteHeaders)
    ], GetDeleteLocalGatewayRouteRequest.prototype, "headers", void 0);
    return GetDeleteLocalGatewayRouteRequest;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteRequest };
var GetDeleteLocalGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteResponse, _super);
    function GetDeleteLocalGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLocalGatewayRouteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteLocalGatewayRouteResponse.prototype, "statusCode", void 0);
    return GetDeleteLocalGatewayRouteResponse;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteResponse };
