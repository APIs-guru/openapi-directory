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
export var GetCreateTransitGatewayPrefixListReferenceActionEnum;
(function (GetCreateTransitGatewayPrefixListReferenceActionEnum) {
    GetCreateTransitGatewayPrefixListReferenceActionEnum["CreateTransitGatewayPrefixListReference"] = "CreateTransitGatewayPrefixListReference";
})(GetCreateTransitGatewayPrefixListReferenceActionEnum || (GetCreateTransitGatewayPrefixListReferenceActionEnum = {}));
export var GetCreateTransitGatewayPrefixListReferenceVersionEnum;
(function (GetCreateTransitGatewayPrefixListReferenceVersionEnum) {
    GetCreateTransitGatewayPrefixListReferenceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateTransitGatewayPrefixListReferenceVersionEnum || (GetCreateTransitGatewayPrefixListReferenceVersionEnum = {}));
var GetCreateTransitGatewayPrefixListReferenceQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateTransitGatewayPrefixListReferenceQueryParams, _super);
    function GetCreateTransitGatewayPrefixListReferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Blackhole" }),
        __metadata("design:type", Boolean)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "blackhole", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "prefixListId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "version", void 0);
    return GetCreateTransitGatewayPrefixListReferenceQueryParams;
}(SpeakeasyBase));
export { GetCreateTransitGatewayPrefixListReferenceQueryParams };
var GetCreateTransitGatewayPrefixListReferenceHeaders = /** @class */ (function (_super) {
    __extends(GetCreateTransitGatewayPrefixListReferenceHeaders, _super);
    function GetCreateTransitGatewayPrefixListReferenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateTransitGatewayPrefixListReferenceHeaders;
}(SpeakeasyBase));
export { GetCreateTransitGatewayPrefixListReferenceHeaders };
var GetCreateTransitGatewayPrefixListReferenceRequest = /** @class */ (function (_super) {
    __extends(GetCreateTransitGatewayPrefixListReferenceRequest, _super);
    function GetCreateTransitGatewayPrefixListReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTransitGatewayPrefixListReferenceQueryParams)
    ], GetCreateTransitGatewayPrefixListReferenceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTransitGatewayPrefixListReferenceHeaders)
    ], GetCreateTransitGatewayPrefixListReferenceRequest.prototype, "headers", void 0);
    return GetCreateTransitGatewayPrefixListReferenceRequest;
}(SpeakeasyBase));
export { GetCreateTransitGatewayPrefixListReferenceRequest };
var GetCreateTransitGatewayPrefixListReferenceResponse = /** @class */ (function (_super) {
    __extends(GetCreateTransitGatewayPrefixListReferenceResponse, _super);
    function GetCreateTransitGatewayPrefixListReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateTransitGatewayPrefixListReferenceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateTransitGatewayPrefixListReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateTransitGatewayPrefixListReferenceResponse.prototype, "statusCode", void 0);
    return GetCreateTransitGatewayPrefixListReferenceResponse;
}(SpeakeasyBase));
export { GetCreateTransitGatewayPrefixListReferenceResponse };
