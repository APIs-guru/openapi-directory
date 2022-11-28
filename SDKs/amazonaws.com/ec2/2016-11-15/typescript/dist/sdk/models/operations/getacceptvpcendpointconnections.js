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
export var GetAcceptVpcEndpointConnectionsActionEnum;
(function (GetAcceptVpcEndpointConnectionsActionEnum) {
    GetAcceptVpcEndpointConnectionsActionEnum["AcceptVpcEndpointConnections"] = "AcceptVpcEndpointConnections";
})(GetAcceptVpcEndpointConnectionsActionEnum || (GetAcceptVpcEndpointConnectionsActionEnum = {}));
export var GetAcceptVpcEndpointConnectionsVersionEnum;
(function (GetAcceptVpcEndpointConnectionsVersionEnum) {
    GetAcceptVpcEndpointConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAcceptVpcEndpointConnectionsVersionEnum || (GetAcceptVpcEndpointConnectionsVersionEnum = {}));
var GetAcceptVpcEndpointConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAcceptVpcEndpointConnectionsQueryParams, _super);
    function GetAcceptVpcEndpointConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAcceptVpcEndpointConnectionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", Array)
    ], GetAcceptVpcEndpointConnectionsQueryParams.prototype, "vpcEndpointId", void 0);
    return GetAcceptVpcEndpointConnectionsQueryParams;
}(SpeakeasyBase));
export { GetAcceptVpcEndpointConnectionsQueryParams };
var GetAcceptVpcEndpointConnectionsHeaders = /** @class */ (function (_super) {
    __extends(GetAcceptVpcEndpointConnectionsHeaders, _super);
    function GetAcceptVpcEndpointConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAcceptVpcEndpointConnectionsHeaders;
}(SpeakeasyBase));
export { GetAcceptVpcEndpointConnectionsHeaders };
var GetAcceptVpcEndpointConnectionsRequest = /** @class */ (function (_super) {
    __extends(GetAcceptVpcEndpointConnectionsRequest, _super);
    function GetAcceptVpcEndpointConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAcceptVpcEndpointConnectionsQueryParams)
    ], GetAcceptVpcEndpointConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAcceptVpcEndpointConnectionsHeaders)
    ], GetAcceptVpcEndpointConnectionsRequest.prototype, "headers", void 0);
    return GetAcceptVpcEndpointConnectionsRequest;
}(SpeakeasyBase));
export { GetAcceptVpcEndpointConnectionsRequest };
var GetAcceptVpcEndpointConnectionsResponse = /** @class */ (function (_super) {
    __extends(GetAcceptVpcEndpointConnectionsResponse, _super);
    function GetAcceptVpcEndpointConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAcceptVpcEndpointConnectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAcceptVpcEndpointConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAcceptVpcEndpointConnectionsResponse.prototype, "statusCode", void 0);
    return GetAcceptVpcEndpointConnectionsResponse;
}(SpeakeasyBase));
export { GetAcceptVpcEndpointConnectionsResponse };
