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
export var GetUpdateConfigurationSetSendingEnabledActionEnum;
(function (GetUpdateConfigurationSetSendingEnabledActionEnum) {
    GetUpdateConfigurationSetSendingEnabledActionEnum["UpdateConfigurationSetSendingEnabled"] = "UpdateConfigurationSetSendingEnabled";
})(GetUpdateConfigurationSetSendingEnabledActionEnum || (GetUpdateConfigurationSetSendingEnabledActionEnum = {}));
export var GetUpdateConfigurationSetSendingEnabledVersionEnum;
(function (GetUpdateConfigurationSetSendingEnabledVersionEnum) {
    GetUpdateConfigurationSetSendingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetUpdateConfigurationSetSendingEnabledVersionEnum || (GetUpdateConfigurationSetSendingEnabledVersionEnum = {}));
var GetUpdateConfigurationSetSendingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetSendingEnabledQueryParams, _super);
    function GetUpdateConfigurationSetSendingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetUpdateConfigurationSetSendingEnabledQueryParams.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledQueryParams.prototype, "version", void 0);
    return GetUpdateConfigurationSetSendingEnabledQueryParams;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetSendingEnabledQueryParams };
var GetUpdateConfigurationSetSendingEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetSendingEnabledHeaders, _super);
    function GetUpdateConfigurationSetSendingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateConfigurationSetSendingEnabledHeaders;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetSendingEnabledHeaders };
var GetUpdateConfigurationSetSendingEnabledRequest = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetSendingEnabledRequest, _super);
    function GetUpdateConfigurationSetSendingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateConfigurationSetSendingEnabledQueryParams)
    ], GetUpdateConfigurationSetSendingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateConfigurationSetSendingEnabledHeaders)
    ], GetUpdateConfigurationSetSendingEnabledRequest.prototype, "headers", void 0);
    return GetUpdateConfigurationSetSendingEnabledRequest;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetSendingEnabledRequest };
var GetUpdateConfigurationSetSendingEnabledResponse = /** @class */ (function (_super) {
    __extends(GetUpdateConfigurationSetSendingEnabledResponse, _super);
    function GetUpdateConfigurationSetSendingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateConfigurationSetSendingEnabledResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateConfigurationSetSendingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateConfigurationSetSendingEnabledResponse.prototype, "statusCode", void 0);
    return GetUpdateConfigurationSetSendingEnabledResponse;
}(SpeakeasyBase));
export { GetUpdateConfigurationSetSendingEnabledResponse };
