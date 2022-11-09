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
export var GetDeleteTransitGatewayMulticastDomainActionEnum;
(function (GetDeleteTransitGatewayMulticastDomainActionEnum) {
    GetDeleteTransitGatewayMulticastDomainActionEnum["DeleteTransitGatewayMulticastDomain"] = "DeleteTransitGatewayMulticastDomain";
})(GetDeleteTransitGatewayMulticastDomainActionEnum || (GetDeleteTransitGatewayMulticastDomainActionEnum = {}));
export var GetDeleteTransitGatewayMulticastDomainVersionEnum;
(function (GetDeleteTransitGatewayMulticastDomainVersionEnum) {
    GetDeleteTransitGatewayMulticastDomainVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayMulticastDomainVersionEnum || (GetDeleteTransitGatewayMulticastDomainVersionEnum = {}));
var GetDeleteTransitGatewayMulticastDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainQueryParams, _super);
    function GetDeleteTransitGatewayMulticastDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayMulticastDomainQueryParams;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayMulticastDomainQueryParams };
var GetDeleteTransitGatewayMulticastDomainHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainHeaders, _super);
    function GetDeleteTransitGatewayMulticastDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayMulticastDomainHeaders;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayMulticastDomainHeaders };
var GetDeleteTransitGatewayMulticastDomainRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainRequest, _super);
    function GetDeleteTransitGatewayMulticastDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayMulticastDomainQueryParams)
    ], GetDeleteTransitGatewayMulticastDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayMulticastDomainHeaders)
    ], GetDeleteTransitGatewayMulticastDomainRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayMulticastDomainRequest;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayMulticastDomainRequest };
var GetDeleteTransitGatewayMulticastDomainResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainResponse, _super);
    function GetDeleteTransitGatewayMulticastDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayMulticastDomainResponse;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayMulticastDomainResponse };
