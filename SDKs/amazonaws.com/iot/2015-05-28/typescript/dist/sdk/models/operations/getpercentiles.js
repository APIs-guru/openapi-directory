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
var GetPercentilesHeaders = /** @class */ (function (_super) {
    __extends(GetPercentilesHeaders, _super);
    function GetPercentilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPercentilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPercentilesHeaders;
}(SpeakeasyBase));
export { GetPercentilesHeaders };
var GetPercentilesRequestBody = /** @class */ (function (_super) {
    __extends(GetPercentilesRequestBody, _super);
    function GetPercentilesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationField" }),
        __metadata("design:type", String)
    ], GetPercentilesRequestBody.prototype, "aggregationField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], GetPercentilesRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percents" }),
        __metadata("design:type", Array)
    ], GetPercentilesRequestBody.prototype, "percents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], GetPercentilesRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], GetPercentilesRequestBody.prototype, "queryVersion", void 0);
    return GetPercentilesRequestBody;
}(SpeakeasyBase));
export { GetPercentilesRequestBody };
var GetPercentilesRequest = /** @class */ (function (_super) {
    __extends(GetPercentilesRequest, _super);
    function GetPercentilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPercentilesHeaders)
    ], GetPercentilesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetPercentilesRequestBody)
    ], GetPercentilesRequest.prototype, "request", void 0);
    return GetPercentilesRequest;
}(SpeakeasyBase));
export { GetPercentilesRequest };
var GetPercentilesResponse = /** @class */ (function (_super) {
    __extends(GetPercentilesResponse, _super);
    function GetPercentilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPercentilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPercentilesResponse)
    ], GetPercentilesResponse.prototype, "getPercentilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "indexNotReadyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "invalidAggregationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPercentilesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPercentilesResponse.prototype, "unauthorizedException", void 0);
    return GetPercentilesResponse;
}(SpeakeasyBase));
export { GetPercentilesResponse };
