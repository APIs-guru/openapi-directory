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
var ListLoggerDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionsQueryParams, _super);
    function ListLoggerDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsQueryParams.prototype, "nextToken", void 0);
    return ListLoggerDefinitionsQueryParams;
}(SpeakeasyBase));
export { ListLoggerDefinitionsQueryParams };
var ListLoggerDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionsHeaders, _super);
    function ListLoggerDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListLoggerDefinitionsHeaders;
}(SpeakeasyBase));
export { ListLoggerDefinitionsHeaders };
var ListLoggerDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionsRequest, _super);
    function ListLoggerDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListLoggerDefinitionsQueryParams)
    ], ListLoggerDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListLoggerDefinitionsHeaders)
    ], ListLoggerDefinitionsRequest.prototype, "headers", void 0);
    return ListLoggerDefinitionsRequest;
}(SpeakeasyBase));
export { ListLoggerDefinitionsRequest };
var ListLoggerDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionsResponse, _super);
    function ListLoggerDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListLoggerDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLoggerDefinitionsResponse)
    ], ListLoggerDefinitionsResponse.prototype, "listLoggerDefinitionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListLoggerDefinitionsResponse.prototype, "statusCode", void 0);
    return ListLoggerDefinitionsResponse;
}(SpeakeasyBase));
export { ListLoggerDefinitionsResponse };
