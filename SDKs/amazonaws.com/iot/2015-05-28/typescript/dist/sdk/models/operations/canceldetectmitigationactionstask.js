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
var CancelDetectMitigationActionsTaskPathParams = /** @class */ (function (_super) {
    __extends(CancelDetectMitigationActionsTaskPathParams, _super);
    function CancelDetectMitigationActionsTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskPathParams.prototype, "taskId", void 0);
    return CancelDetectMitigationActionsTaskPathParams;
}(SpeakeasyBase));
export { CancelDetectMitigationActionsTaskPathParams };
var CancelDetectMitigationActionsTaskHeaders = /** @class */ (function (_super) {
    __extends(CancelDetectMitigationActionsTaskHeaders, _super);
    function CancelDetectMitigationActionsTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CancelDetectMitigationActionsTaskHeaders;
}(SpeakeasyBase));
export { CancelDetectMitigationActionsTaskHeaders };
var CancelDetectMitigationActionsTaskRequest = /** @class */ (function (_super) {
    __extends(CancelDetectMitigationActionsTaskRequest, _super);
    function CancelDetectMitigationActionsTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelDetectMitigationActionsTaskPathParams)
    ], CancelDetectMitigationActionsTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelDetectMitigationActionsTaskHeaders)
    ], CancelDetectMitigationActionsTaskRequest.prototype, "headers", void 0);
    return CancelDetectMitigationActionsTaskRequest;
}(SpeakeasyBase));
export { CancelDetectMitigationActionsTaskRequest };
var CancelDetectMitigationActionsTaskResponse = /** @class */ (function (_super) {
    __extends(CancelDetectMitigationActionsTaskResponse, _super);
    function CancelDetectMitigationActionsTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "cancelDetectMitigationActionsTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelDetectMitigationActionsTaskResponse.prototype, "throttlingException", void 0);
    return CancelDetectMitigationActionsTaskResponse;
}(SpeakeasyBase));
export { CancelDetectMitigationActionsTaskResponse };
