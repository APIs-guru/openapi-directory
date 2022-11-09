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
import * as shared from "../shared";
export var GetModifyTransitGatewayActionEnum;
(function (GetModifyTransitGatewayActionEnum) {
    GetModifyTransitGatewayActionEnum["ModifyTransitGateway"] = "ModifyTransitGateway";
})(GetModifyTransitGatewayActionEnum || (GetModifyTransitGatewayActionEnum = {}));
// GetModifyTransitGatewayOptions
/**
 * The transit gateway options.
**/
var GetModifyTransitGatewayOptions = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayOptions, _super);
    function GetModifyTransitGatewayOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=AddTransitGatewayCidrBlocks" }),
        __metadata("design:type", Array)
    ], GetModifyTransitGatewayOptions.prototype, "addTransitGatewayCidrBlocks", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=AssociationDefaultRouteTableId" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "associationDefaultRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=AutoAcceptSharedAttachments" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "autoAcceptSharedAttachments", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=DefaultRouteTableAssociation" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "defaultRouteTableAssociation", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=DefaultRouteTablePropagation" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "defaultRouteTablePropagation", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=DnsSupport" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "dnsSupport", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=PropagationDefaultRouteTableId" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "propagationDefaultRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=RemoveTransitGatewayCidrBlocks" }),
        __metadata("design:type", Array)
    ], GetModifyTransitGatewayOptions.prototype, "removeTransitGatewayCidrBlocks", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=VpnEcmpSupport" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayOptions.prototype, "vpnEcmpSupport", void 0);
    return GetModifyTransitGatewayOptions;
}(SpeakeasyBase));
export { GetModifyTransitGatewayOptions };
export var GetModifyTransitGatewayVersionEnum;
(function (GetModifyTransitGatewayVersionEnum) {
    GetModifyTransitGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyTransitGatewayVersionEnum || (GetModifyTransitGatewayVersionEnum = {}));
var GetModifyTransitGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayQueryParams, _super);
    function GetModifyTransitGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyTransitGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Options" }),
        __metadata("design:type", GetModifyTransitGatewayOptions)
    ], GetModifyTransitGatewayQueryParams.prototype, "options", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayQueryParams.prototype, "transitGatewayId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayQueryParams.prototype, "version", void 0);
    return GetModifyTransitGatewayQueryParams;
}(SpeakeasyBase));
export { GetModifyTransitGatewayQueryParams };
var GetModifyTransitGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayHeaders, _super);
    function GetModifyTransitGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyTransitGatewayHeaders;
}(SpeakeasyBase));
export { GetModifyTransitGatewayHeaders };
var GetModifyTransitGatewayRequest = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayRequest, _super);
    function GetModifyTransitGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTransitGatewayQueryParams)
    ], GetModifyTransitGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTransitGatewayHeaders)
    ], GetModifyTransitGatewayRequest.prototype, "headers", void 0);
    return GetModifyTransitGatewayRequest;
}(SpeakeasyBase));
export { GetModifyTransitGatewayRequest };
var GetModifyTransitGatewayResponse = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayResponse, _super);
    function GetModifyTransitGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyTransitGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyTransitGatewayResponse.prototype, "statusCode", void 0);
    return GetModifyTransitGatewayResponse;
}(SpeakeasyBase));
export { GetModifyTransitGatewayResponse };
