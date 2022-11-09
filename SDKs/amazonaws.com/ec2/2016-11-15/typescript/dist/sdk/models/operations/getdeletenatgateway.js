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
export var GetDeleteNatGatewayActionEnum;
(function (GetDeleteNatGatewayActionEnum) {
    GetDeleteNatGatewayActionEnum["DeleteNatGateway"] = "DeleteNatGateway";
})(GetDeleteNatGatewayActionEnum || (GetDeleteNatGatewayActionEnum = {}));
export var GetDeleteNatGatewayVersionEnum;
(function (GetDeleteNatGatewayVersionEnum) {
    GetDeleteNatGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteNatGatewayVersionEnum || (GetDeleteNatGatewayVersionEnum = {}));
var GetDeleteNatGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteNatGatewayQueryParams, _super);
    function GetDeleteNatGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteNatGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NatGatewayId" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayQueryParams.prototype, "natGatewayId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayQueryParams.prototype, "version", void 0);
    return GetDeleteNatGatewayQueryParams;
}(SpeakeasyBase));
export { GetDeleteNatGatewayQueryParams };
var GetDeleteNatGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteNatGatewayHeaders, _super);
    function GetDeleteNatGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteNatGatewayHeaders;
}(SpeakeasyBase));
export { GetDeleteNatGatewayHeaders };
var GetDeleteNatGatewayRequest = /** @class */ (function (_super) {
    __extends(GetDeleteNatGatewayRequest, _super);
    function GetDeleteNatGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNatGatewayQueryParams)
    ], GetDeleteNatGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNatGatewayHeaders)
    ], GetDeleteNatGatewayRequest.prototype, "headers", void 0);
    return GetDeleteNatGatewayRequest;
}(SpeakeasyBase));
export { GetDeleteNatGatewayRequest };
var GetDeleteNatGatewayResponse = /** @class */ (function (_super) {
    __extends(GetDeleteNatGatewayResponse, _super);
    function GetDeleteNatGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteNatGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteNatGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteNatGatewayResponse.prototype, "statusCode", void 0);
    return GetDeleteNatGatewayResponse;
}(SpeakeasyBase));
export { GetDeleteNatGatewayResponse };
