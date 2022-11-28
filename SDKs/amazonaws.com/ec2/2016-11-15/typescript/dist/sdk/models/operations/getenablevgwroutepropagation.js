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
export var GetEnableVgwRoutePropagationActionEnum;
(function (GetEnableVgwRoutePropagationActionEnum) {
    GetEnableVgwRoutePropagationActionEnum["EnableVgwRoutePropagation"] = "EnableVgwRoutePropagation";
})(GetEnableVgwRoutePropagationActionEnum || (GetEnableVgwRoutePropagationActionEnum = {}));
export var GetEnableVgwRoutePropagationVersionEnum;
(function (GetEnableVgwRoutePropagationVersionEnum) {
    GetEnableVgwRoutePropagationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetEnableVgwRoutePropagationVersionEnum || (GetEnableVgwRoutePropagationVersionEnum = {}));
var GetEnableVgwRoutePropagationQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableVgwRoutePropagationQueryParams, _super);
    function GetEnableVgwRoutePropagationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetEnableVgwRoutePropagationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationQueryParams.prototype, "version", void 0);
    return GetEnableVgwRoutePropagationQueryParams;
}(SpeakeasyBase));
export { GetEnableVgwRoutePropagationQueryParams };
var GetEnableVgwRoutePropagationHeaders = /** @class */ (function (_super) {
    __extends(GetEnableVgwRoutePropagationHeaders, _super);
    function GetEnableVgwRoutePropagationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableVgwRoutePropagationHeaders;
}(SpeakeasyBase));
export { GetEnableVgwRoutePropagationHeaders };
var GetEnableVgwRoutePropagationRequest = /** @class */ (function (_super) {
    __extends(GetEnableVgwRoutePropagationRequest, _super);
    function GetEnableVgwRoutePropagationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnableVgwRoutePropagationQueryParams)
    ], GetEnableVgwRoutePropagationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnableVgwRoutePropagationHeaders)
    ], GetEnableVgwRoutePropagationRequest.prototype, "headers", void 0);
    return GetEnableVgwRoutePropagationRequest;
}(SpeakeasyBase));
export { GetEnableVgwRoutePropagationRequest };
var GetEnableVgwRoutePropagationResponse = /** @class */ (function (_super) {
    __extends(GetEnableVgwRoutePropagationResponse, _super);
    function GetEnableVgwRoutePropagationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEnableVgwRoutePropagationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEnableVgwRoutePropagationResponse.prototype, "statusCode", void 0);
    return GetEnableVgwRoutePropagationResponse;
}(SpeakeasyBase));
export { GetEnableVgwRoutePropagationResponse };
