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
export var GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum;
(function (GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum) {
    GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum["DeleteLocalGatewayRouteTableVpcAssociation"] = "DeleteLocalGatewayRouteTableVpcAssociation";
})(GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum || (GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum = {}));
export var GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum;
(function (GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum) {
    GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum || (GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum = {}));
var GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams, _super);
    function GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayRouteTableVpcAssociationId" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "localGatewayRouteTableVpcAssociationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "version", void 0);
    return GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams };
var GetDeleteLocalGatewayRouteTableVpcAssociationHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteTableVpcAssociationHeaders, _super);
    function GetDeleteLocalGatewayRouteTableVpcAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLocalGatewayRouteTableVpcAssociationHeaders;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteTableVpcAssociationHeaders };
var GetDeleteLocalGatewayRouteTableVpcAssociationRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteTableVpcAssociationRequest, _super);
    function GetDeleteLocalGatewayRouteTableVpcAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLocalGatewayRouteTableVpcAssociationHeaders)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationRequest.prototype, "headers", void 0);
    return GetDeleteLocalGatewayRouteTableVpcAssociationRequest;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteTableVpcAssociationRequest };
var GetDeleteLocalGatewayRouteTableVpcAssociationResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLocalGatewayRouteTableVpcAssociationResponse, _super);
    function GetDeleteLocalGatewayRouteTableVpcAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLocalGatewayRouteTableVpcAssociationResponse.prototype, "statusCode", void 0);
    return GetDeleteLocalGatewayRouteTableVpcAssociationResponse;
}(SpeakeasyBase));
export { GetDeleteLocalGatewayRouteTableVpcAssociationResponse };
