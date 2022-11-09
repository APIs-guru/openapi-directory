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
export var StopIcd10CmInferenceJobXAmzTargetEnum;
(function (StopIcd10CmInferenceJobXAmzTargetEnum) {
    StopIcd10CmInferenceJobXAmzTargetEnum["ComprehendMedical20181030StopIcd10CmInferenceJob"] = "ComprehendMedical_20181030.StopICD10CMInferenceJob";
})(StopIcd10CmInferenceJobXAmzTargetEnum || (StopIcd10CmInferenceJobXAmzTargetEnum = {}));
var StopIcd10CmInferenceJobHeaders = /** @class */ (function (_super) {
    __extends(StopIcd10CmInferenceJobHeaders, _super);
    function StopIcd10CmInferenceJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobHeaders.prototype, "xAmzTarget", void 0);
    return StopIcd10CmInferenceJobHeaders;
}(SpeakeasyBase));
export { StopIcd10CmInferenceJobHeaders };
var StopIcd10CmInferenceJobRequest = /** @class */ (function (_super) {
    __extends(StopIcd10CmInferenceJobRequest, _super);
    function StopIcd10CmInferenceJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StopIcd10CmInferenceJobHeaders)
    ], StopIcd10CmInferenceJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StopIcd10CmInferenceJobRequest)
    ], StopIcd10CmInferenceJobRequest.prototype, "request", void 0);
    return StopIcd10CmInferenceJobRequest;
}(SpeakeasyBase));
export { StopIcd10CmInferenceJobRequest };
var StopIcd10CmInferenceJobResponse = /** @class */ (function (_super) {
    __extends(StopIcd10CmInferenceJobResponse, _super);
    function StopIcd10CmInferenceJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StopIcd10CmInferenceJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StopIcd10CmInferenceJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StopIcd10CmInferenceJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StopIcd10CmInferenceJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StopIcd10CmInferenceJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StopIcd10CmInferenceJobResponse)
    ], StopIcd10CmInferenceJobResponse.prototype, "stopIcd10CmInferenceJobResponse", void 0);
    return StopIcd10CmInferenceJobResponse;
}(SpeakeasyBase));
export { StopIcd10CmInferenceJobResponse };
