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
export var GetEc2RecommendationProjectedMetricsXAmzTargetEnum;
(function (GetEc2RecommendationProjectedMetricsXAmzTargetEnum) {
    GetEc2RecommendationProjectedMetricsXAmzTargetEnum["ComputeOptimizerServiceGetEc2RecommendationProjectedMetrics"] = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics";
})(GetEc2RecommendationProjectedMetricsXAmzTargetEnum || (GetEc2RecommendationProjectedMetricsXAmzTargetEnum = {}));
var GetEc2RecommendationProjectedMetricsHeaders = /** @class */ (function (_super) {
    __extends(GetEc2RecommendationProjectedMetricsHeaders, _super);
    function GetEc2RecommendationProjectedMetricsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsHeaders.prototype, "xAmzTarget", void 0);
    return GetEc2RecommendationProjectedMetricsHeaders;
}(SpeakeasyBase));
export { GetEc2RecommendationProjectedMetricsHeaders };
var GetEc2RecommendationProjectedMetricsRequest = /** @class */ (function (_super) {
    __extends(GetEc2RecommendationProjectedMetricsRequest, _super);
    function GetEc2RecommendationProjectedMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEc2RecommendationProjectedMetricsHeaders)
    ], GetEc2RecommendationProjectedMetricsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetEc2RecommendationProjectedMetricsRequest)
    ], GetEc2RecommendationProjectedMetricsRequest.prototype, "request", void 0);
    return GetEc2RecommendationProjectedMetricsRequest;
}(SpeakeasyBase));
export { GetEc2RecommendationProjectedMetricsRequest };
var GetEc2RecommendationProjectedMetricsResponse = /** @class */ (function (_super) {
    __extends(GetEc2RecommendationProjectedMetricsResponse, _super);
    function GetEc2RecommendationProjectedMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetEc2RecommendationProjectedMetricsResponse)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "getEc2RecommendationProjectedMetricsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "missingAuthenticationToken", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "optInRequiredException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEc2RecommendationProjectedMetricsResponse.prototype, "throttlingException", void 0);
    return GetEc2RecommendationProjectedMetricsResponse;
}(SpeakeasyBase));
export { GetEc2RecommendationProjectedMetricsResponse };
