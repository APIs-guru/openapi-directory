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
export var GetDetachVpnGatewayActionEnum;
(function (GetDetachVpnGatewayActionEnum) {
    GetDetachVpnGatewayActionEnum["DetachVpnGateway"] = "DetachVpnGateway";
})(GetDetachVpnGatewayActionEnum || (GetDetachVpnGatewayActionEnum = {}));
export var GetDetachVpnGatewayVersionEnum;
(function (GetDetachVpnGatewayVersionEnum) {
    GetDetachVpnGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDetachVpnGatewayVersionEnum || (GetDetachVpnGatewayVersionEnum = {}));
var GetDetachVpnGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachVpnGatewayQueryParams, _super);
    function GetDetachVpnGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDetachVpnGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayQueryParams.prototype, "vpcId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayQueryParams.prototype, "vpnGatewayId", void 0);
    return GetDetachVpnGatewayQueryParams;
}(SpeakeasyBase));
export { GetDetachVpnGatewayQueryParams };
var GetDetachVpnGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetDetachVpnGatewayHeaders, _super);
    function GetDetachVpnGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachVpnGatewayHeaders;
}(SpeakeasyBase));
export { GetDetachVpnGatewayHeaders };
var GetDetachVpnGatewayRequest = /** @class */ (function (_super) {
    __extends(GetDetachVpnGatewayRequest, _super);
    function GetDetachVpnGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDetachVpnGatewayQueryParams)
    ], GetDetachVpnGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDetachVpnGatewayHeaders)
    ], GetDetachVpnGatewayRequest.prototype, "headers", void 0);
    return GetDetachVpnGatewayRequest;
}(SpeakeasyBase));
export { GetDetachVpnGatewayRequest };
var GetDetachVpnGatewayResponse = /** @class */ (function (_super) {
    __extends(GetDetachVpnGatewayResponse, _super);
    function GetDetachVpnGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDetachVpnGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDetachVpnGatewayResponse.prototype, "statusCode", void 0);
    return GetDetachVpnGatewayResponse;
}(SpeakeasyBase));
export { GetDetachVpnGatewayResponse };
