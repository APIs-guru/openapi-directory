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
var ListConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectionsQueryParams, _super);
    function ListConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListConnectionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListConnectionsQueryParams.prototype, "nextToken", void 0);
    return ListConnectionsQueryParams;
}(SpeakeasyBase));
export { ListConnectionsQueryParams };
export var ListConnectionsXAmzTargetEnum;
(function (ListConnectionsXAmzTargetEnum) {
    ListConnectionsXAmzTargetEnum["ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections"] = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections";
})(ListConnectionsXAmzTargetEnum || (ListConnectionsXAmzTargetEnum = {}));
var ListConnectionsHeaders = /** @class */ (function (_super) {
    __extends(ListConnectionsHeaders, _super);
    function ListConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListConnectionsHeaders.prototype, "xAmzTarget", void 0);
    return ListConnectionsHeaders;
}(SpeakeasyBase));
export { ListConnectionsHeaders };
var ListConnectionsRequest = /** @class */ (function (_super) {
    __extends(ListConnectionsRequest, _super);
    function ListConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectionsQueryParams)
    ], ListConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectionsHeaders)
    ], ListConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListConnectionsInput)
    ], ListConnectionsRequest.prototype, "request", void 0);
    return ListConnectionsRequest;
}(SpeakeasyBase));
export { ListConnectionsRequest };
var ListConnectionsResponse = /** @class */ (function (_super) {
    __extends(ListConnectionsResponse, _super);
    function ListConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListConnectionsOutput)
    ], ListConnectionsResponse.prototype, "listConnectionsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConnectionsResponse.prototype, "statusCode", void 0);
    return ListConnectionsResponse;
}(SpeakeasyBase));
export { ListConnectionsResponse };
