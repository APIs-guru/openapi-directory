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
export var CancelDataRepositoryTaskXAmzTargetEnum;
(function (CancelDataRepositoryTaskXAmzTargetEnum) {
    CancelDataRepositoryTaskXAmzTargetEnum["AwsSimbaApiServiceV20180301CancelDataRepositoryTask"] = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask";
})(CancelDataRepositoryTaskXAmzTargetEnum || (CancelDataRepositoryTaskXAmzTargetEnum = {}));
var CancelDataRepositoryTaskHeaders = /** @class */ (function (_super) {
    __extends(CancelDataRepositoryTaskHeaders, _super);
    function CancelDataRepositoryTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskHeaders.prototype, "xAmzTarget", void 0);
    return CancelDataRepositoryTaskHeaders;
}(SpeakeasyBase));
export { CancelDataRepositoryTaskHeaders };
var CancelDataRepositoryTaskRequest = /** @class */ (function (_super) {
    __extends(CancelDataRepositoryTaskRequest, _super);
    function CancelDataRepositoryTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelDataRepositoryTaskHeaders)
    ], CancelDataRepositoryTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CancelDataRepositoryTaskRequest)
    ], CancelDataRepositoryTaskRequest.prototype, "request", void 0);
    return CancelDataRepositoryTaskRequest;
}(SpeakeasyBase));
export { CancelDataRepositoryTaskRequest };
var CancelDataRepositoryTaskResponse = /** @class */ (function (_super) {
    __extends(CancelDataRepositoryTaskResponse, _super);
    function CancelDataRepositoryTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDataRepositoryTaskResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CancelDataRepositoryTaskResponse)
    ], CancelDataRepositoryTaskResponse.prototype, "cancelDataRepositoryTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelDataRepositoryTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDataRepositoryTaskResponse.prototype, "dataRepositoryTaskEnded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDataRepositoryTaskResponse.prototype, "dataRepositoryTaskNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDataRepositoryTaskResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelDataRepositoryTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDataRepositoryTaskResponse.prototype, "unsupportedOperation", void 0);
    return CancelDataRepositoryTaskResponse;
}(SpeakeasyBase));
export { CancelDataRepositoryTaskResponse };
