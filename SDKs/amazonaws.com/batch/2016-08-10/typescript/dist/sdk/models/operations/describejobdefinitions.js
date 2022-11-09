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
var DescribeJobDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeJobDefinitionsQueryParams, _super);
    function DescribeJobDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsQueryParams.prototype, "nextToken", void 0);
    return DescribeJobDefinitionsQueryParams;
}(SpeakeasyBase));
export { DescribeJobDefinitionsQueryParams };
var DescribeJobDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeJobDefinitionsHeaders, _super);
    function DescribeJobDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeJobDefinitionsHeaders;
}(SpeakeasyBase));
export { DescribeJobDefinitionsHeaders };
var DescribeJobDefinitionsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeJobDefinitionsRequestBody, _super);
    function DescribeJobDefinitionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jobDefinitionName" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsRequestBody.prototype, "jobDefinitionName", void 0);
    __decorate([
        Metadata({ data: "json, name=jobDefinitions" }),
        __metadata("design:type", Array)
    ], DescribeJobDefinitionsRequestBody.prototype, "jobDefinitions", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeJobDefinitionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsRequestBody.prototype, "status", void 0);
    return DescribeJobDefinitionsRequestBody;
}(SpeakeasyBase));
export { DescribeJobDefinitionsRequestBody };
var DescribeJobDefinitionsRequest = /** @class */ (function (_super) {
    __extends(DescribeJobDefinitionsRequest, _super);
    function DescribeJobDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobDefinitionsQueryParams)
    ], DescribeJobDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobDefinitionsHeaders)
    ], DescribeJobDefinitionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeJobDefinitionsRequestBody)
    ], DescribeJobDefinitionsRequest.prototype, "request", void 0);
    return DescribeJobDefinitionsRequest;
}(SpeakeasyBase));
export { DescribeJobDefinitionsRequest };
var DescribeJobDefinitionsResponse = /** @class */ (function (_super) {
    __extends(DescribeJobDefinitionsResponse, _super);
    function DescribeJobDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobDefinitionsResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeJobDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeJobDefinitionsResponse)
    ], DescribeJobDefinitionsResponse.prototype, "describeJobDefinitionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobDefinitionsResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeJobDefinitionsResponse.prototype, "statusCode", void 0);
    return DescribeJobDefinitionsResponse;
}(SpeakeasyBase));
export { DescribeJobDefinitionsResponse };
