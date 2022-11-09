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
export var GetDeleteVpnGatewayActionEnum;
(function (GetDeleteVpnGatewayActionEnum) {
    GetDeleteVpnGatewayActionEnum["DeleteVpnGateway"] = "DeleteVpnGateway";
})(GetDeleteVpnGatewayActionEnum || (GetDeleteVpnGatewayActionEnum = {}));
export var GetDeleteVpnGatewayVersionEnum;
(function (GetDeleteVpnGatewayVersionEnum) {
    GetDeleteVpnGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpnGatewayVersionEnum || (GetDeleteVpnGatewayVersionEnum = {}));
var GetDeleteVpnGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpnGatewayQueryParams, _super);
    function GetDeleteVpnGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVpnGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayQueryParams.prototype, "vpnGatewayId", void 0);
    return GetDeleteVpnGatewayQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpnGatewayQueryParams };
var GetDeleteVpnGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpnGatewayHeaders, _super);
    function GetDeleteVpnGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpnGatewayHeaders;
}(SpeakeasyBase));
export { GetDeleteVpnGatewayHeaders };
var GetDeleteVpnGatewayRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpnGatewayRequest, _super);
    function GetDeleteVpnGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpnGatewayQueryParams)
    ], GetDeleteVpnGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpnGatewayHeaders)
    ], GetDeleteVpnGatewayRequest.prototype, "headers", void 0);
    return GetDeleteVpnGatewayRequest;
}(SpeakeasyBase));
export { GetDeleteVpnGatewayRequest };
var GetDeleteVpnGatewayResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpnGatewayResponse, _super);
    function GetDeleteVpnGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteVpnGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpnGatewayResponse.prototype, "statusCode", void 0);
    return GetDeleteVpnGatewayResponse;
}(SpeakeasyBase));
export { GetDeleteVpnGatewayResponse };
