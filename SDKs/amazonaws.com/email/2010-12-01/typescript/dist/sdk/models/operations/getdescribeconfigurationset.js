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
export var GetDescribeConfigurationSetActionEnum;
(function (GetDescribeConfigurationSetActionEnum) {
    GetDescribeConfigurationSetActionEnum["DescribeConfigurationSet"] = "DescribeConfigurationSet";
})(GetDescribeConfigurationSetActionEnum || (GetDescribeConfigurationSetActionEnum = {}));
export var GetDescribeConfigurationSetVersionEnum;
(function (GetDescribeConfigurationSetVersionEnum) {
    GetDescribeConfigurationSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeConfigurationSetVersionEnum || (GetDescribeConfigurationSetVersionEnum = {}));
var GetDescribeConfigurationSetQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSetQueryParams, _super);
    function GetDescribeConfigurationSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetAttributeNames" }),
        __metadata("design:type", Array)
    ], GetDescribeConfigurationSetQueryParams.prototype, "configurationSetAttributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetQueryParams.prototype, "version", void 0);
    return GetDescribeConfigurationSetQueryParams;
}(SpeakeasyBase));
export { GetDescribeConfigurationSetQueryParams };
var GetDescribeConfigurationSetHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSetHeaders, _super);
    function GetDescribeConfigurationSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeConfigurationSetHeaders;
}(SpeakeasyBase));
export { GetDescribeConfigurationSetHeaders };
var GetDescribeConfigurationSetRequest = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSetRequest, _super);
    function GetDescribeConfigurationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeConfigurationSetQueryParams)
    ], GetDescribeConfigurationSetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeConfigurationSetHeaders)
    ], GetDescribeConfigurationSetRequest.prototype, "headers", void 0);
    return GetDescribeConfigurationSetRequest;
}(SpeakeasyBase));
export { GetDescribeConfigurationSetRequest };
var GetDescribeConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSetResponse, _super);
    function GetDescribeConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeConfigurationSetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeConfigurationSetResponse.prototype, "statusCode", void 0);
    return GetDescribeConfigurationSetResponse;
}(SpeakeasyBase));
export { GetDescribeConfigurationSetResponse };
