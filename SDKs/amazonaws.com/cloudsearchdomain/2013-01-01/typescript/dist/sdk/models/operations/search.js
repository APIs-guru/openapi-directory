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
export var SearchFormatEnum;
(function (SearchFormatEnum) {
    SearchFormatEnum["Sdk"] = "sdk";
})(SearchFormatEnum || (SearchFormatEnum = {}));
export var SearchPrettyEnum;
(function (SearchPrettyEnum) {
    SearchPrettyEnum["True"] = "true";
})(SearchPrettyEnum || (SearchPrettyEnum = {}));
export var SearchQParserEnum;
(function (SearchQParserEnum) {
    SearchQParserEnum["Simple"] = "simple";
    SearchQParserEnum["Structured"] = "structured";
    SearchQParserEnum["Lucene"] = "lucene";
    SearchQParserEnum["Dismax"] = "dismax";
})(SearchQParserEnum || (SearchQParserEnum = {}));
var SearchQueryParams = /** @class */ (function (_super) {
    __extends(SearchQueryParams, _super);
    function SearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expr" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "expr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "facet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fq" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "fq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highlight" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "highlight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partial" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "partial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "pretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q.options" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "qOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q.parser" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "qParser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "return", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "stats", void 0);
    return SearchQueryParams;
}(SpeakeasyBase));
export { SearchQueryParams };
var SearchHeaders = /** @class */ (function (_super) {
    __extends(SearchHeaders, _super);
    function SearchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SearchHeaders;
}(SpeakeasyBase));
export { SearchHeaders };
var SearchRequest = /** @class */ (function (_super) {
    __extends(SearchRequest, _super);
    function SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchQueryParams)
    ], SearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchHeaders)
    ], SearchRequest.prototype, "headers", void 0);
    return SearchRequest;
}(SpeakeasyBase));
export { SearchRequest };
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchException)
    ], SearchResponse.prototype, "searchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], SearchResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchResponse.prototype, "statusCode", void 0);
    return SearchResponse;
}(SpeakeasyBase));
export { SearchResponse };
