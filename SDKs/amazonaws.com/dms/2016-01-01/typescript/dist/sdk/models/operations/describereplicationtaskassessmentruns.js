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
var DescribeReplicationTaskAssessmentRunsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentRunsQueryParams, _super);
    function DescribeReplicationTaskAssessmentRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsQueryParams.prototype, "maxRecords", void 0);
    return DescribeReplicationTaskAssessmentRunsQueryParams;
}(SpeakeasyBase));
export { DescribeReplicationTaskAssessmentRunsQueryParams };
export var DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;
(function (DescribeReplicationTaskAssessmentRunsXAmzTargetEnum) {
    DescribeReplicationTaskAssessmentRunsXAmzTargetEnum["AmazonDmSv20160101DescribeReplicationTaskAssessmentRuns"] = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns";
})(DescribeReplicationTaskAssessmentRunsXAmzTargetEnum || (DescribeReplicationTaskAssessmentRunsXAmzTargetEnum = {}));
var DescribeReplicationTaskAssessmentRunsHeaders = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentRunsHeaders, _super);
    function DescribeReplicationTaskAssessmentRunsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeReplicationTaskAssessmentRunsHeaders;
}(SpeakeasyBase));
export { DescribeReplicationTaskAssessmentRunsHeaders };
var DescribeReplicationTaskAssessmentRunsRequest = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentRunsRequest, _super);
    function DescribeReplicationTaskAssessmentRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeReplicationTaskAssessmentRunsQueryParams)
    ], DescribeReplicationTaskAssessmentRunsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeReplicationTaskAssessmentRunsHeaders)
    ], DescribeReplicationTaskAssessmentRunsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeReplicationTaskAssessmentRunsMessage)
    ], DescribeReplicationTaskAssessmentRunsRequest.prototype, "request", void 0);
    return DescribeReplicationTaskAssessmentRunsRequest;
}(SpeakeasyBase));
export { DescribeReplicationTaskAssessmentRunsRequest };
var DescribeReplicationTaskAssessmentRunsResponse = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentRunsResponse, _super);
    function DescribeReplicationTaskAssessmentRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentRunsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeReplicationTaskAssessmentRunsResponse)
    ], DescribeReplicationTaskAssessmentRunsResponse.prototype, "describeReplicationTaskAssessmentRunsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationTaskAssessmentRunsResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeReplicationTaskAssessmentRunsResponse.prototype, "statusCode", void 0);
    return DescribeReplicationTaskAssessmentRunsResponse;
}(SpeakeasyBase));
export { DescribeReplicationTaskAssessmentRunsResponse };
