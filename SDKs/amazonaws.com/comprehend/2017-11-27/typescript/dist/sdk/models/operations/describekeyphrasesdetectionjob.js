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
export var DescribeKeyPhrasesDetectionJobXAmzTargetEnum;
(function (DescribeKeyPhrasesDetectionJobXAmzTargetEnum) {
    DescribeKeyPhrasesDetectionJobXAmzTargetEnum["Comprehend20171127DescribeKeyPhrasesDetectionJob"] = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob";
})(DescribeKeyPhrasesDetectionJobXAmzTargetEnum || (DescribeKeyPhrasesDetectionJobXAmzTargetEnum = {}));
var DescribeKeyPhrasesDetectionJobHeaders = /** @class */ (function (_super) {
    __extends(DescribeKeyPhrasesDetectionJobHeaders, _super);
    function DescribeKeyPhrasesDetectionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobHeaders.prototype, "xAmzTarget", void 0);
    return DescribeKeyPhrasesDetectionJobHeaders;
}(SpeakeasyBase));
export { DescribeKeyPhrasesDetectionJobHeaders };
var DescribeKeyPhrasesDetectionJobRequest = /** @class */ (function (_super) {
    __extends(DescribeKeyPhrasesDetectionJobRequest, _super);
    function DescribeKeyPhrasesDetectionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeKeyPhrasesDetectionJobHeaders)
    ], DescribeKeyPhrasesDetectionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeKeyPhrasesDetectionJobRequest)
    ], DescribeKeyPhrasesDetectionJobRequest.prototype, "request", void 0);
    return DescribeKeyPhrasesDetectionJobRequest;
}(SpeakeasyBase));
export { DescribeKeyPhrasesDetectionJobRequest };
var DescribeKeyPhrasesDetectionJobResponse = /** @class */ (function (_super) {
    __extends(DescribeKeyPhrasesDetectionJobResponse, _super);
    function DescribeKeyPhrasesDetectionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeKeyPhrasesDetectionJobResponse)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "describeKeyPhrasesDetectionJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "jobNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeKeyPhrasesDetectionJobResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeKeyPhrasesDetectionJobResponse;
}(SpeakeasyBase));
export { DescribeKeyPhrasesDetectionJobResponse };
