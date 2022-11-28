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
export var GetDetachInternetGatewayActionEnum;
(function (GetDetachInternetGatewayActionEnum) {
    GetDetachInternetGatewayActionEnum["DetachInternetGateway"] = "DetachInternetGateway";
})(GetDetachInternetGatewayActionEnum || (GetDetachInternetGatewayActionEnum = {}));
export var GetDetachInternetGatewayVersionEnum;
(function (GetDetachInternetGatewayVersionEnum) {
    GetDetachInternetGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDetachInternetGatewayVersionEnum || (GetDetachInternetGatewayVersionEnum = {}));
var GetDetachInternetGatewayQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachInternetGatewayQueryParams, _super);
    function GetDetachInternetGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDetachInternetGatewayQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InternetGatewayId" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayQueryParams.prototype, "internetGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayQueryParams.prototype, "vpcId", void 0);
    return GetDetachInternetGatewayQueryParams;
}(SpeakeasyBase));
export { GetDetachInternetGatewayQueryParams };
var GetDetachInternetGatewayHeaders = /** @class */ (function (_super) {
    __extends(GetDetachInternetGatewayHeaders, _super);
    function GetDetachInternetGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachInternetGatewayHeaders;
}(SpeakeasyBase));
export { GetDetachInternetGatewayHeaders };
var GetDetachInternetGatewayRequest = /** @class */ (function (_super) {
    __extends(GetDetachInternetGatewayRequest, _super);
    function GetDetachInternetGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachInternetGatewayQueryParams)
    ], GetDetachInternetGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachInternetGatewayHeaders)
    ], GetDetachInternetGatewayRequest.prototype, "headers", void 0);
    return GetDetachInternetGatewayRequest;
}(SpeakeasyBase));
export { GetDetachInternetGatewayRequest };
var GetDetachInternetGatewayResponse = /** @class */ (function (_super) {
    __extends(GetDetachInternetGatewayResponse, _super);
    function GetDetachInternetGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDetachInternetGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDetachInternetGatewayResponse.prototype, "statusCode", void 0);
    return GetDetachInternetGatewayResponse;
}(SpeakeasyBase));
export { GetDetachInternetGatewayResponse };
