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
var SearchQuantumTasksQueryParams = /** @class */ (function (_super) {
    __extends(SearchQuantumTasksQueryParams, _super);
    function SearchQuantumTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksQueryParams.prototype, "nextToken", void 0);
    return SearchQuantumTasksQueryParams;
}(SpeakeasyBase));
export { SearchQuantumTasksQueryParams };
var SearchQuantumTasksHeaders = /** @class */ (function (_super) {
    __extends(SearchQuantumTasksHeaders, _super);
    function SearchQuantumTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SearchQuantumTasksHeaders;
}(SpeakeasyBase));
export { SearchQuantumTasksHeaders };
var SearchQuantumTasksRequestBody = /** @class */ (function (_super) {
    __extends(SearchQuantumTasksRequestBody, _super);
    function SearchQuantumTasksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.SearchQuantumTasksFilter }),
        __metadata("design:type", Array)
    ], SearchQuantumTasksRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], SearchQuantumTasksRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], SearchQuantumTasksRequestBody.prototype, "nextToken", void 0);
    return SearchQuantumTasksRequestBody;
}(SpeakeasyBase));
export { SearchQuantumTasksRequestBody };
var SearchQuantumTasksRequest = /** @class */ (function (_super) {
    __extends(SearchQuantumTasksRequest, _super);
    function SearchQuantumTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchQuantumTasksQueryParams)
    ], SearchQuantumTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchQuantumTasksHeaders)
    ], SearchQuantumTasksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchQuantumTasksRequestBody)
    ], SearchQuantumTasksRequest.prototype, "request", void 0);
    return SearchQuantumTasksRequest;
}(SpeakeasyBase));
export { SearchQuantumTasksRequest };
var SearchQuantumTasksResponse = /** @class */ (function (_super) {
    __extends(SearchQuantumTasksResponse, _super);
    function SearchQuantumTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchQuantumTasksResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchQuantumTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchQuantumTasksResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchQuantumTasksResponse)
    ], SearchQuantumTasksResponse.prototype, "searchQuantumTasksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchQuantumTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchQuantumTasksResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchQuantumTasksResponse.prototype, "validationException", void 0);
    return SearchQuantumTasksResponse;
}(SpeakeasyBase));
export { SearchQuantumTasksResponse };
