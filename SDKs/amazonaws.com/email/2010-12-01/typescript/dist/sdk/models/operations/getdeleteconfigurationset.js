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
export var GetDeleteConfigurationSetActionEnum;
(function (GetDeleteConfigurationSetActionEnum) {
    GetDeleteConfigurationSetActionEnum["DeleteConfigurationSet"] = "DeleteConfigurationSet";
})(GetDeleteConfigurationSetActionEnum || (GetDeleteConfigurationSetActionEnum = {}));
export var GetDeleteConfigurationSetVersionEnum;
(function (GetDeleteConfigurationSetVersionEnum) {
    GetDeleteConfigurationSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteConfigurationSetVersionEnum || (GetDeleteConfigurationSetVersionEnum = {}));
var GetDeleteConfigurationSetQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetQueryParams, _super);
    function GetDeleteConfigurationSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetQueryParams.prototype, "version", void 0);
    return GetDeleteConfigurationSetQueryParams;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetQueryParams };
var GetDeleteConfigurationSetHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetHeaders, _super);
    function GetDeleteConfigurationSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteConfigurationSetHeaders;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetHeaders };
var GetDeleteConfigurationSetRequest = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetRequest, _super);
    function GetDeleteConfigurationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteConfigurationSetQueryParams)
    ], GetDeleteConfigurationSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteConfigurationSetHeaders)
    ], GetDeleteConfigurationSetRequest.prototype, "headers", void 0);
    return GetDeleteConfigurationSetRequest;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetRequest };
var GetDeleteConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(GetDeleteConfigurationSetResponse, _super);
    function GetDeleteConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteConfigurationSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteConfigurationSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteConfigurationSetResponse.prototype, "statusCode", void 0);
    return GetDeleteConfigurationSetResponse;
}(SpeakeasyBase));
export { GetDeleteConfigurationSetResponse };
