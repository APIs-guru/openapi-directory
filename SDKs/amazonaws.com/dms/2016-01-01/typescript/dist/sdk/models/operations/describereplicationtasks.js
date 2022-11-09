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
var DescribeReplicationTasksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeReplicationTasksQueryParams, _super);
    function DescribeReplicationTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksQueryParams.prototype, "maxRecords", void 0);
    return DescribeReplicationTasksQueryParams;
}(SpeakeasyBase));
export { DescribeReplicationTasksQueryParams };
export var DescribeReplicationTasksXAmzTargetEnum;
(function (DescribeReplicationTasksXAmzTargetEnum) {
    DescribeReplicationTasksXAmzTargetEnum["AmazonDmSv20160101DescribeReplicationTasks"] = "AmazonDMSv20160101.DescribeReplicationTasks";
})(DescribeReplicationTasksXAmzTargetEnum || (DescribeReplicationTasksXAmzTargetEnum = {}));
var DescribeReplicationTasksHeaders = /** @class */ (function (_super) {
    __extends(DescribeReplicationTasksHeaders, _super);
    function DescribeReplicationTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeReplicationTasksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeReplicationTasksHeaders;
}(SpeakeasyBase));
export { DescribeReplicationTasksHeaders };
var DescribeReplicationTasksRequest = /** @class */ (function (_super) {
    __extends(DescribeReplicationTasksRequest, _super);
    function DescribeReplicationTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationTasksQueryParams)
    ], DescribeReplicationTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationTasksHeaders)
    ], DescribeReplicationTasksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeReplicationTasksMessage)
    ], DescribeReplicationTasksRequest.prototype, "request", void 0);
    return DescribeReplicationTasksRequest;
}(SpeakeasyBase));
export { DescribeReplicationTasksRequest };
var DescribeReplicationTasksResponse = /** @class */ (function (_super) {
    __extends(DescribeReplicationTasksResponse, _super);
    function DescribeReplicationTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeReplicationTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeReplicationTasksResponse)
    ], DescribeReplicationTasksResponse.prototype, "describeReplicationTasksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationTasksResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeReplicationTasksResponse.prototype, "statusCode", void 0);
    return DescribeReplicationTasksResponse;
}(SpeakeasyBase));
export { DescribeReplicationTasksResponse };
