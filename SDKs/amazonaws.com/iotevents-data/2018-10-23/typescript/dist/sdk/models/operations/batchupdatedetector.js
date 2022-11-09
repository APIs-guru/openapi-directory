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
var BatchUpdateDetectorHeaders = /** @class */ (function (_super) {
    __extends(BatchUpdateDetectorHeaders, _super);
    function BatchUpdateDetectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpdateDetectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchUpdateDetectorHeaders;
}(SpeakeasyBase));
export { BatchUpdateDetectorHeaders };
var BatchUpdateDetectorRequestBody = /** @class */ (function (_super) {
    __extends(BatchUpdateDetectorRequestBody, _super);
    function BatchUpdateDetectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detectors", elemType: shared.UpdateDetectorRequest }),
        __metadata("design:type", Array)
    ], BatchUpdateDetectorRequestBody.prototype, "detectors", void 0);
    return BatchUpdateDetectorRequestBody;
}(SpeakeasyBase));
export { BatchUpdateDetectorRequestBody };
var BatchUpdateDetectorRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateDetectorRequest, _super);
    function BatchUpdateDetectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateDetectorHeaders)
    ], BatchUpdateDetectorRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchUpdateDetectorRequestBody)
    ], BatchUpdateDetectorRequest.prototype, "request", void 0);
    return BatchUpdateDetectorRequest;
}(SpeakeasyBase));
export { BatchUpdateDetectorRequest };
var BatchUpdateDetectorResponse = /** @class */ (function (_super) {
    __extends(BatchUpdateDetectorResponse, _super);
    function BatchUpdateDetectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpdateDetectorResponse)
    ], BatchUpdateDetectorResponse.prototype, "batchUpdateDetectorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchUpdateDetectorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDetectorResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDetectorResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDetectorResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchUpdateDetectorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDetectorResponse.prototype, "throttlingException", void 0);
    return BatchUpdateDetectorResponse;
}(SpeakeasyBase));
export { BatchUpdateDetectorResponse };
