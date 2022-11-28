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
export var DescribeDominantLanguageDetectionJobXAmzTargetEnum;
(function (DescribeDominantLanguageDetectionJobXAmzTargetEnum) {
    DescribeDominantLanguageDetectionJobXAmzTargetEnum["Comprehend20171127DescribeDominantLanguageDetectionJob"] = "Comprehend_20171127.DescribeDominantLanguageDetectionJob";
})(DescribeDominantLanguageDetectionJobXAmzTargetEnum || (DescribeDominantLanguageDetectionJobXAmzTargetEnum = {}));
var DescribeDominantLanguageDetectionJobHeaders = /** @class */ (function (_super) {
    __extends(DescribeDominantLanguageDetectionJobHeaders, _super);
    function DescribeDominantLanguageDetectionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobHeaders.prototype, "xAmzTarget", void 0);
    return DescribeDominantLanguageDetectionJobHeaders;
}(SpeakeasyBase));
export { DescribeDominantLanguageDetectionJobHeaders };
var DescribeDominantLanguageDetectionJobRequest = /** @class */ (function (_super) {
    __extends(DescribeDominantLanguageDetectionJobRequest, _super);
    function DescribeDominantLanguageDetectionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDominantLanguageDetectionJobHeaders)
    ], DescribeDominantLanguageDetectionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeDominantLanguageDetectionJobRequest)
    ], DescribeDominantLanguageDetectionJobRequest.prototype, "request", void 0);
    return DescribeDominantLanguageDetectionJobRequest;
}(SpeakeasyBase));
export { DescribeDominantLanguageDetectionJobRequest };
var DescribeDominantLanguageDetectionJobResponse = /** @class */ (function (_super) {
    __extends(DescribeDominantLanguageDetectionJobResponse, _super);
    function DescribeDominantLanguageDetectionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeDominantLanguageDetectionJobResponse)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "describeDominantLanguageDetectionJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "jobNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDominantLanguageDetectionJobResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeDominantLanguageDetectionJobResponse;
}(SpeakeasyBase));
export { DescribeDominantLanguageDetectionJobResponse };
