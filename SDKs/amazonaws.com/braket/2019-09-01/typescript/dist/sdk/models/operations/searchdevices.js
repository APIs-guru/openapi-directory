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
var SearchDevicesQueryParams = /** @class */ (function (_super) {
    __extends(SearchDevicesQueryParams, _super);
    function SearchDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], SearchDevicesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], SearchDevicesQueryParams.prototype, "nextToken", void 0);
    return SearchDevicesQueryParams;
}(SpeakeasyBase));
export { SearchDevicesQueryParams };
var SearchDevicesHeaders = /** @class */ (function (_super) {
    __extends(SearchDevicesHeaders, _super);
    function SearchDevicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchDevicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SearchDevicesHeaders;
}(SpeakeasyBase));
export { SearchDevicesHeaders };
var SearchDevicesRequestBody = /** @class */ (function (_super) {
    __extends(SearchDevicesRequestBody, _super);
    function SearchDevicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SearchDevicesFilter }),
        __metadata("design:type", Array)
    ], SearchDevicesRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], SearchDevicesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], SearchDevicesRequestBody.prototype, "nextToken", void 0);
    return SearchDevicesRequestBody;
}(SpeakeasyBase));
export { SearchDevicesRequestBody };
var SearchDevicesRequest = /** @class */ (function (_super) {
    __extends(SearchDevicesRequest, _super);
    function SearchDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchDevicesQueryParams)
    ], SearchDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchDevicesHeaders)
    ], SearchDevicesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchDevicesRequestBody)
    ], SearchDevicesRequest.prototype, "request", void 0);
    return SearchDevicesRequest;
}(SpeakeasyBase));
export { SearchDevicesRequest };
var SearchDevicesResponse = /** @class */ (function (_super) {
    __extends(SearchDevicesResponse, _super);
    function SearchDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchDevicesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchDevicesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchDevicesResponse)
    ], SearchDevicesResponse.prototype, "searchDevicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchDevicesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchDevicesResponse.prototype, "validationException", void 0);
    return SearchDevicesResponse;
}(SpeakeasyBase));
export { SearchDevicesResponse };
