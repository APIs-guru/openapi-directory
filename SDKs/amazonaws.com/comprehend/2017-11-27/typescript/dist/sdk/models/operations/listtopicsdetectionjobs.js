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
var ListTopicsDetectionJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListTopicsDetectionJobsQueryParams, _super);
    function ListTopicsDetectionJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsQueryParams.prototype, "nextToken", void 0);
    return ListTopicsDetectionJobsQueryParams;
}(SpeakeasyBase));
export { ListTopicsDetectionJobsQueryParams };
export var ListTopicsDetectionJobsXAmzTargetEnum;
(function (ListTopicsDetectionJobsXAmzTargetEnum) {
    ListTopicsDetectionJobsXAmzTargetEnum["Comprehend20171127ListTopicsDetectionJobs"] = "Comprehend_20171127.ListTopicsDetectionJobs";
})(ListTopicsDetectionJobsXAmzTargetEnum || (ListTopicsDetectionJobsXAmzTargetEnum = {}));
var ListTopicsDetectionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListTopicsDetectionJobsHeaders, _super);
    function ListTopicsDetectionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListTopicsDetectionJobsHeaders;
}(SpeakeasyBase));
export { ListTopicsDetectionJobsHeaders };
var ListTopicsDetectionJobsRequest = /** @class */ (function (_super) {
    __extends(ListTopicsDetectionJobsRequest, _super);
    function ListTopicsDetectionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTopicsDetectionJobsQueryParams)
    ], ListTopicsDetectionJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTopicsDetectionJobsHeaders)
    ], ListTopicsDetectionJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTopicsDetectionJobsRequest)
    ], ListTopicsDetectionJobsRequest.prototype, "request", void 0);
    return ListTopicsDetectionJobsRequest;
}(SpeakeasyBase));
export { ListTopicsDetectionJobsRequest };
var ListTopicsDetectionJobsResponse = /** @class */ (function (_super) {
    __extends(ListTopicsDetectionJobsResponse, _super);
    function ListTopicsDetectionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTopicsDetectionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTopicsDetectionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTopicsDetectionJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTopicsDetectionJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTopicsDetectionJobsResponse)
    ], ListTopicsDetectionJobsResponse.prototype, "listTopicsDetectionJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTopicsDetectionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTopicsDetectionJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListTopicsDetectionJobsResponse;
}(SpeakeasyBase));
export { ListTopicsDetectionJobsResponse };
