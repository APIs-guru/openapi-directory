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
var BatchSnoozeAlarmHeaders = /** @class */ (function (_super) {
    __extends(BatchSnoozeAlarmHeaders, _super);
    function BatchSnoozeAlarmHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchSnoozeAlarmHeaders;
}(SpeakeasyBase));
export { BatchSnoozeAlarmHeaders };
var BatchSnoozeAlarmRequestBody = /** @class */ (function (_super) {
    __extends(BatchSnoozeAlarmRequestBody, _super);
    function BatchSnoozeAlarmRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snoozeActionRequests", elemType: shared.SnoozeAlarmActionRequest }),
        __metadata("design:type", Array)
    ], BatchSnoozeAlarmRequestBody.prototype, "snoozeActionRequests", void 0);
    return BatchSnoozeAlarmRequestBody;
}(SpeakeasyBase));
export { BatchSnoozeAlarmRequestBody };
var BatchSnoozeAlarmRequest = /** @class */ (function (_super) {
    __extends(BatchSnoozeAlarmRequest, _super);
    function BatchSnoozeAlarmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchSnoozeAlarmHeaders)
    ], BatchSnoozeAlarmRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchSnoozeAlarmRequestBody)
    ], BatchSnoozeAlarmRequest.prototype, "request", void 0);
    return BatchSnoozeAlarmRequest;
}(SpeakeasyBase));
export { BatchSnoozeAlarmRequest };
var BatchSnoozeAlarmResponse = /** @class */ (function (_super) {
    __extends(BatchSnoozeAlarmResponse, _super);
    function BatchSnoozeAlarmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchSnoozeAlarmResponse)
    ], BatchSnoozeAlarmResponse.prototype, "batchSnoozeAlarmResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchSnoozeAlarmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchSnoozeAlarmResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchSnoozeAlarmResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchSnoozeAlarmResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchSnoozeAlarmResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchSnoozeAlarmResponse.prototype, "throttlingException", void 0);
    return BatchSnoozeAlarmResponse;
}(SpeakeasyBase));
export { BatchSnoozeAlarmResponse };
