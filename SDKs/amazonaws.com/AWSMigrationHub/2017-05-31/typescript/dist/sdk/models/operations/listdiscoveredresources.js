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
var ListDiscoveredResourcesQueryParams = /** @class */ (function (_super) {
    __extends(ListDiscoveredResourcesQueryParams, _super);
    function ListDiscoveredResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesQueryParams.prototype, "nextToken", void 0);
    return ListDiscoveredResourcesQueryParams;
}(SpeakeasyBase));
export { ListDiscoveredResourcesQueryParams };
export var ListDiscoveredResourcesXAmzTargetEnum;
(function (ListDiscoveredResourcesXAmzTargetEnum) {
    ListDiscoveredResourcesXAmzTargetEnum["AwsMigrationHubListDiscoveredResources"] = "AWSMigrationHub.ListDiscoveredResources";
})(ListDiscoveredResourcesXAmzTargetEnum || (ListDiscoveredResourcesXAmzTargetEnum = {}));
var ListDiscoveredResourcesHeaders = /** @class */ (function (_super) {
    __extends(ListDiscoveredResourcesHeaders, _super);
    function ListDiscoveredResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesHeaders.prototype, "xAmzTarget", void 0);
    return ListDiscoveredResourcesHeaders;
}(SpeakeasyBase));
export { ListDiscoveredResourcesHeaders };
var ListDiscoveredResourcesRequest = /** @class */ (function (_super) {
    __extends(ListDiscoveredResourcesRequest, _super);
    function ListDiscoveredResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDiscoveredResourcesQueryParams)
    ], ListDiscoveredResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDiscoveredResourcesHeaders)
    ], ListDiscoveredResourcesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDiscoveredResourcesRequest)
    ], ListDiscoveredResourcesRequest.prototype, "request", void 0);
    return ListDiscoveredResourcesRequest;
}(SpeakeasyBase));
export { ListDiscoveredResourcesRequest };
var ListDiscoveredResourcesResponse = /** @class */ (function (_super) {
    __extends(ListDiscoveredResourcesResponse, _super);
    function ListDiscoveredResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDiscoveredResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDiscoveredResourcesResult)
    ], ListDiscoveredResourcesResponse.prototype, "listDiscoveredResourcesResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDiscoveredResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDiscoveredResourcesResponse.prototype, "throttlingException", void 0);
    return ListDiscoveredResourcesResponse;
}(SpeakeasyBase));
export { ListDiscoveredResourcesResponse };
