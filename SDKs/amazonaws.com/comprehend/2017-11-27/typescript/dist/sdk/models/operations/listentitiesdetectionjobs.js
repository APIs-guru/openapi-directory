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
var ListEntitiesDetectionJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListEntitiesDetectionJobsQueryParams, _super);
    function ListEntitiesDetectionJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsQueryParams.prototype, "nextToken", void 0);
    return ListEntitiesDetectionJobsQueryParams;
}(SpeakeasyBase));
export { ListEntitiesDetectionJobsQueryParams };
export var ListEntitiesDetectionJobsXAmzTargetEnum;
(function (ListEntitiesDetectionJobsXAmzTargetEnum) {
    ListEntitiesDetectionJobsXAmzTargetEnum["Comprehend20171127ListEntitiesDetectionJobs"] = "Comprehend_20171127.ListEntitiesDetectionJobs";
})(ListEntitiesDetectionJobsXAmzTargetEnum || (ListEntitiesDetectionJobsXAmzTargetEnum = {}));
var ListEntitiesDetectionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListEntitiesDetectionJobsHeaders, _super);
    function ListEntitiesDetectionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListEntitiesDetectionJobsHeaders;
}(SpeakeasyBase));
export { ListEntitiesDetectionJobsHeaders };
var ListEntitiesDetectionJobsRequest = /** @class */ (function (_super) {
    __extends(ListEntitiesDetectionJobsRequest, _super);
    function ListEntitiesDetectionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEntitiesDetectionJobsQueryParams)
    ], ListEntitiesDetectionJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEntitiesDetectionJobsHeaders)
    ], ListEntitiesDetectionJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListEntitiesDetectionJobsRequest)
    ], ListEntitiesDetectionJobsRequest.prototype, "request", void 0);
    return ListEntitiesDetectionJobsRequest;
}(SpeakeasyBase));
export { ListEntitiesDetectionJobsRequest };
var ListEntitiesDetectionJobsResponse = /** @class */ (function (_super) {
    __extends(ListEntitiesDetectionJobsResponse, _super);
    function ListEntitiesDetectionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEntitiesDetectionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesDetectionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesDetectionJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesDetectionJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEntitiesDetectionJobsResponse)
    ], ListEntitiesDetectionJobsResponse.prototype, "listEntitiesDetectionJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEntitiesDetectionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesDetectionJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListEntitiesDetectionJobsResponse;
}(SpeakeasyBase));
export { ListEntitiesDetectionJobsResponse };
