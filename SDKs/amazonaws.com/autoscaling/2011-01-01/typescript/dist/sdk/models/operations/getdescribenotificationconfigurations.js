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
export var GetDescribeNotificationConfigurationsActionEnum;
(function (GetDescribeNotificationConfigurationsActionEnum) {
    GetDescribeNotificationConfigurationsActionEnum["DescribeNotificationConfigurations"] = "DescribeNotificationConfigurations";
})(GetDescribeNotificationConfigurationsActionEnum || (GetDescribeNotificationConfigurationsActionEnum = {}));
export var GetDescribeNotificationConfigurationsVersionEnum;
(function (GetDescribeNotificationConfigurationsVersionEnum) {
    GetDescribeNotificationConfigurationsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeNotificationConfigurationsVersionEnum || (GetDescribeNotificationConfigurationsVersionEnum = {}));
var GetDescribeNotificationConfigurationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeNotificationConfigurationsQueryParams, _super);
    function GetDescribeNotificationConfigurationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupNames" }),
        __metadata("design:type", Array)
    ], GetDescribeNotificationConfigurationsQueryParams.prototype, "autoScalingGroupNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeNotificationConfigurationsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsQueryParams.prototype, "version", void 0);
    return GetDescribeNotificationConfigurationsQueryParams;
}(SpeakeasyBase));
export { GetDescribeNotificationConfigurationsQueryParams };
var GetDescribeNotificationConfigurationsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeNotificationConfigurationsHeaders, _super);
    function GetDescribeNotificationConfigurationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeNotificationConfigurationsHeaders;
}(SpeakeasyBase));
export { GetDescribeNotificationConfigurationsHeaders };
var GetDescribeNotificationConfigurationsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeNotificationConfigurationsRequest, _super);
    function GetDescribeNotificationConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeNotificationConfigurationsQueryParams)
    ], GetDescribeNotificationConfigurationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeNotificationConfigurationsHeaders)
    ], GetDescribeNotificationConfigurationsRequest.prototype, "headers", void 0);
    return GetDescribeNotificationConfigurationsRequest;
}(SpeakeasyBase));
export { GetDescribeNotificationConfigurationsRequest };
var GetDescribeNotificationConfigurationsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeNotificationConfigurationsResponse, _super);
    function GetDescribeNotificationConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeNotificationConfigurationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeNotificationConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeNotificationConfigurationsResponse.prototype, "statusCode", void 0);
    return GetDescribeNotificationConfigurationsResponse;
}(SpeakeasyBase));
export { GetDescribeNotificationConfigurationsResponse };
