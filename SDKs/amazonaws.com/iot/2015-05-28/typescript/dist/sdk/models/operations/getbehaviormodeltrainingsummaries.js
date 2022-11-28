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
var GetBehaviorModelTrainingSummariesQueryParams = /** @class */ (function (_super) {
    __extends(GetBehaviorModelTrainingSummariesQueryParams, _super);
    function GetBehaviorModelTrainingSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetBehaviorModelTrainingSummariesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesQueryParams.prototype, "securityProfileName", void 0);
    return GetBehaviorModelTrainingSummariesQueryParams;
}(SpeakeasyBase));
export { GetBehaviorModelTrainingSummariesQueryParams };
var GetBehaviorModelTrainingSummariesHeaders = /** @class */ (function (_super) {
    __extends(GetBehaviorModelTrainingSummariesHeaders, _super);
    function GetBehaviorModelTrainingSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBehaviorModelTrainingSummariesHeaders;
}(SpeakeasyBase));
export { GetBehaviorModelTrainingSummariesHeaders };
var GetBehaviorModelTrainingSummariesRequest = /** @class */ (function (_super) {
    __extends(GetBehaviorModelTrainingSummariesRequest, _super);
    function GetBehaviorModelTrainingSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBehaviorModelTrainingSummariesQueryParams)
    ], GetBehaviorModelTrainingSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBehaviorModelTrainingSummariesHeaders)
    ], GetBehaviorModelTrainingSummariesRequest.prototype, "headers", void 0);
    return GetBehaviorModelTrainingSummariesRequest;
}(SpeakeasyBase));
export { GetBehaviorModelTrainingSummariesRequest };
var GetBehaviorModelTrainingSummariesResponse = /** @class */ (function (_super) {
    __extends(GetBehaviorModelTrainingSummariesResponse, _super);
    function GetBehaviorModelTrainingSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBehaviorModelTrainingSummariesResponse)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "getBehaviorModelTrainingSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBehaviorModelTrainingSummariesResponse.prototype, "throttlingException", void 0);
    return GetBehaviorModelTrainingSummariesResponse;
}(SpeakeasyBase));
export { GetBehaviorModelTrainingSummariesResponse };
