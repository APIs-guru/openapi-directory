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
export var GetDescribeSnapshotsActionEnum;
(function (GetDescribeSnapshotsActionEnum) {
    GetDescribeSnapshotsActionEnum["DescribeSnapshots"] = "DescribeSnapshots";
})(GetDescribeSnapshotsActionEnum || (GetDescribeSnapshotsActionEnum = {}));
export var GetDescribeSnapshotsVersionEnum;
(function (GetDescribeSnapshotsVersionEnum) {
    GetDescribeSnapshotsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeSnapshotsVersionEnum || (GetDescribeSnapshotsVersionEnum = {}));
var GetDescribeSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotsQueryParams, _super);
    function GetDescribeSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "cacheClusterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeSnapshotsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "replicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShowNodeGroupConfig" }),
        __metadata("design:type", Boolean)
    ], GetDescribeSnapshotsQueryParams.prototype, "showNodeGroupConfig", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotName" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "snapshotName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotSource" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "snapshotSource", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsQueryParams.prototype, "version", void 0);
    return GetDescribeSnapshotsQueryParams;
}(SpeakeasyBase));
export { GetDescribeSnapshotsQueryParams };
var GetDescribeSnapshotsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotsHeaders, _super);
    function GetDescribeSnapshotsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSnapshotsHeaders;
}(SpeakeasyBase));
export { GetDescribeSnapshotsHeaders };
var GetDescribeSnapshotsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotsRequest, _super);
    function GetDescribeSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSnapshotsQueryParams)
    ], GetDescribeSnapshotsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSnapshotsHeaders)
    ], GetDescribeSnapshotsRequest.prototype, "headers", void 0);
    return GetDescribeSnapshotsRequest;
}(SpeakeasyBase));
export { GetDescribeSnapshotsRequest };
var GetDescribeSnapshotsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotsResponse, _super);
    function GetDescribeSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSnapshotsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeSnapshotsResponse.prototype, "statusCode", void 0);
    return GetDescribeSnapshotsResponse;
}(SpeakeasyBase));
export { GetDescribeSnapshotsResponse };
