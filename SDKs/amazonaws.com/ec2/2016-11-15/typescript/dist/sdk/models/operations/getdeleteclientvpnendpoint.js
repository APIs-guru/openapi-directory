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
export var GetDeleteClientVpnEndpointActionEnum;
(function (GetDeleteClientVpnEndpointActionEnum) {
    GetDeleteClientVpnEndpointActionEnum["DeleteClientVpnEndpoint"] = "DeleteClientVpnEndpoint";
})(GetDeleteClientVpnEndpointActionEnum || (GetDeleteClientVpnEndpointActionEnum = {}));
export var GetDeleteClientVpnEndpointVersionEnum;
(function (GetDeleteClientVpnEndpointVersionEnum) {
    GetDeleteClientVpnEndpointVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteClientVpnEndpointVersionEnum || (GetDeleteClientVpnEndpointVersionEnum = {}));
var GetDeleteClientVpnEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteClientVpnEndpointQueryParams, _super);
    function GetDeleteClientVpnEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteClientVpnEndpointQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointQueryParams.prototype, "version", void 0);
    return GetDeleteClientVpnEndpointQueryParams;
}(SpeakeasyBase));
export { GetDeleteClientVpnEndpointQueryParams };
var GetDeleteClientVpnEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteClientVpnEndpointHeaders, _super);
    function GetDeleteClientVpnEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteClientVpnEndpointHeaders;
}(SpeakeasyBase));
export { GetDeleteClientVpnEndpointHeaders };
var GetDeleteClientVpnEndpointRequest = /** @class */ (function (_super) {
    __extends(GetDeleteClientVpnEndpointRequest, _super);
    function GetDeleteClientVpnEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClientVpnEndpointQueryParams)
    ], GetDeleteClientVpnEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClientVpnEndpointHeaders)
    ], GetDeleteClientVpnEndpointRequest.prototype, "headers", void 0);
    return GetDeleteClientVpnEndpointRequest;
}(SpeakeasyBase));
export { GetDeleteClientVpnEndpointRequest };
var GetDeleteClientVpnEndpointResponse = /** @class */ (function (_super) {
    __extends(GetDeleteClientVpnEndpointResponse, _super);
    function GetDeleteClientVpnEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteClientVpnEndpointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteClientVpnEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteClientVpnEndpointResponse.prototype, "statusCode", void 0);
    return GetDeleteClientVpnEndpointResponse;
}(SpeakeasyBase));
export { GetDeleteClientVpnEndpointResponse };
