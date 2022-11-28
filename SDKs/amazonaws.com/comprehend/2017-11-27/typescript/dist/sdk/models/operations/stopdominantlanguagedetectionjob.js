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
export var StopDominantLanguageDetectionJobXAmzTargetEnum;
(function (StopDominantLanguageDetectionJobXAmzTargetEnum) {
    StopDominantLanguageDetectionJobXAmzTargetEnum["Comprehend20171127StopDominantLanguageDetectionJob"] = "Comprehend_20171127.StopDominantLanguageDetectionJob";
})(StopDominantLanguageDetectionJobXAmzTargetEnum || (StopDominantLanguageDetectionJobXAmzTargetEnum = {}));
var StopDominantLanguageDetectionJobHeaders = /** @class */ (function (_super) {
    __extends(StopDominantLanguageDetectionJobHeaders, _super);
    function StopDominantLanguageDetectionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobHeaders.prototype, "xAmzTarget", void 0);
    return StopDominantLanguageDetectionJobHeaders;
}(SpeakeasyBase));
export { StopDominantLanguageDetectionJobHeaders };
var StopDominantLanguageDetectionJobRequest = /** @class */ (function (_super) {
    __extends(StopDominantLanguageDetectionJobRequest, _super);
    function StopDominantLanguageDetectionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopDominantLanguageDetectionJobHeaders)
    ], StopDominantLanguageDetectionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StopDominantLanguageDetectionJobRequest)
    ], StopDominantLanguageDetectionJobRequest.prototype, "request", void 0);
    return StopDominantLanguageDetectionJobRequest;
}(SpeakeasyBase));
export { StopDominantLanguageDetectionJobRequest };
var StopDominantLanguageDetectionJobResponse = /** @class */ (function (_super) {
    __extends(StopDominantLanguageDetectionJobResponse, _super);
    function StopDominantLanguageDetectionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopDominantLanguageDetectionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopDominantLanguageDetectionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopDominantLanguageDetectionJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopDominantLanguageDetectionJobResponse.prototype, "jobNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopDominantLanguageDetectionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StopDominantLanguageDetectionJobResponse)
    ], StopDominantLanguageDetectionJobResponse.prototype, "stopDominantLanguageDetectionJobResponse", void 0);
    return StopDominantLanguageDetectionJobResponse;
}(SpeakeasyBase));
export { StopDominantLanguageDetectionJobResponse };
