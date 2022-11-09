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
var StartDetectorModelAnalysisHeaders = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisHeaders, _super);
    function StartDetectorModelAnalysisHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartDetectorModelAnalysisHeaders;
}(SpeakeasyBase));
export { StartDetectorModelAnalysisHeaders };
// StartDetectorModelAnalysisRequestBodyDetectorModelDefinition
/**
 * Information that defines how a detector operates.
**/
var StartDetectorModelAnalysisRequestBodyDetectorModelDefinition = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisRequestBodyDetectorModelDefinition, _super);
    function StartDetectorModelAnalysisRequestBodyDetectorModelDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=initialStateName" }),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisRequestBodyDetectorModelDefinition.prototype, "initialStateName", void 0);
    __decorate([
        Metadata({ data: "json, name=states", elemType: shared.State }),
        __metadata("design:type", Array)
    ], StartDetectorModelAnalysisRequestBodyDetectorModelDefinition.prototype, "states", void 0);
    return StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
}(SpeakeasyBase));
export { StartDetectorModelAnalysisRequestBodyDetectorModelDefinition };
var StartDetectorModelAnalysisRequestBody = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisRequestBody, _super);
    function StartDetectorModelAnalysisRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detectorModelDefinition" }),
        __metadata("design:type", StartDetectorModelAnalysisRequestBodyDetectorModelDefinition)
    ], StartDetectorModelAnalysisRequestBody.prototype, "detectorModelDefinition", void 0);
    return StartDetectorModelAnalysisRequestBody;
}(SpeakeasyBase));
export { StartDetectorModelAnalysisRequestBody };
var StartDetectorModelAnalysisRequest = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisRequest, _super);
    function StartDetectorModelAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartDetectorModelAnalysisHeaders)
    ], StartDetectorModelAnalysisRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartDetectorModelAnalysisRequestBody)
    ], StartDetectorModelAnalysisRequest.prototype, "request", void 0);
    return StartDetectorModelAnalysisRequest;
}(SpeakeasyBase));
export { StartDetectorModelAnalysisRequest };
var StartDetectorModelAnalysisResponse = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisResponse, _super);
    function StartDetectorModelAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartDetectorModelAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDetectorModelAnalysisResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDetectorModelAnalysisResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDetectorModelAnalysisResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDetectorModelAnalysisResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartDetectorModelAnalysisResponse)
    ], StartDetectorModelAnalysisResponse.prototype, "startDetectorModelAnalysisResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartDetectorModelAnalysisResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDetectorModelAnalysisResponse.prototype, "throttlingException", void 0);
    return StartDetectorModelAnalysisResponse;
}(SpeakeasyBase));
export { StartDetectorModelAnalysisResponse };
