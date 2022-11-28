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
export var GetAssignIpv6AddressesActionEnum;
(function (GetAssignIpv6AddressesActionEnum) {
    GetAssignIpv6AddressesActionEnum["AssignIpv6Addresses"] = "AssignIpv6Addresses";
})(GetAssignIpv6AddressesActionEnum || (GetAssignIpv6AddressesActionEnum = {}));
export var GetAssignIpv6AddressesVersionEnum;
(function (GetAssignIpv6AddressesVersionEnum) {
    GetAssignIpv6AddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssignIpv6AddressesVersionEnum || (GetAssignIpv6AddressesVersionEnum = {}));
var GetAssignIpv6AddressesQueryParams = /** @class */ (function (_super) {
    __extends(GetAssignIpv6AddressesQueryParams, _super);
    function GetAssignIpv6AddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6AddressCount" }),
        __metadata("design:type", Number)
    ], GetAssignIpv6AddressesQueryParams.prototype, "ipv6AddressCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" }),
        __metadata("design:type", Array)
    ], GetAssignIpv6AddressesQueryParams.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" }),
        __metadata("design:type", Array)
    ], GetAssignIpv6AddressesQueryParams.prototype, "ipv6Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6PrefixCount" }),
        __metadata("design:type", Number)
    ], GetAssignIpv6AddressesQueryParams.prototype, "ipv6PrefixCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesQueryParams.prototype, "version", void 0);
    return GetAssignIpv6AddressesQueryParams;
}(SpeakeasyBase));
export { GetAssignIpv6AddressesQueryParams };
var GetAssignIpv6AddressesHeaders = /** @class */ (function (_super) {
    __extends(GetAssignIpv6AddressesHeaders, _super);
    function GetAssignIpv6AddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssignIpv6AddressesHeaders;
}(SpeakeasyBase));
export { GetAssignIpv6AddressesHeaders };
var GetAssignIpv6AddressesRequest = /** @class */ (function (_super) {
    __extends(GetAssignIpv6AddressesRequest, _super);
    function GetAssignIpv6AddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssignIpv6AddressesQueryParams)
    ], GetAssignIpv6AddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssignIpv6AddressesHeaders)
    ], GetAssignIpv6AddressesRequest.prototype, "headers", void 0);
    return GetAssignIpv6AddressesRequest;
}(SpeakeasyBase));
export { GetAssignIpv6AddressesRequest };
var GetAssignIpv6AddressesResponse = /** @class */ (function (_super) {
    __extends(GetAssignIpv6AddressesResponse, _super);
    function GetAssignIpv6AddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssignIpv6AddressesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssignIpv6AddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssignIpv6AddressesResponse.prototype, "statusCode", void 0);
    return GetAssignIpv6AddressesResponse;
}(SpeakeasyBase));
export { GetAssignIpv6AddressesResponse };
