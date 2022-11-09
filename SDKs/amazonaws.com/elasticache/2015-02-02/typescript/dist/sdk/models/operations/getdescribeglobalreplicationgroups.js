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
export var GetDescribeGlobalReplicationGroupsActionEnum;
(function (GetDescribeGlobalReplicationGroupsActionEnum) {
    GetDescribeGlobalReplicationGroupsActionEnum["DescribeGlobalReplicationGroups"] = "DescribeGlobalReplicationGroups";
})(GetDescribeGlobalReplicationGroupsActionEnum || (GetDescribeGlobalReplicationGroupsActionEnum = {}));
export var GetDescribeGlobalReplicationGroupsVersionEnum;
(function (GetDescribeGlobalReplicationGroupsVersionEnum) {
    GetDescribeGlobalReplicationGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeGlobalReplicationGroupsVersionEnum || (GetDescribeGlobalReplicationGroupsVersionEnum = {}));
var GetDescribeGlobalReplicationGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeGlobalReplicationGroupsQueryParams, _super);
    function GetDescribeGlobalReplicationGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShowMemberInfo" }),
        __metadata("design:type", Boolean)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "showMemberInfo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeGlobalReplicationGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeGlobalReplicationGroupsQueryParams };
var GetDescribeGlobalReplicationGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeGlobalReplicationGroupsHeaders, _super);
    function GetDescribeGlobalReplicationGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeGlobalReplicationGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeGlobalReplicationGroupsHeaders };
var GetDescribeGlobalReplicationGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeGlobalReplicationGroupsRequest, _super);
    function GetDescribeGlobalReplicationGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeGlobalReplicationGroupsQueryParams)
    ], GetDescribeGlobalReplicationGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeGlobalReplicationGroupsHeaders)
    ], GetDescribeGlobalReplicationGroupsRequest.prototype, "headers", void 0);
    return GetDescribeGlobalReplicationGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeGlobalReplicationGroupsRequest };
var GetDescribeGlobalReplicationGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeGlobalReplicationGroupsResponse, _super);
    function GetDescribeGlobalReplicationGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeGlobalReplicationGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeGlobalReplicationGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeGlobalReplicationGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeGlobalReplicationGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeGlobalReplicationGroupsResponse };
