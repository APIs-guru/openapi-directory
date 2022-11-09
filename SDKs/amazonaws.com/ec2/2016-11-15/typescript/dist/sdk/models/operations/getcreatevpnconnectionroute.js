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
export var GetCreateVpnConnectionRouteActionEnum;
(function (GetCreateVpnConnectionRouteActionEnum) {
    GetCreateVpnConnectionRouteActionEnum["CreateVpnConnectionRoute"] = "CreateVpnConnectionRoute";
})(GetCreateVpnConnectionRouteActionEnum || (GetCreateVpnConnectionRouteActionEnum = {}));
export var GetCreateVpnConnectionRouteVersionEnum;
(function (GetCreateVpnConnectionRouteVersionEnum) {
    GetCreateVpnConnectionRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateVpnConnectionRouteVersionEnum || (GetCreateVpnConnectionRouteVersionEnum = {}));
var GetCreateVpnConnectionRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateVpnConnectionRouteQueryParams, _super);
    function GetCreateVpnConnectionRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteQueryParams.prototype, "vpnConnectionId", void 0);
    return GetCreateVpnConnectionRouteQueryParams;
}(SpeakeasyBase));
export { GetCreateVpnConnectionRouteQueryParams };
var GetCreateVpnConnectionRouteHeaders = /** @class */ (function (_super) {
    __extends(GetCreateVpnConnectionRouteHeaders, _super);
    function GetCreateVpnConnectionRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateVpnConnectionRouteHeaders;
}(SpeakeasyBase));
export { GetCreateVpnConnectionRouteHeaders };
var GetCreateVpnConnectionRouteRequest = /** @class */ (function (_super) {
    __extends(GetCreateVpnConnectionRouteRequest, _super);
    function GetCreateVpnConnectionRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateVpnConnectionRouteQueryParams)
    ], GetCreateVpnConnectionRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateVpnConnectionRouteHeaders)
    ], GetCreateVpnConnectionRouteRequest.prototype, "headers", void 0);
    return GetCreateVpnConnectionRouteRequest;
}(SpeakeasyBase));
export { GetCreateVpnConnectionRouteRequest };
var GetCreateVpnConnectionRouteResponse = /** @class */ (function (_super) {
    __extends(GetCreateVpnConnectionRouteResponse, _super);
    function GetCreateVpnConnectionRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateVpnConnectionRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateVpnConnectionRouteResponse.prototype, "statusCode", void 0);
    return GetCreateVpnConnectionRouteResponse;
}(SpeakeasyBase));
export { GetCreateVpnConnectionRouteResponse };
