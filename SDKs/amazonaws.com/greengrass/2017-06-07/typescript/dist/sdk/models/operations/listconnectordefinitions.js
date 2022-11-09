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
var ListConnectorDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionsQueryParams, _super);
    function ListConnectorDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsQueryParams.prototype, "nextToken", void 0);
    return ListConnectorDefinitionsQueryParams;
}(SpeakeasyBase));
export { ListConnectorDefinitionsQueryParams };
var ListConnectorDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionsHeaders, _super);
    function ListConnectorDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListConnectorDefinitionsHeaders;
}(SpeakeasyBase));
export { ListConnectorDefinitionsHeaders };
var ListConnectorDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionsRequest, _super);
    function ListConnectorDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectorDefinitionsQueryParams)
    ], ListConnectorDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectorDefinitionsHeaders)
    ], ListConnectorDefinitionsRequest.prototype, "headers", void 0);
    return ListConnectorDefinitionsRequest;
}(SpeakeasyBase));
export { ListConnectorDefinitionsRequest };
var ListConnectorDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionsResponse, _super);
    function ListConnectorDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConnectorDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListConnectorDefinitionsResponse)
    ], ListConnectorDefinitionsResponse.prototype, "listConnectorDefinitionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConnectorDefinitionsResponse.prototype, "statusCode", void 0);
    return ListConnectorDefinitionsResponse;
}(SpeakeasyBase));
export { ListConnectorDefinitionsResponse };
