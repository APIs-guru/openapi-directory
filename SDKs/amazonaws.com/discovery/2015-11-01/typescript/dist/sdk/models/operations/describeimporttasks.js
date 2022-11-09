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
var DescribeImportTasksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeImportTasksQueryParams, _super);
    function DescribeImportTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeImportTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeImportTasksQueryParams.prototype, "nextToken", void 0);
    return DescribeImportTasksQueryParams;
}(SpeakeasyBase));
export { DescribeImportTasksQueryParams };
export var DescribeImportTasksXAmzTargetEnum;
(function (DescribeImportTasksXAmzTargetEnum) {
    DescribeImportTasksXAmzTargetEnum["AwsPoseidonServiceV20151101DescribeImportTasks"] = "AWSPoseidonService_V2015_11_01.DescribeImportTasks";
})(DescribeImportTasksXAmzTargetEnum || (DescribeImportTasksXAmzTargetEnum = {}));
var DescribeImportTasksHeaders = /** @class */ (function (_super) {
    __extends(DescribeImportTasksHeaders, _super);
    function DescribeImportTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeImportTasksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeImportTasksHeaders;
}(SpeakeasyBase));
export { DescribeImportTasksHeaders };
var DescribeImportTasksRequest = /** @class */ (function (_super) {
    __extends(DescribeImportTasksRequest, _super);
    function DescribeImportTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeImportTasksQueryParams)
    ], DescribeImportTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeImportTasksHeaders)
    ], DescribeImportTasksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeImportTasksRequest)
    ], DescribeImportTasksRequest.prototype, "request", void 0);
    return DescribeImportTasksRequest;
}(SpeakeasyBase));
export { DescribeImportTasksRequest };
var DescribeImportTasksResponse = /** @class */ (function (_super) {
    __extends(DescribeImportTasksResponse, _super);
    function DescribeImportTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeImportTasksResponse.prototype, "authorizationErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeImportTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeImportTasksResponse)
    ], DescribeImportTasksResponse.prototype, "describeImportTasksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeImportTasksResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeImportTasksResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeImportTasksResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeImportTasksResponse.prototype, "serverInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeImportTasksResponse.prototype, "statusCode", void 0);
    return DescribeImportTasksResponse;
}(SpeakeasyBase));
export { DescribeImportTasksResponse };
