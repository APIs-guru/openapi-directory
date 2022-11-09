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
export var ListKeywordsForDataSourceSourceEnum;
(function (ListKeywordsForDataSourceSourceEnum) {
    ListKeywordsForDataSourceSourceEnum["AwsCloudtrail"] = "AWS_Cloudtrail";
    ListKeywordsForDataSourceSourceEnum["AwsConfig"] = "AWS_Config";
    ListKeywordsForDataSourceSourceEnum["AwsSecurityHub"] = "AWS_Security_Hub";
    ListKeywordsForDataSourceSourceEnum["AwsApiCall"] = "AWS_API_Call";
    ListKeywordsForDataSourceSourceEnum["Manual"] = "MANUAL";
})(ListKeywordsForDataSourceSourceEnum || (ListKeywordsForDataSourceSourceEnum = {}));
var ListKeywordsForDataSourceQueryParams = /** @class */ (function (_super) {
    __extends(ListKeywordsForDataSourceQueryParams, _super);
    function ListKeywordsForDataSourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListKeywordsForDataSourceQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceQueryParams.prototype, "source", void 0);
    return ListKeywordsForDataSourceQueryParams;
}(SpeakeasyBase));
export { ListKeywordsForDataSourceQueryParams };
var ListKeywordsForDataSourceHeaders = /** @class */ (function (_super) {
    __extends(ListKeywordsForDataSourceHeaders, _super);
    function ListKeywordsForDataSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListKeywordsForDataSourceHeaders;
}(SpeakeasyBase));
export { ListKeywordsForDataSourceHeaders };
var ListKeywordsForDataSourceRequest = /** @class */ (function (_super) {
    __extends(ListKeywordsForDataSourceRequest, _super);
    function ListKeywordsForDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeywordsForDataSourceQueryParams)
    ], ListKeywordsForDataSourceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeywordsForDataSourceHeaders)
    ], ListKeywordsForDataSourceRequest.prototype, "headers", void 0);
    return ListKeywordsForDataSourceRequest;
}(SpeakeasyBase));
export { ListKeywordsForDataSourceRequest };
var ListKeywordsForDataSourceResponse = /** @class */ (function (_super) {
    __extends(ListKeywordsForDataSourceResponse, _super);
    function ListKeywordsForDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeywordsForDataSourceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListKeywordsForDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeywordsForDataSourceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListKeywordsForDataSourceResponse)
    ], ListKeywordsForDataSourceResponse.prototype, "listKeywordsForDataSourceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListKeywordsForDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListKeywordsForDataSourceResponse.prototype, "validationException", void 0);
    return ListKeywordsForDataSourceResponse;
}(SpeakeasyBase));
export { ListKeywordsForDataSourceResponse };
