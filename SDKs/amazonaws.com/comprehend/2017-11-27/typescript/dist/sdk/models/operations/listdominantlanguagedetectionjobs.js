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
var ListDominantLanguageDetectionJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListDominantLanguageDetectionJobsQueryParams, _super);
    function ListDominantLanguageDetectionJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsQueryParams.prototype, "nextToken", void 0);
    return ListDominantLanguageDetectionJobsQueryParams;
}(SpeakeasyBase));
export { ListDominantLanguageDetectionJobsQueryParams };
export var ListDominantLanguageDetectionJobsXAmzTargetEnum;
(function (ListDominantLanguageDetectionJobsXAmzTargetEnum) {
    ListDominantLanguageDetectionJobsXAmzTargetEnum["Comprehend20171127ListDominantLanguageDetectionJobs"] = "Comprehend_20171127.ListDominantLanguageDetectionJobs";
})(ListDominantLanguageDetectionJobsXAmzTargetEnum || (ListDominantLanguageDetectionJobsXAmzTargetEnum = {}));
var ListDominantLanguageDetectionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListDominantLanguageDetectionJobsHeaders, _super);
    function ListDominantLanguageDetectionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListDominantLanguageDetectionJobsHeaders;
}(SpeakeasyBase));
export { ListDominantLanguageDetectionJobsHeaders };
var ListDominantLanguageDetectionJobsRequest = /** @class */ (function (_super) {
    __extends(ListDominantLanguageDetectionJobsRequest, _super);
    function ListDominantLanguageDetectionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDominantLanguageDetectionJobsQueryParams)
    ], ListDominantLanguageDetectionJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDominantLanguageDetectionJobsHeaders)
    ], ListDominantLanguageDetectionJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDominantLanguageDetectionJobsRequest)
    ], ListDominantLanguageDetectionJobsRequest.prototype, "request", void 0);
    return ListDominantLanguageDetectionJobsRequest;
}(SpeakeasyBase));
export { ListDominantLanguageDetectionJobsRequest };
var ListDominantLanguageDetectionJobsResponse = /** @class */ (function (_super) {
    __extends(ListDominantLanguageDetectionJobsResponse, _super);
    function ListDominantLanguageDetectionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDominantLanguageDetectionJobsResponse)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "listDominantLanguageDetectionJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDominantLanguageDetectionJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListDominantLanguageDetectionJobsResponse;
}(SpeakeasyBase));
export { ListDominantLanguageDetectionJobsResponse };
