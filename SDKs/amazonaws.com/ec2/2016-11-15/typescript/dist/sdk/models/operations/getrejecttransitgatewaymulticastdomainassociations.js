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
export var GetRejectTransitGatewayMulticastDomainAssociationsActionEnum;
(function (GetRejectTransitGatewayMulticastDomainAssociationsActionEnum) {
    GetRejectTransitGatewayMulticastDomainAssociationsActionEnum["RejectTransitGatewayMulticastDomainAssociations"] = "RejectTransitGatewayMulticastDomainAssociations";
})(GetRejectTransitGatewayMulticastDomainAssociationsActionEnum || (GetRejectTransitGatewayMulticastDomainAssociationsActionEnum = {}));
export var GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum;
(function (GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum) {
    GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum || (GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum = {}));
var GetRejectTransitGatewayMulticastDomainAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayMulticastDomainAssociationsQueryParams, _super);
    function GetRejectTransitGatewayMulticastDomainAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" }),
        __metadata("design:type", Array)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "subnetIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "version", void 0);
    return GetRejectTransitGatewayMulticastDomainAssociationsQueryParams;
}(SpeakeasyBase));
export { GetRejectTransitGatewayMulticastDomainAssociationsQueryParams };
var GetRejectTransitGatewayMulticastDomainAssociationsHeaders = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayMulticastDomainAssociationsHeaders, _super);
    function GetRejectTransitGatewayMulticastDomainAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRejectTransitGatewayMulticastDomainAssociationsHeaders;
}(SpeakeasyBase));
export { GetRejectTransitGatewayMulticastDomainAssociationsHeaders };
var GetRejectTransitGatewayMulticastDomainAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayMulticastDomainAssociationsRequest, _super);
    function GetRejectTransitGatewayMulticastDomainAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRejectTransitGatewayMulticastDomainAssociationsQueryParams)
    ], GetRejectTransitGatewayMulticastDomainAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRejectTransitGatewayMulticastDomainAssociationsHeaders)
    ], GetRejectTransitGatewayMulticastDomainAssociationsRequest.prototype, "headers", void 0);
    return GetRejectTransitGatewayMulticastDomainAssociationsRequest;
}(SpeakeasyBase));
export { GetRejectTransitGatewayMulticastDomainAssociationsRequest };
var GetRejectTransitGatewayMulticastDomainAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayMulticastDomainAssociationsResponse, _super);
    function GetRejectTransitGatewayMulticastDomainAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRejectTransitGatewayMulticastDomainAssociationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayMulticastDomainAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRejectTransitGatewayMulticastDomainAssociationsResponse.prototype, "statusCode", void 0);
    return GetRejectTransitGatewayMulticastDomainAssociationsResponse;
}(SpeakeasyBase));
export { GetRejectTransitGatewayMulticastDomainAssociationsResponse };
