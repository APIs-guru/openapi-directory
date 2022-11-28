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
export var GetAssociateTransitGatewayRouteTableActionEnum;
(function (GetAssociateTransitGatewayRouteTableActionEnum) {
    GetAssociateTransitGatewayRouteTableActionEnum["AssociateTransitGatewayRouteTable"] = "AssociateTransitGatewayRouteTable";
})(GetAssociateTransitGatewayRouteTableActionEnum || (GetAssociateTransitGatewayRouteTableActionEnum = {}));
export var GetAssociateTransitGatewayRouteTableVersionEnum;
(function (GetAssociateTransitGatewayRouteTableVersionEnum) {
    GetAssociateTransitGatewayRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateTransitGatewayRouteTableVersionEnum || (GetAssociateTransitGatewayRouteTableVersionEnum = {}));
var GetAssociateTransitGatewayRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayRouteTableQueryParams, _super);
    function GetAssociateTransitGatewayRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateTransitGatewayRouteTableQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableQueryParams.prototype, "version", void 0);
    return GetAssociateTransitGatewayRouteTableQueryParams;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayRouteTableQueryParams };
var GetAssociateTransitGatewayRouteTableHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayRouteTableHeaders, _super);
    function GetAssociateTransitGatewayRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateTransitGatewayRouteTableHeaders;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayRouteTableHeaders };
var GetAssociateTransitGatewayRouteTableRequest = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayRouteTableRequest, _super);
    function GetAssociateTransitGatewayRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssociateTransitGatewayRouteTableQueryParams)
    ], GetAssociateTransitGatewayRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssociateTransitGatewayRouteTableHeaders)
    ], GetAssociateTransitGatewayRouteTableRequest.prototype, "headers", void 0);
    return GetAssociateTransitGatewayRouteTableRequest;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayRouteTableRequest };
var GetAssociateTransitGatewayRouteTableResponse = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayRouteTableResponse, _super);
    function GetAssociateTransitGatewayRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateTransitGatewayRouteTableResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssociateTransitGatewayRouteTableResponse.prototype, "statusCode", void 0);
    return GetAssociateTransitGatewayRouteTableResponse;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayRouteTableResponse };
