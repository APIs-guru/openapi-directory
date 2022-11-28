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
export var GetDescribeLaunchConfigurationsActionEnum;
(function (GetDescribeLaunchConfigurationsActionEnum) {
    GetDescribeLaunchConfigurationsActionEnum["DescribeLaunchConfigurations"] = "DescribeLaunchConfigurations";
})(GetDescribeLaunchConfigurationsActionEnum || (GetDescribeLaunchConfigurationsActionEnum = {}));
export var GetDescribeLaunchConfigurationsVersionEnum;
(function (GetDescribeLaunchConfigurationsVersionEnum) {
    GetDescribeLaunchConfigurationsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeLaunchConfigurationsVersionEnum || (GetDescribeLaunchConfigurationsVersionEnum = {}));
var GetDescribeLaunchConfigurationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLaunchConfigurationsQueryParams, _super);
    function GetDescribeLaunchConfigurationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchConfigurationNames" }),
        __metadata("design:type", Array)
    ], GetDescribeLaunchConfigurationsQueryParams.prototype, "launchConfigurationNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeLaunchConfigurationsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsQueryParams.prototype, "version", void 0);
    return GetDescribeLaunchConfigurationsQueryParams;
}(SpeakeasyBase));
export { GetDescribeLaunchConfigurationsQueryParams };
var GetDescribeLaunchConfigurationsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLaunchConfigurationsHeaders, _super);
    function GetDescribeLaunchConfigurationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLaunchConfigurationsHeaders;
}(SpeakeasyBase));
export { GetDescribeLaunchConfigurationsHeaders };
var GetDescribeLaunchConfigurationsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLaunchConfigurationsRequest, _super);
    function GetDescribeLaunchConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLaunchConfigurationsQueryParams)
    ], GetDescribeLaunchConfigurationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLaunchConfigurationsHeaders)
    ], GetDescribeLaunchConfigurationsRequest.prototype, "headers", void 0);
    return GetDescribeLaunchConfigurationsRequest;
}(SpeakeasyBase));
export { GetDescribeLaunchConfigurationsRequest };
var GetDescribeLaunchConfigurationsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLaunchConfigurationsResponse, _super);
    function GetDescribeLaunchConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLaunchConfigurationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeLaunchConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeLaunchConfigurationsResponse.prototype, "statusCode", void 0);
    return GetDescribeLaunchConfigurationsResponse;
}(SpeakeasyBase));
export { GetDescribeLaunchConfigurationsResponse };
