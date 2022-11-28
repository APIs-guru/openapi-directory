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
export var GetDisableVgwRoutePropagationActionEnum;
(function (GetDisableVgwRoutePropagationActionEnum) {
    GetDisableVgwRoutePropagationActionEnum["DisableVgwRoutePropagation"] = "DisableVgwRoutePropagation";
})(GetDisableVgwRoutePropagationActionEnum || (GetDisableVgwRoutePropagationActionEnum = {}));
export var GetDisableVgwRoutePropagationVersionEnum;
(function (GetDisableVgwRoutePropagationVersionEnum) {
    GetDisableVgwRoutePropagationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableVgwRoutePropagationVersionEnum || (GetDisableVgwRoutePropagationVersionEnum = {}));
var GetDisableVgwRoutePropagationQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableVgwRoutePropagationQueryParams, _super);
    function GetDisableVgwRoutePropagationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableVgwRoutePropagationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationQueryParams.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationQueryParams.prototype, "version", void 0);
    return GetDisableVgwRoutePropagationQueryParams;
}(SpeakeasyBase));
export { GetDisableVgwRoutePropagationQueryParams };
var GetDisableVgwRoutePropagationHeaders = /** @class */ (function (_super) {
    __extends(GetDisableVgwRoutePropagationHeaders, _super);
    function GetDisableVgwRoutePropagationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableVgwRoutePropagationHeaders;
}(SpeakeasyBase));
export { GetDisableVgwRoutePropagationHeaders };
var GetDisableVgwRoutePropagationRequest = /** @class */ (function (_super) {
    __extends(GetDisableVgwRoutePropagationRequest, _super);
    function GetDisableVgwRoutePropagationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableVgwRoutePropagationQueryParams)
    ], GetDisableVgwRoutePropagationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableVgwRoutePropagationHeaders)
    ], GetDisableVgwRoutePropagationRequest.prototype, "headers", void 0);
    return GetDisableVgwRoutePropagationRequest;
}(SpeakeasyBase));
export { GetDisableVgwRoutePropagationRequest };
var GetDisableVgwRoutePropagationResponse = /** @class */ (function (_super) {
    __extends(GetDisableVgwRoutePropagationResponse, _super);
    function GetDisableVgwRoutePropagationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableVgwRoutePropagationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableVgwRoutePropagationResponse.prototype, "statusCode", void 0);
    return GetDisableVgwRoutePropagationResponse;
}(SpeakeasyBase));
export { GetDisableVgwRoutePropagationResponse };
