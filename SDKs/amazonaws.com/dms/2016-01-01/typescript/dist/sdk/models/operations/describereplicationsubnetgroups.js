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
import * as shared from "../shared";
var DescribeReplicationSubnetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeReplicationSubnetGroupsQueryParams, _super);
    function DescribeReplicationSubnetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsQueryParams.prototype, "maxRecords", void 0);
    return DescribeReplicationSubnetGroupsQueryParams;
}(SpeakeasyBase));
export { DescribeReplicationSubnetGroupsQueryParams };
export var DescribeReplicationSubnetGroupsXAmzTargetEnum;
(function (DescribeReplicationSubnetGroupsXAmzTargetEnum) {
    DescribeReplicationSubnetGroupsXAmzTargetEnum["AmazonDmSv20160101DescribeReplicationSubnetGroups"] = "AmazonDMSv20160101.DescribeReplicationSubnetGroups";
})(DescribeReplicationSubnetGroupsXAmzTargetEnum || (DescribeReplicationSubnetGroupsXAmzTargetEnum = {}));
var DescribeReplicationSubnetGroupsHeaders = /** @class */ (function (_super) {
    __extends(DescribeReplicationSubnetGroupsHeaders, _super);
    function DescribeReplicationSubnetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeReplicationSubnetGroupsHeaders;
}(SpeakeasyBase));
export { DescribeReplicationSubnetGroupsHeaders };
var DescribeReplicationSubnetGroupsRequest = /** @class */ (function (_super) {
    __extends(DescribeReplicationSubnetGroupsRequest, _super);
    function DescribeReplicationSubnetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationSubnetGroupsQueryParams)
    ], DescribeReplicationSubnetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationSubnetGroupsHeaders)
    ], DescribeReplicationSubnetGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeReplicationSubnetGroupsMessage)
    ], DescribeReplicationSubnetGroupsRequest.prototype, "request", void 0);
    return DescribeReplicationSubnetGroupsRequest;
}(SpeakeasyBase));
export { DescribeReplicationSubnetGroupsRequest };
var DescribeReplicationSubnetGroupsResponse = /** @class */ (function (_super) {
    __extends(DescribeReplicationSubnetGroupsResponse, _super);
    function DescribeReplicationSubnetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeReplicationSubnetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeReplicationSubnetGroupsResponse)
    ], DescribeReplicationSubnetGroupsResponse.prototype, "describeReplicationSubnetGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationSubnetGroupsResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeReplicationSubnetGroupsResponse.prototype, "statusCode", void 0);
    return DescribeReplicationSubnetGroupsResponse;
}(SpeakeasyBase));
export { DescribeReplicationSubnetGroupsResponse };
