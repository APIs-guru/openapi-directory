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
export var GetDeleteConfigurationSetTrackingOptionsActionEnum;
(function (GetDeleteConfigurationSetTrackingOptionsActionEnum) {
    GetDeleteConfigurationSetTrackingOptionsActionEnum["DeleteConfigurationSetTrackingOptions"] = "DeleteConfigurationSetTrackingOptions";
})(GetDeleteConfigurationSetTrackingOptionsActionEnum || (GetDeleteConfigurationSetTrackingOptionsActionEnum = {}));
export var GetDeleteConfigurationSetTrackingOptionsVersionEnum;
(function (GetDeleteConfigurationSetTrackingOptionsVersionEnum) {
    GetDeleteConfigurationSetTrackingOptionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteConfigurationSetTrackingOptionsVersionEnum || (GetDeleteConfigurationSetTrackingOptionsVersionEnum = {}));
var GetDeleteConfigurationSetTrackingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetTrackingOptionsQueryParams, _super);
    function GetDeleteConfigurationSetTrackingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsQueryParams.prototype, "version", void 0);
    return GetDeleteConfigurationSetTrackingOptionsQueryParams;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetTrackingOptionsQueryParams };
var GetDeleteConfigurationSetTrackingOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetTrackingOptionsHeaders, _super);
    function GetDeleteConfigurationSetTrackingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteConfigurationSetTrackingOptionsHeaders;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetTrackingOptionsHeaders };
var GetDeleteConfigurationSetTrackingOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetTrackingOptionsRequest, _super);
    function GetDeleteConfigurationSetTrackingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteConfigurationSetTrackingOptionsQueryParams)
    ], GetDeleteConfigurationSetTrackingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteConfigurationSetTrackingOptionsHeaders)
    ], GetDeleteConfigurationSetTrackingOptionsRequest.prototype, "headers", void 0);
    return GetDeleteConfigurationSetTrackingOptionsRequest;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetTrackingOptionsRequest };
var GetDeleteConfigurationSetTrackingOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetTrackingOptionsResponse, _super);
    function GetDeleteConfigurationSetTrackingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteConfigurationSetTrackingOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetTrackingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteConfigurationSetTrackingOptionsResponse.prototype, "statusCode", void 0);
    return GetDeleteConfigurationSetTrackingOptionsResponse;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetTrackingOptionsResponse };
