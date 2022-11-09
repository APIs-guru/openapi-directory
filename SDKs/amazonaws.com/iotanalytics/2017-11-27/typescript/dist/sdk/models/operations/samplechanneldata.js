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
var SampleChannelDataPathParams = /** @class */ (function (_super) {
    __extends(SampleChannelDataPathParams, _super);
    function SampleChannelDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=channelName" }),
        __metadata("design:type", String)
    ], SampleChannelDataPathParams.prototype, "channelName", void 0);
    return SampleChannelDataPathParams;
}(SpeakeasyBase));
export { SampleChannelDataPathParams };
var SampleChannelDataQueryParams = /** @class */ (function (_super) {
    __extends(SampleChannelDataQueryParams, _super);
    function SampleChannelDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], SampleChannelDataQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxMessages" }),
        __metadata("design:type", Number)
    ], SampleChannelDataQueryParams.prototype, "maxMessages", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], SampleChannelDataQueryParams.prototype, "startTime", void 0);
    return SampleChannelDataQueryParams;
}(SpeakeasyBase));
export { SampleChannelDataQueryParams };
var SampleChannelDataHeaders = /** @class */ (function (_super) {
    __extends(SampleChannelDataHeaders, _super);
    function SampleChannelDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SampleChannelDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SampleChannelDataHeaders;
}(SpeakeasyBase));
export { SampleChannelDataHeaders };
var SampleChannelDataRequest = /** @class */ (function (_super) {
    __extends(SampleChannelDataRequest, _super);
    function SampleChannelDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SampleChannelDataPathParams)
    ], SampleChannelDataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SampleChannelDataQueryParams)
    ], SampleChannelDataRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SampleChannelDataHeaders)
    ], SampleChannelDataRequest.prototype, "headers", void 0);
    return SampleChannelDataRequest;
}(SpeakeasyBase));
export { SampleChannelDataRequest };
var SampleChannelDataResponse = /** @class */ (function (_super) {
    __extends(SampleChannelDataResponse, _super);
    function SampleChannelDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SampleChannelDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SampleChannelDataResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SampleChannelDataResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SampleChannelDataResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SampleChannelDataResponse)
    ], SampleChannelDataResponse.prototype, "sampleChannelDataResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SampleChannelDataResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SampleChannelDataResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SampleChannelDataResponse.prototype, "throttlingException", void 0);
    return SampleChannelDataResponse;
}(SpeakeasyBase));
export { SampleChannelDataResponse };
