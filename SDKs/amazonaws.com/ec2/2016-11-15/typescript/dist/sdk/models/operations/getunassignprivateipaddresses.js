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
export var GetUnassignPrivateIpAddressesActionEnum;
(function (GetUnassignPrivateIpAddressesActionEnum) {
    GetUnassignPrivateIpAddressesActionEnum["UnassignPrivateIpAddresses"] = "UnassignPrivateIpAddresses";
})(GetUnassignPrivateIpAddressesActionEnum || (GetUnassignPrivateIpAddressesActionEnum = {}));
export var GetUnassignPrivateIpAddressesVersionEnum;
(function (GetUnassignPrivateIpAddressesVersionEnum) {
    GetUnassignPrivateIpAddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetUnassignPrivateIpAddressesVersionEnum || (GetUnassignPrivateIpAddressesVersionEnum = {}));
var GetUnassignPrivateIpAddressesQueryParams = /** @class */ (function (_super) {
    __extends(GetUnassignPrivateIpAddressesQueryParams, _super);
    function GetUnassignPrivateIpAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" }),
        __metadata("design:type", Array)
    ], GetUnassignPrivateIpAddressesQueryParams.prototype, "ipv4Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" }),
        __metadata("design:type", Array)
    ], GetUnassignPrivateIpAddressesQueryParams.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesQueryParams.prototype, "version", void 0);
    return GetUnassignPrivateIpAddressesQueryParams;
}(SpeakeasyBase));
export { GetUnassignPrivateIpAddressesQueryParams };
var GetUnassignPrivateIpAddressesHeaders = /** @class */ (function (_super) {
    __extends(GetUnassignPrivateIpAddressesHeaders, _super);
    function GetUnassignPrivateIpAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUnassignPrivateIpAddressesHeaders;
}(SpeakeasyBase));
export { GetUnassignPrivateIpAddressesHeaders };
var GetUnassignPrivateIpAddressesRequest = /** @class */ (function (_super) {
    __extends(GetUnassignPrivateIpAddressesRequest, _super);
    function GetUnassignPrivateIpAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnassignPrivateIpAddressesQueryParams)
    ], GetUnassignPrivateIpAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnassignPrivateIpAddressesHeaders)
    ], GetUnassignPrivateIpAddressesRequest.prototype, "headers", void 0);
    return GetUnassignPrivateIpAddressesRequest;
}(SpeakeasyBase));
export { GetUnassignPrivateIpAddressesRequest };
var GetUnassignPrivateIpAddressesResponse = /** @class */ (function (_super) {
    __extends(GetUnassignPrivateIpAddressesResponse, _super);
    function GetUnassignPrivateIpAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUnassignPrivateIpAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUnassignPrivateIpAddressesResponse.prototype, "statusCode", void 0);
    return GetUnassignPrivateIpAddressesResponse;
}(SpeakeasyBase));
export { GetUnassignPrivateIpAddressesResponse };
