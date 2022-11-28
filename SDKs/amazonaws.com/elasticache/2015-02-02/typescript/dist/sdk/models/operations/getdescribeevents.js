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
export var GetDescribeEventsActionEnum;
(function (GetDescribeEventsActionEnum) {
    GetDescribeEventsActionEnum["DescribeEvents"] = "DescribeEvents";
})(GetDescribeEventsActionEnum || (GetDescribeEventsActionEnum = {}));
export var GetDescribeEventsSourceTypeEnum;
(function (GetDescribeEventsSourceTypeEnum) {
    GetDescribeEventsSourceTypeEnum["CacheCluster"] = "cache-cluster";
    GetDescribeEventsSourceTypeEnum["CacheParameterGroup"] = "cache-parameter-group";
    GetDescribeEventsSourceTypeEnum["CacheSecurityGroup"] = "cache-security-group";
    GetDescribeEventsSourceTypeEnum["CacheSubnetGroup"] = "cache-subnet-group";
    GetDescribeEventsSourceTypeEnum["ReplicationGroup"] = "replication-group";
    GetDescribeEventsSourceTypeEnum["User"] = "user";
    GetDescribeEventsSourceTypeEnum["UserGroup"] = "user-group";
})(GetDescribeEventsSourceTypeEnum || (GetDescribeEventsSourceTypeEnum = {}));
export var GetDescribeEventsVersionEnum;
(function (GetDescribeEventsVersionEnum) {
    GetDescribeEventsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeEventsVersionEnum || (GetDescribeEventsVersionEnum = {}));
var GetDescribeEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEventsQueryParams, _super);
    function GetDescribeEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" }),
        __metadata("design:type", Number)
    ], GetDescribeEventsQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetDescribeEventsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeEventsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "sourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceType" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeEventsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "version", void 0);
    return GetDescribeEventsQueryParams;
}(SpeakeasyBase));
export { GetDescribeEventsQueryParams };
var GetDescribeEventsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEventsHeaders, _super);
    function GetDescribeEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEventsHeaders;
}(SpeakeasyBase));
export { GetDescribeEventsHeaders };
var GetDescribeEventsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEventsRequest, _super);
    function GetDescribeEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEventsQueryParams)
    ], GetDescribeEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEventsHeaders)
    ], GetDescribeEventsRequest.prototype, "headers", void 0);
    return GetDescribeEventsRequest;
}(SpeakeasyBase));
export { GetDescribeEventsRequest };
var GetDescribeEventsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEventsResponse, _super);
    function GetDescribeEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEventsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeEventsResponse.prototype, "statusCode", void 0);
    return GetDescribeEventsResponse;
}(SpeakeasyBase));
export { GetDescribeEventsResponse };
