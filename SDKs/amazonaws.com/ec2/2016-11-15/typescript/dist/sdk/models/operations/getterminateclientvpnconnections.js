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
export var GetTerminateClientVpnConnectionsActionEnum;
(function (GetTerminateClientVpnConnectionsActionEnum) {
    GetTerminateClientVpnConnectionsActionEnum["TerminateClientVpnConnections"] = "TerminateClientVpnConnections";
})(GetTerminateClientVpnConnectionsActionEnum || (GetTerminateClientVpnConnectionsActionEnum = {}));
export var GetTerminateClientVpnConnectionsVersionEnum;
(function (GetTerminateClientVpnConnectionsVersionEnum) {
    GetTerminateClientVpnConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetTerminateClientVpnConnectionsVersionEnum || (GetTerminateClientVpnConnectionsVersionEnum = {}));
var GetTerminateClientVpnConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTerminateClientVpnConnectionsQueryParams, _super);
    function GetTerminateClientVpnConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionId" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "connectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Username" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsQueryParams.prototype, "version", void 0);
    return GetTerminateClientVpnConnectionsQueryParams;
}(SpeakeasyBase));
export { GetTerminateClientVpnConnectionsQueryParams };
var GetTerminateClientVpnConnectionsHeaders = /** @class */ (function (_super) {
    __extends(GetTerminateClientVpnConnectionsHeaders, _super);
    function GetTerminateClientVpnConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTerminateClientVpnConnectionsHeaders;
}(SpeakeasyBase));
export { GetTerminateClientVpnConnectionsHeaders };
var GetTerminateClientVpnConnectionsRequest = /** @class */ (function (_super) {
    __extends(GetTerminateClientVpnConnectionsRequest, _super);
    function GetTerminateClientVpnConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTerminateClientVpnConnectionsQueryParams)
    ], GetTerminateClientVpnConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTerminateClientVpnConnectionsHeaders)
    ], GetTerminateClientVpnConnectionsRequest.prototype, "headers", void 0);
    return GetTerminateClientVpnConnectionsRequest;
}(SpeakeasyBase));
export { GetTerminateClientVpnConnectionsRequest };
var GetTerminateClientVpnConnectionsResponse = /** @class */ (function (_super) {
    __extends(GetTerminateClientVpnConnectionsResponse, _super);
    function GetTerminateClientVpnConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTerminateClientVpnConnectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTerminateClientVpnConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTerminateClientVpnConnectionsResponse.prototype, "statusCode", void 0);
    return GetTerminateClientVpnConnectionsResponse;
}(SpeakeasyBase));
export { GetTerminateClientVpnConnectionsResponse };
