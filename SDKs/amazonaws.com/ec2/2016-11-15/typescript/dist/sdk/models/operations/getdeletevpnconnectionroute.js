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
export var GetDeleteVpnConnectionRouteActionEnum;
(function (GetDeleteVpnConnectionRouteActionEnum) {
    GetDeleteVpnConnectionRouteActionEnum["DeleteVpnConnectionRoute"] = "DeleteVpnConnectionRoute";
})(GetDeleteVpnConnectionRouteActionEnum || (GetDeleteVpnConnectionRouteActionEnum = {}));
export var GetDeleteVpnConnectionRouteVersionEnum;
(function (GetDeleteVpnConnectionRouteVersionEnum) {
    GetDeleteVpnConnectionRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpnConnectionRouteVersionEnum || (GetDeleteVpnConnectionRouteVersionEnum = {}));
var GetDeleteVpnConnectionRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionRouteQueryParams, _super);
    function GetDeleteVpnConnectionRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteQueryParams.prototype, "vpnConnectionId", void 0);
    return GetDeleteVpnConnectionRouteQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionRouteQueryParams };
var GetDeleteVpnConnectionRouteHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionRouteHeaders, _super);
    function GetDeleteVpnConnectionRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpnConnectionRouteHeaders;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionRouteHeaders };
var GetDeleteVpnConnectionRouteRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionRouteRequest, _super);
    function GetDeleteVpnConnectionRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVpnConnectionRouteQueryParams)
    ], GetDeleteVpnConnectionRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVpnConnectionRouteHeaders)
    ], GetDeleteVpnConnectionRouteRequest.prototype, "headers", void 0);
    return GetDeleteVpnConnectionRouteRequest;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionRouteRequest };
var GetDeleteVpnConnectionRouteResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionRouteResponse, _super);
    function GetDeleteVpnConnectionRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpnConnectionRouteResponse.prototype, "statusCode", void 0);
    return GetDeleteVpnConnectionRouteResponse;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionRouteResponse };
