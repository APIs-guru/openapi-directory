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
var StopFlowHeaders = /** @class */ (function (_super) {
    __extends(StopFlowHeaders, _super);
    function StopFlowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StopFlowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StopFlowHeaders;
}(SpeakeasyBase));
export { StopFlowHeaders };
var StopFlowRequestBody = /** @class */ (function (_super) {
    __extends(StopFlowRequestBody, _super);
    function StopFlowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowName" }),
        __metadata("design:type", String)
    ], StopFlowRequestBody.prototype, "flowName", void 0);
    return StopFlowRequestBody;
}(SpeakeasyBase));
export { StopFlowRequestBody };
var StopFlowRequest = /** @class */ (function (_super) {
    __extends(StopFlowRequest, _super);
    function StopFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopFlowHeaders)
    ], StopFlowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StopFlowRequestBody)
    ], StopFlowRequest.prototype, "request", void 0);
    return StopFlowRequest;
}(SpeakeasyBase));
export { StopFlowRequest };
var StopFlowResponse = /** @class */ (function (_super) {
    __extends(StopFlowResponse, _super);
    function StopFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopFlowResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopFlowResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopFlowResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StopFlowResponse)
    ], StopFlowResponse.prototype, "stopFlowResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopFlowResponse.prototype, "unsupportedOperationException", void 0);
    return StopFlowResponse;
}(SpeakeasyBase));
export { StopFlowResponse };
