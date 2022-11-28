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
var ListLoggerDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsPathParams, _super);
    function ListLoggerDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsPathParams.prototype, "loggerDefinitionId", void 0);
    return ListLoggerDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListLoggerDefinitionVersionsPathParams };
var ListLoggerDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsQueryParams, _super);
    function ListLoggerDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListLoggerDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListLoggerDefinitionVersionsQueryParams };
var ListLoggerDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsHeaders, _super);
    function ListLoggerDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListLoggerDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListLoggerDefinitionVersionsHeaders };
var ListLoggerDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsRequest, _super);
    function ListLoggerDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLoggerDefinitionVersionsPathParams)
    ], ListLoggerDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLoggerDefinitionVersionsQueryParams)
    ], ListLoggerDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLoggerDefinitionVersionsHeaders)
    ], ListLoggerDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListLoggerDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListLoggerDefinitionVersionsRequest };
var ListLoggerDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsResponse, _super);
    function ListLoggerDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLoggerDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLoggerDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLoggerDefinitionVersionsResponse)
    ], ListLoggerDefinitionVersionsResponse.prototype, "listLoggerDefinitionVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLoggerDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListLoggerDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListLoggerDefinitionVersionsResponse };
