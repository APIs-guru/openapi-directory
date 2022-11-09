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
var ListKeyPhrasesDetectionJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListKeyPhrasesDetectionJobsQueryParams, _super);
    function ListKeyPhrasesDetectionJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsQueryParams.prototype, "nextToken", void 0);
    return ListKeyPhrasesDetectionJobsQueryParams;
}(SpeakeasyBase));
export { ListKeyPhrasesDetectionJobsQueryParams };
export var ListKeyPhrasesDetectionJobsXAmzTargetEnum;
(function (ListKeyPhrasesDetectionJobsXAmzTargetEnum) {
    ListKeyPhrasesDetectionJobsXAmzTargetEnum["Comprehend20171127ListKeyPhrasesDetectionJobs"] = "Comprehend_20171127.ListKeyPhrasesDetectionJobs";
})(ListKeyPhrasesDetectionJobsXAmzTargetEnum || (ListKeyPhrasesDetectionJobsXAmzTargetEnum = {}));
var ListKeyPhrasesDetectionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListKeyPhrasesDetectionJobsHeaders, _super);
    function ListKeyPhrasesDetectionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListKeyPhrasesDetectionJobsHeaders;
}(SpeakeasyBase));
export { ListKeyPhrasesDetectionJobsHeaders };
var ListKeyPhrasesDetectionJobsRequest = /** @class */ (function (_super) {
    __extends(ListKeyPhrasesDetectionJobsRequest, _super);
    function ListKeyPhrasesDetectionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeyPhrasesDetectionJobsQueryParams)
    ], ListKeyPhrasesDetectionJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeyPhrasesDetectionJobsHeaders)
    ], ListKeyPhrasesDetectionJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListKeyPhrasesDetectionJobsRequest)
    ], ListKeyPhrasesDetectionJobsRequest.prototype, "request", void 0);
    return ListKeyPhrasesDetectionJobsRequest;
}(SpeakeasyBase));
export { ListKeyPhrasesDetectionJobsRequest };
var ListKeyPhrasesDetectionJobsResponse = /** @class */ (function (_super) {
    __extends(ListKeyPhrasesDetectionJobsResponse, _super);
    function ListKeyPhrasesDetectionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListKeyPhrasesDetectionJobsResponse)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "listKeyPhrasesDetectionJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeyPhrasesDetectionJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListKeyPhrasesDetectionJobsResponse;
}(SpeakeasyBase));
export { ListKeyPhrasesDetectionJobsResponse };
