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
export var GetAttachVpnGatewayActionEnum;
(function (GetAttachVpnGatewayActionEnum) {
    GetAttachVpnGatewayActionEnum["AttachVpnGateway"] = "AttachVpnGateway";
})(GetAttachVpnGatewayActionEnum || (GetAttachVpnGatewayActionEnum = {}));
export var GetAttachVpnGatewayVersionEnum;
(function (GetAttachVpnGatewayVersionEnum) {
    GetAttachVpnGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAttachVpnGatewayVersionEnum || (GetAttachVpnGatewayVersionEnum = {}));
var GetAttachVpnGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachVpnGatewayQueryParams, _super);
    function GetAttachVpnGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAttachVpnGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayQueryParams.prototype, "vpcId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayQueryParams.prototype, "vpnGatewayId", void 0);
    return GetAttachVpnGatewayQueryParams;
}(SpeakeasyBase));
export { GetAttachVpnGatewayQueryParams };
var GetAttachVpnGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetAttachVpnGatewayHeaders, _super);
    function GetAttachVpnGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAttachVpnGatewayHeaders;
}(SpeakeasyBase));
export { GetAttachVpnGatewayHeaders };
var GetAttachVpnGatewayRequest = /** @class */ (function (_super) {
    __extends(GetAttachVpnGatewayRequest, _super);
    function GetAttachVpnGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachVpnGatewayQueryParams)
    ], GetAttachVpnGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachVpnGatewayHeaders)
    ], GetAttachVpnGatewayRequest.prototype, "headers", void 0);
    return GetAttachVpnGatewayRequest;
}(SpeakeasyBase));
export { GetAttachVpnGatewayRequest };
var GetAttachVpnGatewayResponse = /** @class */ (function (_super) {
    __extends(GetAttachVpnGatewayResponse, _super);
    function GetAttachVpnGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttachVpnGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAttachVpnGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAttachVpnGatewayResponse.prototype, "statusCode", void 0);
    return GetAttachVpnGatewayResponse;
}(SpeakeasyBase));
export { GetAttachVpnGatewayResponse };
