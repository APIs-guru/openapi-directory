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
export var GetDescribeInstancesHealthActionEnum;
(function (GetDescribeInstancesHealthActionEnum) {
    GetDescribeInstancesHealthActionEnum["DescribeInstancesHealth"] = "DescribeInstancesHealth";
})(GetDescribeInstancesHealthActionEnum || (GetDescribeInstancesHealthActionEnum = {}));
export var GetDescribeInstancesHealthVersionEnum;
(function (GetDescribeInstancesHealthVersionEnum) {
    GetDescribeInstancesHealthVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeInstancesHealthVersionEnum || (GetDescribeInstancesHealthVersionEnum = {}));
var GetDescribeInstancesHealthQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeInstancesHealthQueryParams, _super);
    function GetDescribeInstancesHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetDescribeInstancesHealthQueryParams.prototype, "attributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthQueryParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthQueryParams.prototype, "version", void 0);
    return GetDescribeInstancesHealthQueryParams;
}(SpeakeasyBase));
export { GetDescribeInstancesHealthQueryParams };
var GetDescribeInstancesHealthHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeInstancesHealthHeaders, _super);
    function GetDescribeInstancesHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeInstancesHealthHeaders;
}(SpeakeasyBase));
export { GetDescribeInstancesHealthHeaders };
var GetDescribeInstancesHealthRequest = /** @class */ (function (_super) {
    __extends(GetDescribeInstancesHealthRequest, _super);
    function GetDescribeInstancesHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeInstancesHealthQueryParams)
    ], GetDescribeInstancesHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeInstancesHealthHeaders)
    ], GetDescribeInstancesHealthRequest.prototype, "headers", void 0);
    return GetDescribeInstancesHealthRequest;
}(SpeakeasyBase));
export { GetDescribeInstancesHealthRequest };
var GetDescribeInstancesHealthResponse = /** @class */ (function (_super) {
    __extends(GetDescribeInstancesHealthResponse, _super);
    function GetDescribeInstancesHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeInstancesHealthResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeInstancesHealthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeInstancesHealthResponse.prototype, "statusCode", void 0);
    return GetDescribeInstancesHealthResponse;
}(SpeakeasyBase));
export { GetDescribeInstancesHealthResponse };
