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
export var GetModifyHostsActionEnum;
(function (GetModifyHostsActionEnum) {
    GetModifyHostsActionEnum["ModifyHosts"] = "ModifyHosts";
})(GetModifyHostsActionEnum || (GetModifyHostsActionEnum = {}));
export var GetModifyHostsAutoPlacementEnum;
(function (GetModifyHostsAutoPlacementEnum) {
    GetModifyHostsAutoPlacementEnum["On"] = "on";
    GetModifyHostsAutoPlacementEnum["Off"] = "off";
})(GetModifyHostsAutoPlacementEnum || (GetModifyHostsAutoPlacementEnum = {}));
export var GetModifyHostsHostRecoveryEnum;
(function (GetModifyHostsHostRecoveryEnum) {
    GetModifyHostsHostRecoveryEnum["On"] = "on";
    GetModifyHostsHostRecoveryEnum["Off"] = "off";
})(GetModifyHostsHostRecoveryEnum || (GetModifyHostsHostRecoveryEnum = {}));
export var GetModifyHostsVersionEnum;
(function (GetModifyHostsVersionEnum) {
    GetModifyHostsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyHostsVersionEnum || (GetModifyHostsVersionEnum = {}));
var GetModifyHostsQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyHostsQueryParams, _super);
    function GetModifyHostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoPlacement" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "autoPlacement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostId" }),
        __metadata("design:type", Array)
    ], GetModifyHostsQueryParams.prototype, "hostId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostRecovery" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "hostRecovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "instanceFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceType" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyHostsQueryParams.prototype, "version", void 0);
    return GetModifyHostsQueryParams;
}(SpeakeasyBase));
export { GetModifyHostsQueryParams };
var GetModifyHostsHeaders = /** @class */ (function (_super) {
    __extends(GetModifyHostsHeaders, _super);
    function GetModifyHostsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyHostsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyHostsHeaders;
}(SpeakeasyBase));
export { GetModifyHostsHeaders };
var GetModifyHostsRequest = /** @class */ (function (_super) {
    __extends(GetModifyHostsRequest, _super);
    function GetModifyHostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyHostsQueryParams)
    ], GetModifyHostsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyHostsHeaders)
    ], GetModifyHostsRequest.prototype, "headers", void 0);
    return GetModifyHostsRequest;
}(SpeakeasyBase));
export { GetModifyHostsRequest };
var GetModifyHostsResponse = /** @class */ (function (_super) {
    __extends(GetModifyHostsResponse, _super);
    function GetModifyHostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyHostsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyHostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyHostsResponse.prototype, "statusCode", void 0);
    return GetModifyHostsResponse;
}(SpeakeasyBase));
export { GetModifyHostsResponse };
