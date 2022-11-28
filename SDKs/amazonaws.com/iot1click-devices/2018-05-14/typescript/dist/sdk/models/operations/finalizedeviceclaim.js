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
var FinalizeDeviceClaimPathParams = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimPathParams, _super);
    function FinalizeDeviceClaimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimPathParams.prototype, "deviceId", void 0);
    return FinalizeDeviceClaimPathParams;
}(SpeakeasyBase));
export { FinalizeDeviceClaimPathParams };
var FinalizeDeviceClaimHeaders = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimHeaders, _super);
    function FinalizeDeviceClaimHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimHeaders.prototype, "xAmzSignedHeaders", void 0);
    return FinalizeDeviceClaimHeaders;
}(SpeakeasyBase));
export { FinalizeDeviceClaimHeaders };
var FinalizeDeviceClaimRequestBody = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimRequestBody, _super);
    function FinalizeDeviceClaimRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], FinalizeDeviceClaimRequestBody.prototype, "tags", void 0);
    return FinalizeDeviceClaimRequestBody;
}(SpeakeasyBase));
export { FinalizeDeviceClaimRequestBody };
var FinalizeDeviceClaimRequest = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimRequest, _super);
    function FinalizeDeviceClaimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FinalizeDeviceClaimPathParams)
    ], FinalizeDeviceClaimRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FinalizeDeviceClaimHeaders)
    ], FinalizeDeviceClaimRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FinalizeDeviceClaimRequestBody)
    ], FinalizeDeviceClaimRequest.prototype, "request", void 0);
    return FinalizeDeviceClaimRequest;
}(SpeakeasyBase));
export { FinalizeDeviceClaimRequest };
var FinalizeDeviceClaimResponse = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimResponse, _super);
    function FinalizeDeviceClaimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FinalizeDeviceClaimResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FinalizeDeviceClaimResponse)
    ], FinalizeDeviceClaimResponse.prototype, "finalizeDeviceClaimResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FinalizeDeviceClaimResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FinalizeDeviceClaimResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FinalizeDeviceClaimResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FinalizeDeviceClaimResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FinalizeDeviceClaimResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FinalizeDeviceClaimResponse.prototype, "statusCode", void 0);
    return FinalizeDeviceClaimResponse;
}(SpeakeasyBase));
export { FinalizeDeviceClaimResponse };
