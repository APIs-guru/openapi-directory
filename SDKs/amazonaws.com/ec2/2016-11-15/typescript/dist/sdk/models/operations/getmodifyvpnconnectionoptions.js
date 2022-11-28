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
export var GetModifyVpnConnectionOptionsActionEnum;
(function (GetModifyVpnConnectionOptionsActionEnum) {
    GetModifyVpnConnectionOptionsActionEnum["ModifyVpnConnectionOptions"] = "ModifyVpnConnectionOptions";
})(GetModifyVpnConnectionOptionsActionEnum || (GetModifyVpnConnectionOptionsActionEnum = {}));
export var GetModifyVpnConnectionOptionsVersionEnum;
(function (GetModifyVpnConnectionOptionsVersionEnum) {
    GetModifyVpnConnectionOptionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpnConnectionOptionsVersionEnum || (GetModifyVpnConnectionOptionsVersionEnum = {}));
var GetModifyVpnConnectionOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpnConnectionOptionsQueryParams, _super);
    function GetModifyVpnConnectionOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalIpv4NetworkCidr" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "localIpv4NetworkCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalIpv6NetworkCidr" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "localIpv6NetworkCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoteIpv4NetworkCidr" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "remoteIpv4NetworkCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoteIpv6NetworkCidr" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "remoteIpv6NetworkCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsQueryParams.prototype, "vpnConnectionId", void 0);
    return GetModifyVpnConnectionOptionsQueryParams;
}(SpeakeasyBase));
export { GetModifyVpnConnectionOptionsQueryParams };
var GetModifyVpnConnectionOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpnConnectionOptionsHeaders, _super);
    function GetModifyVpnConnectionOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpnConnectionOptionsHeaders;
}(SpeakeasyBase));
export { GetModifyVpnConnectionOptionsHeaders };
var GetModifyVpnConnectionOptionsRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpnConnectionOptionsRequest, _super);
    function GetModifyVpnConnectionOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpnConnectionOptionsQueryParams)
    ], GetModifyVpnConnectionOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpnConnectionOptionsHeaders)
    ], GetModifyVpnConnectionOptionsRequest.prototype, "headers", void 0);
    return GetModifyVpnConnectionOptionsRequest;
}(SpeakeasyBase));
export { GetModifyVpnConnectionOptionsRequest };
var GetModifyVpnConnectionOptionsResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpnConnectionOptionsResponse, _super);
    function GetModifyVpnConnectionOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpnConnectionOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpnConnectionOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpnConnectionOptionsResponse.prototype, "statusCode", void 0);
    return GetModifyVpnConnectionOptionsResponse;
}(SpeakeasyBase));
export { GetModifyVpnConnectionOptionsResponse };
