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
export var StartEntitiesDetectionJobXAmzTargetEnum;
(function (StartEntitiesDetectionJobXAmzTargetEnum) {
    StartEntitiesDetectionJobXAmzTargetEnum["Comprehend20171127StartEntitiesDetectionJob"] = "Comprehend_20171127.StartEntitiesDetectionJob";
})(StartEntitiesDetectionJobXAmzTargetEnum || (StartEntitiesDetectionJobXAmzTargetEnum = {}));
var StartEntitiesDetectionJobHeaders = /** @class */ (function (_super) {
    __extends(StartEntitiesDetectionJobHeaders, _super);
    function StartEntitiesDetectionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobHeaders.prototype, "xAmzTarget", void 0);
    return StartEntitiesDetectionJobHeaders;
}(SpeakeasyBase));
export { StartEntitiesDetectionJobHeaders };
var StartEntitiesDetectionJobRequest = /** @class */ (function (_super) {
    __extends(StartEntitiesDetectionJobRequest, _super);
    function StartEntitiesDetectionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartEntitiesDetectionJobHeaders)
    ], StartEntitiesDetectionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartEntitiesDetectionJobRequest)
    ], StartEntitiesDetectionJobRequest.prototype, "request", void 0);
    return StartEntitiesDetectionJobRequest;
}(SpeakeasyBase));
export { StartEntitiesDetectionJobRequest };
var StartEntitiesDetectionJobResponse = /** @class */ (function (_super) {
    __extends(StartEntitiesDetectionJobResponse, _super);
    function StartEntitiesDetectionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartEntitiesDetectionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "kmsKeyValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "resourceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartEntitiesDetectionJobResponse)
    ], StartEntitiesDetectionJobResponse.prototype, "startEntitiesDetectionJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartEntitiesDetectionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartEntitiesDetectionJobResponse.prototype, "tooManyTagsException", void 0);
    return StartEntitiesDetectionJobResponse;
}(SpeakeasyBase));
export { StartEntitiesDetectionJobResponse };
