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
export var ExportEbsVolumeRecommendationsXAmzTargetEnum;
(function (ExportEbsVolumeRecommendationsXAmzTargetEnum) {
    ExportEbsVolumeRecommendationsXAmzTargetEnum["ComputeOptimizerServiceExportEbsVolumeRecommendations"] = "ComputeOptimizerService.ExportEBSVolumeRecommendations";
})(ExportEbsVolumeRecommendationsXAmzTargetEnum || (ExportEbsVolumeRecommendationsXAmzTargetEnum = {}));
var ExportEbsVolumeRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(ExportEbsVolumeRecommendationsHeaders, _super);
    function ExportEbsVolumeRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsHeaders.prototype, "xAmzTarget", void 0);
    return ExportEbsVolumeRecommendationsHeaders;
}(SpeakeasyBase));
export { ExportEbsVolumeRecommendationsHeaders };
var ExportEbsVolumeRecommendationsRequest = /** @class */ (function (_super) {
    __extends(ExportEbsVolumeRecommendationsRequest, _super);
    function ExportEbsVolumeRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportEbsVolumeRecommendationsHeaders)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExportEbsVolumeRecommendationsRequest)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "request", void 0);
    return ExportEbsVolumeRecommendationsRequest;
}(SpeakeasyBase));
export { ExportEbsVolumeRecommendationsRequest };
var ExportEbsVolumeRecommendationsResponse = /** @class */ (function (_super) {
    __extends(ExportEbsVolumeRecommendationsResponse, _super);
    function ExportEbsVolumeRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExportEbsVolumeRecommendationsResponse)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "exportEbsVolumeRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "missingAuthenticationToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "optInRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExportEbsVolumeRecommendationsResponse.prototype, "throttlingException", void 0);
    return ExportEbsVolumeRecommendationsResponse;
}(SpeakeasyBase));
export { ExportEbsVolumeRecommendationsResponse };
