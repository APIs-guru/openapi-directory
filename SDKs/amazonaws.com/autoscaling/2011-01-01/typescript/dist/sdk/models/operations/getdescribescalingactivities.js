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
export var GetDescribeScalingActivitiesActionEnum;
(function (GetDescribeScalingActivitiesActionEnum) {
    GetDescribeScalingActivitiesActionEnum["DescribeScalingActivities"] = "DescribeScalingActivities";
})(GetDescribeScalingActivitiesActionEnum || (GetDescribeScalingActivitiesActionEnum = {}));
export var GetDescribeScalingActivitiesVersionEnum;
(function (GetDescribeScalingActivitiesVersionEnum) {
    GetDescribeScalingActivitiesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeScalingActivitiesVersionEnum || (GetDescribeScalingActivitiesVersionEnum = {}));
var GetDescribeScalingActivitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeScalingActivitiesQueryParams, _super);
    function GetDescribeScalingActivitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ActivityIds" }),
        __metadata("design:type", Array)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "activityIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeDeletedGroups" }),
        __metadata("design:type", Boolean)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "includeDeletedGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesQueryParams.prototype, "version", void 0);
    return GetDescribeScalingActivitiesQueryParams;
}(SpeakeasyBase));
export { GetDescribeScalingActivitiesQueryParams };
var GetDescribeScalingActivitiesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeScalingActivitiesHeaders, _super);
    function GetDescribeScalingActivitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeScalingActivitiesHeaders;
}(SpeakeasyBase));
export { GetDescribeScalingActivitiesHeaders };
var GetDescribeScalingActivitiesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeScalingActivitiesRequest, _super);
    function GetDescribeScalingActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeScalingActivitiesQueryParams)
    ], GetDescribeScalingActivitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeScalingActivitiesHeaders)
    ], GetDescribeScalingActivitiesRequest.prototype, "headers", void 0);
    return GetDescribeScalingActivitiesRequest;
}(SpeakeasyBase));
export { GetDescribeScalingActivitiesRequest };
var GetDescribeScalingActivitiesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeScalingActivitiesResponse, _super);
    function GetDescribeScalingActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeScalingActivitiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeScalingActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeScalingActivitiesResponse.prototype, "statusCode", void 0);
    return GetDescribeScalingActivitiesResponse;
}(SpeakeasyBase));
export { GetDescribeScalingActivitiesResponse };
