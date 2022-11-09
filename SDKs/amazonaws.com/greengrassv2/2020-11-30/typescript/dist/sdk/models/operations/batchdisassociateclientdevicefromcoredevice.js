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
var BatchDisassociateClientDeviceFromCoreDevicePathParams = /** @class */ (function (_super) {
    __extends(BatchDisassociateClientDeviceFromCoreDevicePathParams, _super);
    function BatchDisassociateClientDeviceFromCoreDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDevicePathParams.prototype, "coreDeviceThingName", void 0);
    return BatchDisassociateClientDeviceFromCoreDevicePathParams;
}(SpeakeasyBase));
export { BatchDisassociateClientDeviceFromCoreDevicePathParams };
var BatchDisassociateClientDeviceFromCoreDeviceHeaders = /** @class */ (function (_super) {
    __extends(BatchDisassociateClientDeviceFromCoreDeviceHeaders, _super);
    function BatchDisassociateClientDeviceFromCoreDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDisassociateClientDeviceFromCoreDeviceHeaders;
}(SpeakeasyBase));
export { BatchDisassociateClientDeviceFromCoreDeviceHeaders };
var BatchDisassociateClientDeviceFromCoreDeviceRequestBody = /** @class */ (function (_super) {
    __extends(BatchDisassociateClientDeviceFromCoreDeviceRequestBody, _super);
    function BatchDisassociateClientDeviceFromCoreDeviceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=entries", elemType: shared.DisassociateClientDeviceFromCoreDeviceEntry }),
        __metadata("design:type", Array)
    ], BatchDisassociateClientDeviceFromCoreDeviceRequestBody.prototype, "entries", void 0);
    return BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
}(SpeakeasyBase));
export { BatchDisassociateClientDeviceFromCoreDeviceRequestBody };
var BatchDisassociateClientDeviceFromCoreDeviceRequest = /** @class */ (function (_super) {
    __extends(BatchDisassociateClientDeviceFromCoreDeviceRequest, _super);
    function BatchDisassociateClientDeviceFromCoreDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDisassociateClientDeviceFromCoreDevicePathParams)
    ], BatchDisassociateClientDeviceFromCoreDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDisassociateClientDeviceFromCoreDeviceHeaders)
    ], BatchDisassociateClientDeviceFromCoreDeviceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDisassociateClientDeviceFromCoreDeviceRequestBody)
    ], BatchDisassociateClientDeviceFromCoreDeviceRequest.prototype, "request", void 0);
    return BatchDisassociateClientDeviceFromCoreDeviceRequest;
}(SpeakeasyBase));
export { BatchDisassociateClientDeviceFromCoreDeviceRequest };
var BatchDisassociateClientDeviceFromCoreDeviceResponse = /** @class */ (function (_super) {
    __extends(BatchDisassociateClientDeviceFromCoreDeviceResponse, _super);
    function BatchDisassociateClientDeviceFromCoreDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchDisassociateClientDeviceFromCoreDeviceResponse)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "batchDisassociateClientDeviceFromCoreDeviceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateClientDeviceFromCoreDeviceResponse.prototype, "validationException", void 0);
    return BatchDisassociateClientDeviceFromCoreDeviceResponse;
}(SpeakeasyBase));
export { BatchDisassociateClientDeviceFromCoreDeviceResponse };
