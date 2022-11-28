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
var ListAnalyzedResourcesQueryParams = /** @class */ (function (_super) {
    __extends(ListAnalyzedResourcesQueryParams, _super);
    function ListAnalyzedResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesQueryParams.prototype, "nextToken", void 0);
    return ListAnalyzedResourcesQueryParams;
}(SpeakeasyBase));
export { ListAnalyzedResourcesQueryParams };
var ListAnalyzedResourcesHeaders = /** @class */ (function (_super) {
    __extends(ListAnalyzedResourcesHeaders, _super);
    function ListAnalyzedResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAnalyzedResourcesHeaders;
}(SpeakeasyBase));
export { ListAnalyzedResourcesHeaders };
export var ListAnalyzedResourcesRequestBodyResourceTypeEnum;
(function (ListAnalyzedResourcesRequestBodyResourceTypeEnum) {
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsS3Bucket"] = "AWS::S3::Bucket";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsIamRole"] = "AWS::IAM::Role";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsSqsQueue"] = "AWS::SQS::Queue";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsLambdaFunction"] = "AWS::Lambda::Function";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsLambdaLayerVersion"] = "AWS::Lambda::LayerVersion";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsKmsKey"] = "AWS::KMS::Key";
    ListAnalyzedResourcesRequestBodyResourceTypeEnum["AwsSecretsManagerSecret"] = "AWS::SecretsManager::Secret";
})(ListAnalyzedResourcesRequestBodyResourceTypeEnum || (ListAnalyzedResourcesRequestBodyResourceTypeEnum = {}));
var ListAnalyzedResourcesRequestBody = /** @class */ (function (_super) {
    __extends(ListAnalyzedResourcesRequestBody, _super);
    function ListAnalyzedResourcesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzerArn" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesRequestBody.prototype, "analyzerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAnalyzedResourcesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesRequestBody.prototype, "resourceType", void 0);
    return ListAnalyzedResourcesRequestBody;
}(SpeakeasyBase));
export { ListAnalyzedResourcesRequestBody };
var ListAnalyzedResourcesRequest = /** @class */ (function (_super) {
    __extends(ListAnalyzedResourcesRequest, _super);
    function ListAnalyzedResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnalyzedResourcesQueryParams)
    ], ListAnalyzedResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnalyzedResourcesHeaders)
    ], ListAnalyzedResourcesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAnalyzedResourcesRequestBody)
    ], ListAnalyzedResourcesRequest.prototype, "request", void 0);
    return ListAnalyzedResourcesRequest;
}(SpeakeasyBase));
export { ListAnalyzedResourcesRequest };
var ListAnalyzedResourcesResponse = /** @class */ (function (_super) {
    __extends(ListAnalyzedResourcesResponse, _super);
    function ListAnalyzedResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnalyzedResourcesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAnalyzedResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnalyzedResourcesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAnalyzedResourcesResponse)
    ], ListAnalyzedResourcesResponse.prototype, "listAnalyzedResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnalyzedResourcesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAnalyzedResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnalyzedResourcesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnalyzedResourcesResponse.prototype, "validationException", void 0);
    return ListAnalyzedResourcesResponse;
}(SpeakeasyBase));
export { ListAnalyzedResourcesResponse };
