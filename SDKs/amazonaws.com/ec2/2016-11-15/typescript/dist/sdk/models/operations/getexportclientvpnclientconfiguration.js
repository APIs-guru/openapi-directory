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
export var GetExportClientVpnClientConfigurationActionEnum;
(function (GetExportClientVpnClientConfigurationActionEnum) {
    GetExportClientVpnClientConfigurationActionEnum["ExportClientVpnClientConfiguration"] = "ExportClientVpnClientConfiguration";
})(GetExportClientVpnClientConfigurationActionEnum || (GetExportClientVpnClientConfigurationActionEnum = {}));
export var GetExportClientVpnClientConfigurationVersionEnum;
(function (GetExportClientVpnClientConfigurationVersionEnum) {
    GetExportClientVpnClientConfigurationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetExportClientVpnClientConfigurationVersionEnum || (GetExportClientVpnClientConfigurationVersionEnum = {}));
var GetExportClientVpnClientConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(GetExportClientVpnClientConfigurationQueryParams, _super);
    function GetExportClientVpnClientConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetExportClientVpnClientConfigurationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationQueryParams.prototype, "version", void 0);
    return GetExportClientVpnClientConfigurationQueryParams;
}(SpeakeasyBase));
export { GetExportClientVpnClientConfigurationQueryParams };
var GetExportClientVpnClientConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetExportClientVpnClientConfigurationHeaders, _super);
    function GetExportClientVpnClientConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetExportClientVpnClientConfigurationHeaders;
}(SpeakeasyBase));
export { GetExportClientVpnClientConfigurationHeaders };
var GetExportClientVpnClientConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetExportClientVpnClientConfigurationRequest, _super);
    function GetExportClientVpnClientConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportClientVpnClientConfigurationQueryParams)
    ], GetExportClientVpnClientConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportClientVpnClientConfigurationHeaders)
    ], GetExportClientVpnClientConfigurationRequest.prototype, "headers", void 0);
    return GetExportClientVpnClientConfigurationRequest;
}(SpeakeasyBase));
export { GetExportClientVpnClientConfigurationRequest };
var GetExportClientVpnClientConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetExportClientVpnClientConfigurationResponse, _super);
    function GetExportClientVpnClientConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetExportClientVpnClientConfigurationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetExportClientVpnClientConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetExportClientVpnClientConfigurationResponse.prototype, "statusCode", void 0);
    return GetExportClientVpnClientConfigurationResponse;
}(SpeakeasyBase));
export { GetExportClientVpnClientConfigurationResponse };
