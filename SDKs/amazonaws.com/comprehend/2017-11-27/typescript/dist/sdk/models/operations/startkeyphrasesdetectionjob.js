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
export var StartKeyPhrasesDetectionJobXAmzTargetEnum;
(function (StartKeyPhrasesDetectionJobXAmzTargetEnum) {
    StartKeyPhrasesDetectionJobXAmzTargetEnum["Comprehend20171127StartKeyPhrasesDetectionJob"] = "Comprehend_20171127.StartKeyPhrasesDetectionJob";
})(StartKeyPhrasesDetectionJobXAmzTargetEnum || (StartKeyPhrasesDetectionJobXAmzTargetEnum = {}));
var StartKeyPhrasesDetectionJobHeaders = /** @class */ (function (_super) {
    __extends(StartKeyPhrasesDetectionJobHeaders, _super);
    function StartKeyPhrasesDetectionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobHeaders.prototype, "xAmzTarget", void 0);
    return StartKeyPhrasesDetectionJobHeaders;
}(SpeakeasyBase));
export { StartKeyPhrasesDetectionJobHeaders };
var StartKeyPhrasesDetectionJobRequest = /** @class */ (function (_super) {
    __extends(StartKeyPhrasesDetectionJobRequest, _super);
    function StartKeyPhrasesDetectionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartKeyPhrasesDetectionJobHeaders)
    ], StartKeyPhrasesDetectionJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartKeyPhrasesDetectionJobRequest)
    ], StartKeyPhrasesDetectionJobRequest.prototype, "request", void 0);
    return StartKeyPhrasesDetectionJobRequest;
}(SpeakeasyBase));
export { StartKeyPhrasesDetectionJobRequest };
var StartKeyPhrasesDetectionJobResponse = /** @class */ (function (_super) {
    __extends(StartKeyPhrasesDetectionJobResponse, _super);
    function StartKeyPhrasesDetectionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "kmsKeyValidationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartKeyPhrasesDetectionJobResponse)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "startKeyPhrasesDetectionJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartKeyPhrasesDetectionJobResponse.prototype, "tooManyTagsException", void 0);
    return StartKeyPhrasesDetectionJobResponse;
}(SpeakeasyBase));
export { StartKeyPhrasesDetectionJobResponse };
