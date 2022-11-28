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
var GetIntegrationResponsesPathParams = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsesPathParams, _super);
    function GetIntegrationResponsesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesPathParams.prototype, "integrationId", void 0);
    return GetIntegrationResponsesPathParams;
}(SpeakeasyBase));
export { GetIntegrationResponsesPathParams };
var GetIntegrationResponsesQueryParams = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsesQueryParams, _super);
    function GetIntegrationResponsesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesQueryParams.prototype, "nextToken", void 0);
    return GetIntegrationResponsesQueryParams;
}(SpeakeasyBase));
export { GetIntegrationResponsesQueryParams };
var GetIntegrationResponsesHeaders = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsesHeaders, _super);
    function GetIntegrationResponsesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetIntegrationResponsesHeaders;
}(SpeakeasyBase));
export { GetIntegrationResponsesHeaders };
var GetIntegrationResponsesRequest = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsesRequest, _super);
    function GetIntegrationResponsesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIntegrationResponsesPathParams)
    ], GetIntegrationResponsesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIntegrationResponsesQueryParams)
    ], GetIntegrationResponsesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIntegrationResponsesHeaders)
    ], GetIntegrationResponsesRequest.prototype, "headers", void 0);
    return GetIntegrationResponsesRequest;
}(SpeakeasyBase));
export { GetIntegrationResponsesRequest };
var GetIntegrationResponsesResponse = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsesResponse, _super);
    function GetIntegrationResponsesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponsesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIntegrationResponsesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetIntegrationResponsesResponse)
    ], GetIntegrationResponsesResponse.prototype, "getIntegrationResponsesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponsesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIntegrationResponsesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponsesResponse.prototype, "tooManyRequestsException", void 0);
    return GetIntegrationResponsesResponse;
}(SpeakeasyBase));
export { GetIntegrationResponsesResponse };
