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
export var GetRegisterTransitGatewayMulticastGroupSourcesActionEnum;
(function (GetRegisterTransitGatewayMulticastGroupSourcesActionEnum) {
    GetRegisterTransitGatewayMulticastGroupSourcesActionEnum["RegisterTransitGatewayMulticastGroupSources"] = "RegisterTransitGatewayMulticastGroupSources";
})(GetRegisterTransitGatewayMulticastGroupSourcesActionEnum || (GetRegisterTransitGatewayMulticastGroupSourcesActionEnum = {}));
export var GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
(function (GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum) {
    GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum || (GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum = {}));
var GetRegisterTransitGatewayMulticastGroupSourcesQueryParams = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupSourcesQueryParams, _super);
    function GetRegisterTransitGatewayMulticastGroupSourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "groupIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" }),
        __metadata("design:type", Array)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "networkInterfaceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "version", void 0);
    return GetRegisterTransitGatewayMulticastGroupSourcesQueryParams;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupSourcesQueryParams };
var GetRegisterTransitGatewayMulticastGroupSourcesHeaders = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupSourcesHeaders, _super);
    function GetRegisterTransitGatewayMulticastGroupSourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRegisterTransitGatewayMulticastGroupSourcesHeaders;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupSourcesHeaders };
var GetRegisterTransitGatewayMulticastGroupSourcesRequest = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupSourcesRequest, _super);
    function GetRegisterTransitGatewayMulticastGroupSourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRegisterTransitGatewayMulticastGroupSourcesQueryParams)
    ], GetRegisterTransitGatewayMulticastGroupSourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRegisterTransitGatewayMulticastGroupSourcesHeaders)
    ], GetRegisterTransitGatewayMulticastGroupSourcesRequest.prototype, "headers", void 0);
    return GetRegisterTransitGatewayMulticastGroupSourcesRequest;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupSourcesRequest };
var GetRegisterTransitGatewayMulticastGroupSourcesResponse = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupSourcesResponse, _super);
    function GetRegisterTransitGatewayMulticastGroupSourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "statusCode", void 0);
    return GetRegisterTransitGatewayMulticastGroupSourcesResponse;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupSourcesResponse };
