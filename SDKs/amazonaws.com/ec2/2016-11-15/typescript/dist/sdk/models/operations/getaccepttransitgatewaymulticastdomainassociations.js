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
export var GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
(function (GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum) {
    GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum["AcceptTransitGatewayMulticastDomainAssociations"] = "AcceptTransitGatewayMulticastDomainAssociations";
})(GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum || (GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum = {}));
export var GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
(function (GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum) {
    GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum || (GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum = {}));
var GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams, _super);
    function GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" }),
        __metadata("design:type", Array)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "subnetIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams.prototype, "version", void 0);
    return GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams };
var GetAcceptTransitGatewayMulticastDomainAssociationsHeaders = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayMulticastDomainAssociationsHeaders, _super);
    function GetAcceptTransitGatewayMulticastDomainAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAcceptTransitGatewayMulticastDomainAssociationsHeaders;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayMulticastDomainAssociationsHeaders };
var GetAcceptTransitGatewayMulticastDomainAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayMulticastDomainAssociationsRequest, _super);
    function GetAcceptTransitGatewayMulticastDomainAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAcceptTransitGatewayMulticastDomainAssociationsHeaders)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsRequest.prototype, "headers", void 0);
    return GetAcceptTransitGatewayMulticastDomainAssociationsRequest;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayMulticastDomainAssociationsRequest };
var GetAcceptTransitGatewayMulticastDomainAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayMulticastDomainAssociationsResponse, _super);
    function GetAcceptTransitGatewayMulticastDomainAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAcceptTransitGatewayMulticastDomainAssociationsResponse.prototype, "statusCode", void 0);
    return GetAcceptTransitGatewayMulticastDomainAssociationsResponse;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayMulticastDomainAssociationsResponse };
