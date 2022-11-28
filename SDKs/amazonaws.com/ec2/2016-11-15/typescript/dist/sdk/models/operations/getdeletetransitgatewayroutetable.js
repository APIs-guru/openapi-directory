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
export var GetDeleteTransitGatewayRouteTableActionEnum;
(function (GetDeleteTransitGatewayRouteTableActionEnum) {
    GetDeleteTransitGatewayRouteTableActionEnum["DeleteTransitGatewayRouteTable"] = "DeleteTransitGatewayRouteTable";
})(GetDeleteTransitGatewayRouteTableActionEnum || (GetDeleteTransitGatewayRouteTableActionEnum = {}));
export var GetDeleteTransitGatewayRouteTableVersionEnum;
(function (GetDeleteTransitGatewayRouteTableVersionEnum) {
    GetDeleteTransitGatewayRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayRouteTableVersionEnum || (GetDeleteTransitGatewayRouteTableVersionEnum = {}));
var GetDeleteTransitGatewayRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteTableQueryParams, _super);
    function GetDeleteTransitGatewayRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayRouteTableQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayRouteTableQueryParams;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteTableQueryParams };
var GetDeleteTransitGatewayRouteTableHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteTableHeaders, _super);
    function GetDeleteTransitGatewayRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayRouteTableHeaders;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteTableHeaders };
var GetDeleteTransitGatewayRouteTableRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteTableRequest, _super);
    function GetDeleteTransitGatewayRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteTransitGatewayRouteTableQueryParams)
    ], GetDeleteTransitGatewayRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteTransitGatewayRouteTableHeaders)
    ], GetDeleteTransitGatewayRouteTableRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayRouteTableRequest;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteTableRequest };
var GetDeleteTransitGatewayRouteTableResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayRouteTableResponse, _super);
    function GetDeleteTransitGatewayRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayRouteTableResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayRouteTableResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayRouteTableResponse;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayRouteTableResponse };
