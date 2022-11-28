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
export var GetAssignPrivateIpAddressesActionEnum;
(function (GetAssignPrivateIpAddressesActionEnum) {
    GetAssignPrivateIpAddressesActionEnum["AssignPrivateIpAddresses"] = "AssignPrivateIpAddresses";
})(GetAssignPrivateIpAddressesActionEnum || (GetAssignPrivateIpAddressesActionEnum = {}));
export var GetAssignPrivateIpAddressesVersionEnum;
(function (GetAssignPrivateIpAddressesVersionEnum) {
    GetAssignPrivateIpAddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssignPrivateIpAddressesVersionEnum || (GetAssignPrivateIpAddressesVersionEnum = {}));
var GetAssignPrivateIpAddressesQueryParams = /** @class */ (function (_super) {
    __extends(GetAssignPrivateIpAddressesQueryParams, _super);
    function GetAssignPrivateIpAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowReassignment" }),
        __metadata("design:type", Boolean)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "allowReassignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" }),
        __metadata("design:type", Array)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "ipv4Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4PrefixCount" }),
        __metadata("design:type", Number)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "ipv4PrefixCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" }),
        __metadata("design:type", Array)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecondaryPrivateIpAddressCount" }),
        __metadata("design:type", Number)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "secondaryPrivateIpAddressCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesQueryParams.prototype, "version", void 0);
    return GetAssignPrivateIpAddressesQueryParams;
}(SpeakeasyBase));
export { GetAssignPrivateIpAddressesQueryParams };
var GetAssignPrivateIpAddressesHeaders = /** @class */ (function (_super) {
    __extends(GetAssignPrivateIpAddressesHeaders, _super);
    function GetAssignPrivateIpAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssignPrivateIpAddressesHeaders;
}(SpeakeasyBase));
export { GetAssignPrivateIpAddressesHeaders };
var GetAssignPrivateIpAddressesRequest = /** @class */ (function (_super) {
    __extends(GetAssignPrivateIpAddressesRequest, _super);
    function GetAssignPrivateIpAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssignPrivateIpAddressesQueryParams)
    ], GetAssignPrivateIpAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssignPrivateIpAddressesHeaders)
    ], GetAssignPrivateIpAddressesRequest.prototype, "headers", void 0);
    return GetAssignPrivateIpAddressesRequest;
}(SpeakeasyBase));
export { GetAssignPrivateIpAddressesRequest };
var GetAssignPrivateIpAddressesResponse = /** @class */ (function (_super) {
    __extends(GetAssignPrivateIpAddressesResponse, _super);
    function GetAssignPrivateIpAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssignPrivateIpAddressesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssignPrivateIpAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssignPrivateIpAddressesResponse.prototype, "statusCode", void 0);
    return GetAssignPrivateIpAddressesResponse;
}(SpeakeasyBase));
export { GetAssignPrivateIpAddressesResponse };
