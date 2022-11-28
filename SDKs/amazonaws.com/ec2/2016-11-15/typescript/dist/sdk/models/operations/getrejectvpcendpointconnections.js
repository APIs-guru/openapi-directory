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
export var GetRejectVpcEndpointConnectionsActionEnum;
(function (GetRejectVpcEndpointConnectionsActionEnum) {
    GetRejectVpcEndpointConnectionsActionEnum["RejectVpcEndpointConnections"] = "RejectVpcEndpointConnections";
})(GetRejectVpcEndpointConnectionsActionEnum || (GetRejectVpcEndpointConnectionsActionEnum = {}));
export var GetRejectVpcEndpointConnectionsVersionEnum;
(function (GetRejectVpcEndpointConnectionsVersionEnum) {
    GetRejectVpcEndpointConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRejectVpcEndpointConnectionsVersionEnum || (GetRejectVpcEndpointConnectionsVersionEnum = {}));
var GetRejectVpcEndpointConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(GetRejectVpcEndpointConnectionsQueryParams, _super);
    function GetRejectVpcEndpointConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRejectVpcEndpointConnectionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", Array)
    ], GetRejectVpcEndpointConnectionsQueryParams.prototype, "vpcEndpointId", void 0);
    return GetRejectVpcEndpointConnectionsQueryParams;
}(SpeakeasyBase));
export { GetRejectVpcEndpointConnectionsQueryParams };
var GetRejectVpcEndpointConnectionsHeaders = /** @class */ (function (_super) {
    __extends(GetRejectVpcEndpointConnectionsHeaders, _super);
    function GetRejectVpcEndpointConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRejectVpcEndpointConnectionsHeaders;
}(SpeakeasyBase));
export { GetRejectVpcEndpointConnectionsHeaders };
var GetRejectVpcEndpointConnectionsRequest = /** @class */ (function (_super) {
    __extends(GetRejectVpcEndpointConnectionsRequest, _super);
    function GetRejectVpcEndpointConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRejectVpcEndpointConnectionsQueryParams)
    ], GetRejectVpcEndpointConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRejectVpcEndpointConnectionsHeaders)
    ], GetRejectVpcEndpointConnectionsRequest.prototype, "headers", void 0);
    return GetRejectVpcEndpointConnectionsRequest;
}(SpeakeasyBase));
export { GetRejectVpcEndpointConnectionsRequest };
var GetRejectVpcEndpointConnectionsResponse = /** @class */ (function (_super) {
    __extends(GetRejectVpcEndpointConnectionsResponse, _super);
    function GetRejectVpcEndpointConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRejectVpcEndpointConnectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRejectVpcEndpointConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRejectVpcEndpointConnectionsResponse.prototype, "statusCode", void 0);
    return GetRejectVpcEndpointConnectionsResponse;
}(SpeakeasyBase));
export { GetRejectVpcEndpointConnectionsResponse };
