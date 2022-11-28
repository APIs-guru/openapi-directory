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
var GetBucketsAggregationHeaders = /** @class */ (function (_super) {
    __extends(GetBucketsAggregationHeaders, _super);
    function GetBucketsAggregationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBucketsAggregationHeaders;
}(SpeakeasyBase));
export { GetBucketsAggregationHeaders };
// GetBucketsAggregationRequestBodyBucketsAggregationType
/**
 * The type of bucketed aggregation performed.
**/
var GetBucketsAggregationRequestBodyBucketsAggregationType = /** @class */ (function (_super) {
    __extends(GetBucketsAggregationRequestBodyBucketsAggregationType, _super);
    function GetBucketsAggregationRequestBodyBucketsAggregationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAggregation" }),
        __metadata("design:type", shared.TermsAggregation)
    ], GetBucketsAggregationRequestBodyBucketsAggregationType.prototype, "termsAggregation", void 0);
    return GetBucketsAggregationRequestBodyBucketsAggregationType;
}(SpeakeasyBase));
export { GetBucketsAggregationRequestBodyBucketsAggregationType };
var GetBucketsAggregationRequestBody = /** @class */ (function (_super) {
    __extends(GetBucketsAggregationRequestBody, _super);
    function GetBucketsAggregationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationField" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationRequestBody.prototype, "aggregationField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketsAggregationType" }),
        __metadata("design:type", GetBucketsAggregationRequestBodyBucketsAggregationType)
    ], GetBucketsAggregationRequestBody.prototype, "bucketsAggregationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], GetBucketsAggregationRequestBody.prototype, "queryVersion", void 0);
    return GetBucketsAggregationRequestBody;
}(SpeakeasyBase));
export { GetBucketsAggregationRequestBody };
var GetBucketsAggregationRequest = /** @class */ (function (_super) {
    __extends(GetBucketsAggregationRequest, _super);
    function GetBucketsAggregationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBucketsAggregationHeaders)
    ], GetBucketsAggregationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetBucketsAggregationRequestBody)
    ], GetBucketsAggregationRequest.prototype, "request", void 0);
    return GetBucketsAggregationRequest;
}(SpeakeasyBase));
export { GetBucketsAggregationRequest };
var GetBucketsAggregationResponse = /** @class */ (function (_super) {
    __extends(GetBucketsAggregationResponse, _super);
    function GetBucketsAggregationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBucketsAggregationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBucketsAggregationResponse)
    ], GetBucketsAggregationResponse.prototype, "getBucketsAggregationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "indexNotReadyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "invalidAggregationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBucketsAggregationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBucketsAggregationResponse.prototype, "unauthorizedException", void 0);
    return GetBucketsAggregationResponse;
}(SpeakeasyBase));
export { GetBucketsAggregationResponse };
