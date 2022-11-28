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
export var GetUnassignIpv6AddressesActionEnum;
(function (GetUnassignIpv6AddressesActionEnum) {
    GetUnassignIpv6AddressesActionEnum["UnassignIpv6Addresses"] = "UnassignIpv6Addresses";
})(GetUnassignIpv6AddressesActionEnum || (GetUnassignIpv6AddressesActionEnum = {}));
export var GetUnassignIpv6AddressesVersionEnum;
(function (GetUnassignIpv6AddressesVersionEnum) {
    GetUnassignIpv6AddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetUnassignIpv6AddressesVersionEnum || (GetUnassignIpv6AddressesVersionEnum = {}));
var GetUnassignIpv6AddressesQueryParams = /** @class */ (function (_super) {
    __extends(GetUnassignIpv6AddressesQueryParams, _super);
    function GetUnassignIpv6AddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" }),
        __metadata("design:type", Array)
    ], GetUnassignIpv6AddressesQueryParams.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" }),
        __metadata("design:type", Array)
    ], GetUnassignIpv6AddressesQueryParams.prototype, "ipv6Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesQueryParams.prototype, "version", void 0);
    return GetUnassignIpv6AddressesQueryParams;
}(SpeakeasyBase));
export { GetUnassignIpv6AddressesQueryParams };
var GetUnassignIpv6AddressesHeaders = /** @class */ (function (_super) {
    __extends(GetUnassignIpv6AddressesHeaders, _super);
    function GetUnassignIpv6AddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUnassignIpv6AddressesHeaders;
}(SpeakeasyBase));
export { GetUnassignIpv6AddressesHeaders };
var GetUnassignIpv6AddressesRequest = /** @class */ (function (_super) {
    __extends(GetUnassignIpv6AddressesRequest, _super);
    function GetUnassignIpv6AddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnassignIpv6AddressesQueryParams)
    ], GetUnassignIpv6AddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnassignIpv6AddressesHeaders)
    ], GetUnassignIpv6AddressesRequest.prototype, "headers", void 0);
    return GetUnassignIpv6AddressesRequest;
}(SpeakeasyBase));
export { GetUnassignIpv6AddressesRequest };
var GetUnassignIpv6AddressesResponse = /** @class */ (function (_super) {
    __extends(GetUnassignIpv6AddressesResponse, _super);
    function GetUnassignIpv6AddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUnassignIpv6AddressesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUnassignIpv6AddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUnassignIpv6AddressesResponse.prototype, "statusCode", void 0);
    return GetUnassignIpv6AddressesResponse;
}(SpeakeasyBase));
export { GetUnassignIpv6AddressesResponse };
