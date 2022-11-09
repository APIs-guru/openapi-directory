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
export var GetDeleteVpnConnectionActionEnum;
(function (GetDeleteVpnConnectionActionEnum) {
    GetDeleteVpnConnectionActionEnum["DeleteVpnConnection"] = "DeleteVpnConnection";
})(GetDeleteVpnConnectionActionEnum || (GetDeleteVpnConnectionActionEnum = {}));
export var GetDeleteVpnConnectionVersionEnum;
(function (GetDeleteVpnConnectionVersionEnum) {
    GetDeleteVpnConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpnConnectionVersionEnum || (GetDeleteVpnConnectionVersionEnum = {}));
var GetDeleteVpnConnectionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionQueryParams, _super);
    function GetDeleteVpnConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVpnConnectionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionQueryParams.prototype, "vpnConnectionId", void 0);
    return GetDeleteVpnConnectionQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionQueryParams };
var GetDeleteVpnConnectionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionHeaders, _super);
    function GetDeleteVpnConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpnConnectionHeaders;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionHeaders };
var GetDeleteVpnConnectionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionRequest, _super);
    function GetDeleteVpnConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpnConnectionQueryParams)
    ], GetDeleteVpnConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpnConnectionHeaders)
    ], GetDeleteVpnConnectionRequest.prototype, "headers", void 0);
    return GetDeleteVpnConnectionRequest;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionRequest };
var GetDeleteVpnConnectionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpnConnectionResponse, _super);
    function GetDeleteVpnConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteVpnConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpnConnectionResponse.prototype, "statusCode", void 0);
    return GetDeleteVpnConnectionResponse;
}(SpeakeasyBase));
export { GetDeleteVpnConnectionResponse };
