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
export var GetAssociateTransitGatewayMulticastDomainActionEnum;
(function (GetAssociateTransitGatewayMulticastDomainActionEnum) {
    GetAssociateTransitGatewayMulticastDomainActionEnum["AssociateTransitGatewayMulticastDomain"] = "AssociateTransitGatewayMulticastDomain";
})(GetAssociateTransitGatewayMulticastDomainActionEnum || (GetAssociateTransitGatewayMulticastDomainActionEnum = {}));
export var GetAssociateTransitGatewayMulticastDomainVersionEnum;
(function (GetAssociateTransitGatewayMulticastDomainVersionEnum) {
    GetAssociateTransitGatewayMulticastDomainVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateTransitGatewayMulticastDomainVersionEnum || (GetAssociateTransitGatewayMulticastDomainVersionEnum = {}));
var GetAssociateTransitGatewayMulticastDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayMulticastDomainQueryParams, _super);
    function GetAssociateTransitGatewayMulticastDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" }),
        __metadata("design:type", Array)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "subnetIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainQueryParams.prototype, "version", void 0);
    return GetAssociateTransitGatewayMulticastDomainQueryParams;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayMulticastDomainQueryParams };
var GetAssociateTransitGatewayMulticastDomainHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayMulticastDomainHeaders, _super);
    function GetAssociateTransitGatewayMulticastDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateTransitGatewayMulticastDomainHeaders;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayMulticastDomainHeaders };
var GetAssociateTransitGatewayMulticastDomainRequest = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayMulticastDomainRequest, _super);
    function GetAssociateTransitGatewayMulticastDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateTransitGatewayMulticastDomainQueryParams)
    ], GetAssociateTransitGatewayMulticastDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateTransitGatewayMulticastDomainHeaders)
    ], GetAssociateTransitGatewayMulticastDomainRequest.prototype, "headers", void 0);
    return GetAssociateTransitGatewayMulticastDomainRequest;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayMulticastDomainRequest };
var GetAssociateTransitGatewayMulticastDomainResponse = /** @class */ (function (_super) {
    __extends(GetAssociateTransitGatewayMulticastDomainResponse, _super);
    function GetAssociateTransitGatewayMulticastDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateTransitGatewayMulticastDomainResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateTransitGatewayMulticastDomainResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateTransitGatewayMulticastDomainResponse.prototype, "statusCode", void 0);
    return GetAssociateTransitGatewayMulticastDomainResponse;
}(SpeakeasyBase));
export { GetAssociateTransitGatewayMulticastDomainResponse };
