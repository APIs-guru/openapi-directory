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
var StartOnDemandAuditTaskHeaders = /** @class */ (function (_super) {
    __extends(StartOnDemandAuditTaskHeaders, _super);
    function StartOnDemandAuditTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartOnDemandAuditTaskHeaders;
}(SpeakeasyBase));
export { StartOnDemandAuditTaskHeaders };
var StartOnDemandAuditTaskRequestBody = /** @class */ (function (_super) {
    __extends(StartOnDemandAuditTaskRequestBody, _super);
    function StartOnDemandAuditTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCheckNames" }),
        __metadata("design:type", Array)
    ], StartOnDemandAuditTaskRequestBody.prototype, "targetCheckNames", void 0);
    return StartOnDemandAuditTaskRequestBody;
}(SpeakeasyBase));
export { StartOnDemandAuditTaskRequestBody };
var StartOnDemandAuditTaskRequest = /** @class */ (function (_super) {
    __extends(StartOnDemandAuditTaskRequest, _super);
    function StartOnDemandAuditTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartOnDemandAuditTaskHeaders)
    ], StartOnDemandAuditTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartOnDemandAuditTaskRequestBody)
    ], StartOnDemandAuditTaskRequest.prototype, "request", void 0);
    return StartOnDemandAuditTaskRequest;
}(SpeakeasyBase));
export { StartOnDemandAuditTaskRequest };
var StartOnDemandAuditTaskResponse = /** @class */ (function (_super) {
    __extends(StartOnDemandAuditTaskResponse, _super);
    function StartOnDemandAuditTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartOnDemandAuditTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandAuditTaskResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandAuditTaskResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandAuditTaskResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartOnDemandAuditTaskResponse)
    ], StartOnDemandAuditTaskResponse.prototype, "startOnDemandAuditTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartOnDemandAuditTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandAuditTaskResponse.prototype, "throttlingException", void 0);
    return StartOnDemandAuditTaskResponse;
}(SpeakeasyBase));
export { StartOnDemandAuditTaskResponse };
