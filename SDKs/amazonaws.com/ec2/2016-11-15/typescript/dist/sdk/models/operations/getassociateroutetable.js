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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetAssociateRouteTableActionEnum;
(function (GetAssociateRouteTableActionEnum) {
    GetAssociateRouteTableActionEnum["AssociateRouteTable"] = "AssociateRouteTable";
})(GetAssociateRouteTableActionEnum || (GetAssociateRouteTableActionEnum = {}));
export var GetAssociateRouteTableVersionEnum;
(function (GetAssociateRouteTableVersionEnum) {
    GetAssociateRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateRouteTableVersionEnum || (GetAssociateRouteTableVersionEnum = {}));
var GetAssociateRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateRouteTableQueryParams, _super);
    function GetAssociateRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateRouteTableQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GatewayId" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubnetId" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableQueryParams.prototype, "subnetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableQueryParams.prototype, "version", void 0);
    return GetAssociateRouteTableQueryParams;
}(SpeakeasyBase));
export { GetAssociateRouteTableQueryParams };
var GetAssociateRouteTableHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateRouteTableHeaders, _super);
    function GetAssociateRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateRouteTableHeaders;
}(SpeakeasyBase));
export { GetAssociateRouteTableHeaders };
var GetAssociateRouteTableRequest = /** @class */ (function (_super) {
    __extends(GetAssociateRouteTableRequest, _super);
    function GetAssociateRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateRouteTableQueryParams)
    ], GetAssociateRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateRouteTableHeaders)
    ], GetAssociateRouteTableRequest.prototype, "headers", void 0);
    return GetAssociateRouteTableRequest;
}(SpeakeasyBase));
export { GetAssociateRouteTableRequest };
var GetAssociateRouteTableResponse = /** @class */ (function (_super) {
    __extends(GetAssociateRouteTableResponse, _super);
    function GetAssociateRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateRouteTableResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateRouteTableResponse.prototype, "statusCode", void 0);
    return GetAssociateRouteTableResponse;
}(SpeakeasyBase));
export { GetAssociateRouteTableResponse };
