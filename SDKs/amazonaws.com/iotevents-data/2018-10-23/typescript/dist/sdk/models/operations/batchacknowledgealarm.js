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
var BatchAcknowledgeAlarmHeaders = /** @class */ (function (_super) {
    __extends(BatchAcknowledgeAlarmHeaders, _super);
    function BatchAcknowledgeAlarmHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchAcknowledgeAlarmHeaders;
}(SpeakeasyBase));
export { BatchAcknowledgeAlarmHeaders };
var BatchAcknowledgeAlarmRequestBody = /** @class */ (function (_super) {
    __extends(BatchAcknowledgeAlarmRequestBody, _super);
    function BatchAcknowledgeAlarmRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acknowledgeActionRequests", elemType: shared.AcknowledgeAlarmActionRequest }),
        __metadata("design:type", Array)
    ], BatchAcknowledgeAlarmRequestBody.prototype, "acknowledgeActionRequests", void 0);
    return BatchAcknowledgeAlarmRequestBody;
}(SpeakeasyBase));
export { BatchAcknowledgeAlarmRequestBody };
var BatchAcknowledgeAlarmRequest = /** @class */ (function (_super) {
    __extends(BatchAcknowledgeAlarmRequest, _super);
    function BatchAcknowledgeAlarmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchAcknowledgeAlarmHeaders)
    ], BatchAcknowledgeAlarmRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchAcknowledgeAlarmRequestBody)
    ], BatchAcknowledgeAlarmRequest.prototype, "request", void 0);
    return BatchAcknowledgeAlarmRequest;
}(SpeakeasyBase));
export { BatchAcknowledgeAlarmRequest };
var BatchAcknowledgeAlarmResponse = /** @class */ (function (_super) {
    __extends(BatchAcknowledgeAlarmResponse, _super);
    function BatchAcknowledgeAlarmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchAcknowledgeAlarmResponse)
    ], BatchAcknowledgeAlarmResponse.prototype, "batchAcknowledgeAlarmResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchAcknowledgeAlarmResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAcknowledgeAlarmResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAcknowledgeAlarmResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAcknowledgeAlarmResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchAcknowledgeAlarmResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAcknowledgeAlarmResponse.prototype, "throttlingException", void 0);
    return BatchAcknowledgeAlarmResponse;
}(SpeakeasyBase));
export { BatchAcknowledgeAlarmResponse };
