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
export var StartIcd10CmInferenceJobXAmzTargetEnum;
(function (StartIcd10CmInferenceJobXAmzTargetEnum) {
    StartIcd10CmInferenceJobXAmzTargetEnum["ComprehendMedical20181030StartIcd10CmInferenceJob"] = "ComprehendMedical_20181030.StartICD10CMInferenceJob";
})(StartIcd10CmInferenceJobXAmzTargetEnum || (StartIcd10CmInferenceJobXAmzTargetEnum = {}));
var StartIcd10CmInferenceJobHeaders = /** @class */ (function (_super) {
    __extends(StartIcd10CmInferenceJobHeaders, _super);
    function StartIcd10CmInferenceJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobHeaders.prototype, "xAmzTarget", void 0);
    return StartIcd10CmInferenceJobHeaders;
}(SpeakeasyBase));
export { StartIcd10CmInferenceJobHeaders };
var StartIcd10CmInferenceJobRequest = /** @class */ (function (_super) {
    __extends(StartIcd10CmInferenceJobRequest, _super);
    function StartIcd10CmInferenceJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartIcd10CmInferenceJobHeaders)
    ], StartIcd10CmInferenceJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartIcd10CmInferenceJobRequest)
    ], StartIcd10CmInferenceJobRequest.prototype, "request", void 0);
    return StartIcd10CmInferenceJobRequest;
}(SpeakeasyBase));
export { StartIcd10CmInferenceJobRequest };
var StartIcd10CmInferenceJobResponse = /** @class */ (function (_super) {
    __extends(StartIcd10CmInferenceJobResponse, _super);
    function StartIcd10CmInferenceJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartIcd10CmInferenceJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartIcd10CmInferenceJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartIcd10CmInferenceJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartIcd10CmInferenceJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartIcd10CmInferenceJobResponse)
    ], StartIcd10CmInferenceJobResponse.prototype, "startIcd10CmInferenceJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartIcd10CmInferenceJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartIcd10CmInferenceJobResponse.prototype, "tooManyRequestsException", void 0);
    return StartIcd10CmInferenceJobResponse;
}(SpeakeasyBase));
export { StartIcd10CmInferenceJobResponse };
