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
var ListRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(ListRecommendationsQueryParams, _super);
    function ListRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListRecommendationsQueryParams.prototype, "nextToken", void 0);
    return ListRecommendationsQueryParams;
}(SpeakeasyBase));
export { ListRecommendationsQueryParams };
var ListRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(ListRecommendationsHeaders, _super);
    function ListRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListRecommendationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListRecommendationsHeaders;
}(SpeakeasyBase));
export { ListRecommendationsHeaders };
export var ListRecommendationsRequestBodyLocaleEnum;
(function (ListRecommendationsRequestBodyLocaleEnum) {
    ListRecommendationsRequestBodyLocaleEnum["DeDe"] = "DE_DE";
    ListRecommendationsRequestBodyLocaleEnum["EnUs"] = "EN_US";
    ListRecommendationsRequestBodyLocaleEnum["EnGb"] = "EN_GB";
    ListRecommendationsRequestBodyLocaleEnum["EsEs"] = "ES_ES";
    ListRecommendationsRequestBodyLocaleEnum["FrFr"] = "FR_FR";
    ListRecommendationsRequestBodyLocaleEnum["ItIt"] = "IT_IT";
    ListRecommendationsRequestBodyLocaleEnum["JaJp"] = "JA_JP";
    ListRecommendationsRequestBodyLocaleEnum["KoKr"] = "KO_KR";
    ListRecommendationsRequestBodyLocaleEnum["PtBr"] = "PT_BR";
    ListRecommendationsRequestBodyLocaleEnum["ZhCn"] = "ZH_CN";
    ListRecommendationsRequestBodyLocaleEnum["ZhTw"] = "ZH_TW";
})(ListRecommendationsRequestBodyLocaleEnum || (ListRecommendationsRequestBodyLocaleEnum = {}));
var ListRecommendationsRequestBody = /** @class */ (function (_super) {
    __extends(ListRecommendationsRequestBody, _super);
    function ListRecommendationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightId" }),
        __metadata("design:type", String)
    ], ListRecommendationsRequestBody.prototype, "insightId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locale" }),
        __metadata("design:type", String)
    ], ListRecommendationsRequestBody.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListRecommendationsRequestBody.prototype, "nextToken", void 0);
    return ListRecommendationsRequestBody;
}(SpeakeasyBase));
export { ListRecommendationsRequestBody };
var ListRecommendationsRequest = /** @class */ (function (_super) {
    __extends(ListRecommendationsRequest, _super);
    function ListRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecommendationsQueryParams)
    ], ListRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecommendationsHeaders)
    ], ListRecommendationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListRecommendationsRequestBody)
    ], ListRecommendationsRequest.prototype, "request", void 0);
    return ListRecommendationsRequest;
}(SpeakeasyBase));
export { ListRecommendationsRequest };
var ListRecommendationsResponse = /** @class */ (function (_super) {
    __extends(ListRecommendationsResponse, _super);
    function ListRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRecommendationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRecommendationsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRecommendationsResponse)
    ], ListRecommendationsResponse.prototype, "listRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRecommendationsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRecommendationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRecommendationsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRecommendationsResponse.prototype, "validationException", void 0);
    return ListRecommendationsResponse;
}(SpeakeasyBase));
export { ListRecommendationsResponse };
