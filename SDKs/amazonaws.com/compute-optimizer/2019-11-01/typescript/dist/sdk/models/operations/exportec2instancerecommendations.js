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
export var ExportEc2InstanceRecommendationsXAmzTargetEnum;
(function (ExportEc2InstanceRecommendationsXAmzTargetEnum) {
    ExportEc2InstanceRecommendationsXAmzTargetEnum["ComputeOptimizerServiceExportEc2InstanceRecommendations"] = "ComputeOptimizerService.ExportEC2InstanceRecommendations";
})(ExportEc2InstanceRecommendationsXAmzTargetEnum || (ExportEc2InstanceRecommendationsXAmzTargetEnum = {}));
var ExportEc2InstanceRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(ExportEc2InstanceRecommendationsHeaders, _super);
    function ExportEc2InstanceRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsHeaders.prototype, "xAmzTarget", void 0);
    return ExportEc2InstanceRecommendationsHeaders;
}(SpeakeasyBase));
export { ExportEc2InstanceRecommendationsHeaders };
var ExportEc2InstanceRecommendationsRequest = /** @class */ (function (_super) {
    __extends(ExportEc2InstanceRecommendationsRequest, _super);
    function ExportEc2InstanceRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportEc2InstanceRecommendationsHeaders)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExportEc2InstanceRecommendationsRequest)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "request", void 0);
    return ExportEc2InstanceRecommendationsRequest;
}(SpeakeasyBase));
export { ExportEc2InstanceRecommendationsRequest };
var ExportEc2InstanceRecommendationsResponse = /** @class */ (function (_super) {
    __extends(ExportEc2InstanceRecommendationsResponse, _super);
    function ExportEc2InstanceRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExportEc2InstanceRecommendationsResponse)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "exportEc2InstanceRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "missingAuthenticationToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "optInRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEc2InstanceRecommendationsResponse.prototype, "throttlingException", void 0);
    return ExportEc2InstanceRecommendationsResponse;
}(SpeakeasyBase));
export { ExportEc2InstanceRecommendationsResponse };
