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
export var GetDescribeAutoScalingNotificationTypesActionEnum;
(function (GetDescribeAutoScalingNotificationTypesActionEnum) {
    GetDescribeAutoScalingNotificationTypesActionEnum["DescribeAutoScalingNotificationTypes"] = "DescribeAutoScalingNotificationTypes";
})(GetDescribeAutoScalingNotificationTypesActionEnum || (GetDescribeAutoScalingNotificationTypesActionEnum = {}));
export var GetDescribeAutoScalingNotificationTypesVersionEnum;
(function (GetDescribeAutoScalingNotificationTypesVersionEnum) {
    GetDescribeAutoScalingNotificationTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeAutoScalingNotificationTypesVersionEnum || (GetDescribeAutoScalingNotificationTypesVersionEnum = {}));
var GetDescribeAutoScalingNotificationTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingNotificationTypesQueryParams, _super);
    function GetDescribeAutoScalingNotificationTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesQueryParams.prototype, "version", void 0);
    return GetDescribeAutoScalingNotificationTypesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAutoScalingNotificationTypesQueryParams };
var GetDescribeAutoScalingNotificationTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingNotificationTypesHeaders, _super);
    function GetDescribeAutoScalingNotificationTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAutoScalingNotificationTypesHeaders;
}(SpeakeasyBase));
export { GetDescribeAutoScalingNotificationTypesHeaders };
var GetDescribeAutoScalingNotificationTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingNotificationTypesRequest, _super);
    function GetDescribeAutoScalingNotificationTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingNotificationTypesQueryParams)
    ], GetDescribeAutoScalingNotificationTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingNotificationTypesHeaders)
    ], GetDescribeAutoScalingNotificationTypesRequest.prototype, "headers", void 0);
    return GetDescribeAutoScalingNotificationTypesRequest;
}(SpeakeasyBase));
export { GetDescribeAutoScalingNotificationTypesRequest };
var GetDescribeAutoScalingNotificationTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingNotificationTypesResponse, _super);
    function GetDescribeAutoScalingNotificationTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAutoScalingNotificationTypesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingNotificationTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAutoScalingNotificationTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeAutoScalingNotificationTypesResponse;
}(SpeakeasyBase));
export { GetDescribeAutoScalingNotificationTypesResponse };
