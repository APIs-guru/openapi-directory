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
export var GetDescribeUpdateActionsActionEnum;
(function (GetDescribeUpdateActionsActionEnum) {
    GetDescribeUpdateActionsActionEnum["DescribeUpdateActions"] = "DescribeUpdateActions";
})(GetDescribeUpdateActionsActionEnum || (GetDescribeUpdateActionsActionEnum = {}));
// GetDescribeUpdateActionsServiceUpdateTimeRange
/**
 * Filters update actions from the service updates that are in available status during the time range.
**/
var GetDescribeUpdateActionsServiceUpdateTimeRange = /** @class */ (function (_super) {
    __extends(GetDescribeUpdateActionsServiceUpdateTimeRange, _super);
    function GetDescribeUpdateActionsServiceUpdateTimeRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=EndTime" }),
        __metadata("design:type", Date)
    ], GetDescribeUpdateActionsServiceUpdateTimeRange.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeUpdateActionsServiceUpdateTimeRange.prototype, "startTime", void 0);
    return GetDescribeUpdateActionsServiceUpdateTimeRange;
}(SpeakeasyBase));
export { GetDescribeUpdateActionsServiceUpdateTimeRange };
export var GetDescribeUpdateActionsVersionEnum;
(function (GetDescribeUpdateActionsVersionEnum) {
    GetDescribeUpdateActionsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeUpdateActionsVersionEnum || (GetDescribeUpdateActionsVersionEnum = {}));
var GetDescribeUpdateActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeUpdateActionsQueryParams, _super);
    function GetDescribeUpdateActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" }),
        __metadata("design:type", Array)
    ], GetDescribeUpdateActionsQueryParams.prototype, "cacheClusterIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsQueryParams.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeUpdateActionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" }),
        __metadata("design:type", Array)
    ], GetDescribeUpdateActionsQueryParams.prototype, "replicationGroupIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsQueryParams.prototype, "serviceUpdateName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" }),
        __metadata("design:type", Array)
    ], GetDescribeUpdateActionsQueryParams.prototype, "serviceUpdateStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateTimeRange" }),
        __metadata("design:type", GetDescribeUpdateActionsServiceUpdateTimeRange)
    ], GetDescribeUpdateActionsQueryParams.prototype, "serviceUpdateTimeRange", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShowNodeLevelUpdateStatus" }),
        __metadata("design:type", Boolean)
    ], GetDescribeUpdateActionsQueryParams.prototype, "showNodeLevelUpdateStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UpdateActionStatus" }),
        __metadata("design:type", Array)
    ], GetDescribeUpdateActionsQueryParams.prototype, "updateActionStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsQueryParams.prototype, "version", void 0);
    return GetDescribeUpdateActionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeUpdateActionsQueryParams };
var GetDescribeUpdateActionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeUpdateActionsHeaders, _super);
    function GetDescribeUpdateActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeUpdateActionsHeaders;
}(SpeakeasyBase));
export { GetDescribeUpdateActionsHeaders };
var GetDescribeUpdateActionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeUpdateActionsRequest, _super);
    function GetDescribeUpdateActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeUpdateActionsQueryParams)
    ], GetDescribeUpdateActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeUpdateActionsHeaders)
    ], GetDescribeUpdateActionsRequest.prototype, "headers", void 0);
    return GetDescribeUpdateActionsRequest;
}(SpeakeasyBase));
export { GetDescribeUpdateActionsRequest };
var GetDescribeUpdateActionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeUpdateActionsResponse, _super);
    function GetDescribeUpdateActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeUpdateActionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeUpdateActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeUpdateActionsResponse.prototype, "statusCode", void 0);
    return GetDescribeUpdateActionsResponse;
}(SpeakeasyBase));
export { GetDescribeUpdateActionsResponse };
