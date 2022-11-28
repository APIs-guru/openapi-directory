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
import * as shared from "../shared";
var DescribeDataRepositoryTasksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeDataRepositoryTasksQueryParams, _super);
    function DescribeDataRepositoryTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksQueryParams.prototype, "nextToken", void 0);
    return DescribeDataRepositoryTasksQueryParams;
}(SpeakeasyBase));
export { DescribeDataRepositoryTasksQueryParams };
export var DescribeDataRepositoryTasksXAmzTargetEnum;
(function (DescribeDataRepositoryTasksXAmzTargetEnum) {
    DescribeDataRepositoryTasksXAmzTargetEnum["AwsSimbaApiServiceV20180301DescribeDataRepositoryTasks"] = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks";
})(DescribeDataRepositoryTasksXAmzTargetEnum || (DescribeDataRepositoryTasksXAmzTargetEnum = {}));
var DescribeDataRepositoryTasksHeaders = /** @class */ (function (_super) {
    __extends(DescribeDataRepositoryTasksHeaders, _super);
    function DescribeDataRepositoryTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeDataRepositoryTasksHeaders;
}(SpeakeasyBase));
export { DescribeDataRepositoryTasksHeaders };
var DescribeDataRepositoryTasksRequest = /** @class */ (function (_super) {
    __extends(DescribeDataRepositoryTasksRequest, _super);
    function DescribeDataRepositoryTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDataRepositoryTasksQueryParams)
    ], DescribeDataRepositoryTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDataRepositoryTasksHeaders)
    ], DescribeDataRepositoryTasksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeDataRepositoryTasksRequest)
    ], DescribeDataRepositoryTasksRequest.prototype, "request", void 0);
    return DescribeDataRepositoryTasksRequest;
}(SpeakeasyBase));
export { DescribeDataRepositoryTasksRequest };
var DescribeDataRepositoryTasksResponse = /** @class */ (function (_super) {
    __extends(DescribeDataRepositoryTasksResponse, _super);
    function DescribeDataRepositoryTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDataRepositoryTasksResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeDataRepositoryTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDataRepositoryTasksResponse.prototype, "dataRepositoryTaskNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeDataRepositoryTasksResponse)
    ], DescribeDataRepositoryTasksResponse.prototype, "describeDataRepositoryTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDataRepositoryTasksResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDataRepositoryTasksResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeDataRepositoryTasksResponse.prototype, "statusCode", void 0);
    return DescribeDataRepositoryTasksResponse;
}(SpeakeasyBase));
export { DescribeDataRepositoryTasksResponse };
