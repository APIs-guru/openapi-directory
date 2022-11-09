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
export var GetDisableTransitGatewayRouteTablePropagationActionEnum;
(function (GetDisableTransitGatewayRouteTablePropagationActionEnum) {
    GetDisableTransitGatewayRouteTablePropagationActionEnum["DisableTransitGatewayRouteTablePropagation"] = "DisableTransitGatewayRouteTablePropagation";
})(GetDisableTransitGatewayRouteTablePropagationActionEnum || (GetDisableTransitGatewayRouteTablePropagationActionEnum = {}));
export var GetDisableTransitGatewayRouteTablePropagationVersionEnum;
(function (GetDisableTransitGatewayRouteTablePropagationVersionEnum) {
    GetDisableTransitGatewayRouteTablePropagationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableTransitGatewayRouteTablePropagationVersionEnum || (GetDisableTransitGatewayRouteTablePropagationVersionEnum = {}));
var GetDisableTransitGatewayRouteTablePropagationQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableTransitGatewayRouteTablePropagationQueryParams, _super);
    function GetDisableTransitGatewayRouteTablePropagationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableTransitGatewayRouteTablePropagationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationQueryParams.prototype, "version", void 0);
    return GetDisableTransitGatewayRouteTablePropagationQueryParams;
}(SpeakeasyBase));
export { GetDisableTransitGatewayRouteTablePropagationQueryParams };
var GetDisableTransitGatewayRouteTablePropagationHeaders = /** @class */ (function (_super) {
    __extends(GetDisableTransitGatewayRouteTablePropagationHeaders, _super);
    function GetDisableTransitGatewayRouteTablePropagationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableTransitGatewayRouteTablePropagationHeaders;
}(SpeakeasyBase));
export { GetDisableTransitGatewayRouteTablePropagationHeaders };
var GetDisableTransitGatewayRouteTablePropagationRequest = /** @class */ (function (_super) {
    __extends(GetDisableTransitGatewayRouteTablePropagationRequest, _super);
    function GetDisableTransitGatewayRouteTablePropagationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisableTransitGatewayRouteTablePropagationQueryParams)
    ], GetDisableTransitGatewayRouteTablePropagationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisableTransitGatewayRouteTablePropagationHeaders)
    ], GetDisableTransitGatewayRouteTablePropagationRequest.prototype, "headers", void 0);
    return GetDisableTransitGatewayRouteTablePropagationRequest;
}(SpeakeasyBase));
export { GetDisableTransitGatewayRouteTablePropagationRequest };
var GetDisableTransitGatewayRouteTablePropagationResponse = /** @class */ (function (_super) {
    __extends(GetDisableTransitGatewayRouteTablePropagationResponse, _super);
    function GetDisableTransitGatewayRouteTablePropagationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableTransitGatewayRouteTablePropagationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDisableTransitGatewayRouteTablePropagationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDisableTransitGatewayRouteTablePropagationResponse.prototype, "statusCode", void 0);
    return GetDisableTransitGatewayRouteTablePropagationResponse;
}(SpeakeasyBase));
export { GetDisableTransitGatewayRouteTablePropagationResponse };
