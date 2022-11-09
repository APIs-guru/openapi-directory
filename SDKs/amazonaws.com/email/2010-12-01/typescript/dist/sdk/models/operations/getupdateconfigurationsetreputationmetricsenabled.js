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
export var GetUpdateConfigurationSetReputationMetricsEnabledActionEnum;
(function (GetUpdateConfigurationSetReputationMetricsEnabledActionEnum) {
    GetUpdateConfigurationSetReputationMetricsEnabledActionEnum["UpdateConfigurationSetReputationMetricsEnabled"] = "UpdateConfigurationSetReputationMetricsEnabled";
})(GetUpdateConfigurationSetReputationMetricsEnabledActionEnum || (GetUpdateConfigurationSetReputationMetricsEnabledActionEnum = {}));
export var GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
(function (GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum) {
    GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum || (GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum = {}));
var GetUpdateConfigurationSetReputationMetricsEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetReputationMetricsEnabledQueryParams, _super);
    function GetUpdateConfigurationSetReputationMetricsEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetUpdateConfigurationSetReputationMetricsEnabledQueryParams.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledQueryParams.prototype, "version", void 0);
    return GetUpdateConfigurationSetReputationMetricsEnabledQueryParams;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetReputationMetricsEnabledQueryParams };
var GetUpdateConfigurationSetReputationMetricsEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetReputationMetricsEnabledHeaders, _super);
    function GetUpdateConfigurationSetReputationMetricsEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateConfigurationSetReputationMetricsEnabledHeaders;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetReputationMetricsEnabledHeaders };
var GetUpdateConfigurationSetReputationMetricsEnabledRequest = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetReputationMetricsEnabledRequest, _super);
    function GetUpdateConfigurationSetReputationMetricsEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateConfigurationSetReputationMetricsEnabledQueryParams)
    ], GetUpdateConfigurationSetReputationMetricsEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateConfigurationSetReputationMetricsEnabledHeaders)
    ], GetUpdateConfigurationSetReputationMetricsEnabledRequest.prototype, "headers", void 0);
    return GetUpdateConfigurationSetReputationMetricsEnabledRequest;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetReputationMetricsEnabledRequest };
var GetUpdateConfigurationSetReputationMetricsEnabledResponse = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetReputationMetricsEnabledResponse, _super);
    function GetUpdateConfigurationSetReputationMetricsEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateConfigurationSetReputationMetricsEnabledResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetReputationMetricsEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateConfigurationSetReputationMetricsEnabledResponse.prototype, "statusCode", void 0);
    return GetUpdateConfigurationSetReputationMetricsEnabledResponse;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetReputationMetricsEnabledResponse };
