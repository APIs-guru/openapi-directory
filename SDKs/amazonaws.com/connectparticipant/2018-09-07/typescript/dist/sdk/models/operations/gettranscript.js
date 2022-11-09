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
var GetTranscriptQueryParams = /** @class */ (function (_super) {
    __extends(GetTranscriptQueryParams, _super);
    function GetTranscriptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetTranscriptQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetTranscriptQueryParams.prototype, "nextToken", void 0);
    return GetTranscriptQueryParams;
}(SpeakeasyBase));
export { GetTranscriptQueryParams };
var GetTranscriptHeaders = /** @class */ (function (_super) {
    __extends(GetTranscriptHeaders, _super);
    function GetTranscriptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzBearer", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTranscriptHeaders;
}(SpeakeasyBase));
export { GetTranscriptHeaders };
export var GetTranscriptRequestBodyScanDirectionEnum;
(function (GetTranscriptRequestBodyScanDirectionEnum) {
    GetTranscriptRequestBodyScanDirectionEnum["Forward"] = "FORWARD";
    GetTranscriptRequestBodyScanDirectionEnum["Backward"] = "BACKWARD";
})(GetTranscriptRequestBodyScanDirectionEnum || (GetTranscriptRequestBodyScanDirectionEnum = {}));
export var GetTranscriptRequestBodySortOrderEnum;
(function (GetTranscriptRequestBodySortOrderEnum) {
    GetTranscriptRequestBodySortOrderEnum["Descending"] = "DESCENDING";
    GetTranscriptRequestBodySortOrderEnum["Ascending"] = "ASCENDING";
})(GetTranscriptRequestBodySortOrderEnum || (GetTranscriptRequestBodySortOrderEnum = {}));
// GetTranscriptRequestBodyStartPosition
/**
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
**/
var GetTranscriptRequestBodyStartPosition = /** @class */ (function (_super) {
    __extends(GetTranscriptRequestBodyStartPosition, _super);
    function GetTranscriptRequestBodyStartPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AbsoluteTime" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBodyStartPosition.prototype, "absoluteTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBodyStartPosition.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=MostRecent" }),
        __metadata("design:type", Number)
    ], GetTranscriptRequestBodyStartPosition.prototype, "mostRecent", void 0);
    return GetTranscriptRequestBodyStartPosition;
}(SpeakeasyBase));
export { GetTranscriptRequestBodyStartPosition };
var GetTranscriptRequestBody = /** @class */ (function (_super) {
    __extends(GetTranscriptRequestBody, _super);
    function GetTranscriptRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ContactId" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "contactId", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetTranscriptRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=ScanDirection" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "scanDirection", void 0);
    __decorate([
        Metadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "sortOrder", void 0);
    __decorate([
        Metadata({ data: "json, name=StartPosition" }),
        __metadata("design:type", GetTranscriptRequestBodyStartPosition)
    ], GetTranscriptRequestBody.prototype, "startPosition", void 0);
    return GetTranscriptRequestBody;
}(SpeakeasyBase));
export { GetTranscriptRequestBody };
var GetTranscriptRequest = /** @class */ (function (_super) {
    __extends(GetTranscriptRequest, _super);
    function GetTranscriptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTranscriptQueryParams)
    ], GetTranscriptRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTranscriptHeaders)
    ], GetTranscriptRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTranscriptRequestBody)
    ], GetTranscriptRequest.prototype, "request", void 0);
    return GetTranscriptRequest;
}(SpeakeasyBase));
export { GetTranscriptRequest };
var GetTranscriptResponse = /** @class */ (function (_super) {
    __extends(GetTranscriptResponse, _super);
    function GetTranscriptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTranscriptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetTranscriptResponse)
    ], GetTranscriptResponse.prototype, "getTranscriptResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTranscriptResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "validationException", void 0);
    return GetTranscriptResponse;
}(SpeakeasyBase));
export { GetTranscriptResponse };
