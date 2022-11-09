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
var ListDatasetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListDatasetGroupsQueryParams, _super);
    function ListDatasetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsQueryParams.prototype, "nextToken", void 0);
    return ListDatasetGroupsQueryParams;
}(SpeakeasyBase));
export { ListDatasetGroupsQueryParams };
export var ListDatasetGroupsXAmzTargetEnum;
(function (ListDatasetGroupsXAmzTargetEnum) {
    ListDatasetGroupsXAmzTargetEnum["AmazonForecastListDatasetGroups"] = "AmazonForecast.ListDatasetGroups";
})(ListDatasetGroupsXAmzTargetEnum || (ListDatasetGroupsXAmzTargetEnum = {}));
var ListDatasetGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListDatasetGroupsHeaders, _super);
    function ListDatasetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDatasetGroupsHeaders.prototype, "xAmzTarget", void 0);
    return ListDatasetGroupsHeaders;
}(SpeakeasyBase));
export { ListDatasetGroupsHeaders };
var ListDatasetGroupsRequest = /** @class */ (function (_super) {
    __extends(ListDatasetGroupsRequest, _super);
    function ListDatasetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetGroupsQueryParams)
    ], ListDatasetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetGroupsHeaders)
    ], ListDatasetGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDatasetGroupsRequest)
    ], ListDatasetGroupsRequest.prototype, "request", void 0);
    return ListDatasetGroupsRequest;
}(SpeakeasyBase));
export { ListDatasetGroupsRequest };
var ListDatasetGroupsResponse = /** @class */ (function (_super) {
    __extends(ListDatasetGroupsResponse, _super);
    function ListDatasetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDatasetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDatasetGroupsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDatasetGroupsResponse)
    ], ListDatasetGroupsResponse.prototype, "listDatasetGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDatasetGroupsResponse.prototype, "statusCode", void 0);
    return ListDatasetGroupsResponse;
}(SpeakeasyBase));
export { ListDatasetGroupsResponse };
