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
export var GetCancelConversionTaskActionEnum;
(function (GetCancelConversionTaskActionEnum) {
    GetCancelConversionTaskActionEnum["CancelConversionTask"] = "CancelConversionTask";
})(GetCancelConversionTaskActionEnum || (GetCancelConversionTaskActionEnum = {}));
export var GetCancelConversionTaskVersionEnum;
(function (GetCancelConversionTaskVersionEnum) {
    GetCancelConversionTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelConversionTaskVersionEnum || (GetCancelConversionTaskVersionEnum = {}));
var GetCancelConversionTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelConversionTaskQueryParams, _super);
    function GetCancelConversionTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConversionTaskId" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskQueryParams.prototype, "conversionTaskId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelConversionTaskQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReasonMessage" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskQueryParams.prototype, "reasonMessage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskQueryParams.prototype, "version", void 0);
    return GetCancelConversionTaskQueryParams;
}(SpeakeasyBase));
export { GetCancelConversionTaskQueryParams };
var GetCancelConversionTaskHeaders = /** @class */ (function (_super) {
    __extends(GetCancelConversionTaskHeaders, _super);
    function GetCancelConversionTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelConversionTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelConversionTaskHeaders;
}(SpeakeasyBase));
export { GetCancelConversionTaskHeaders };
var GetCancelConversionTaskRequest = /** @class */ (function (_super) {
    __extends(GetCancelConversionTaskRequest, _super);
    function GetCancelConversionTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelConversionTaskQueryParams)
    ], GetCancelConversionTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelConversionTaskHeaders)
    ], GetCancelConversionTaskRequest.prototype, "headers", void 0);
    return GetCancelConversionTaskRequest;
}(SpeakeasyBase));
export { GetCancelConversionTaskRequest };
var GetCancelConversionTaskResponse = /** @class */ (function (_super) {
    __extends(GetCancelConversionTaskResponse, _super);
    function GetCancelConversionTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCancelConversionTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCancelConversionTaskResponse.prototype, "statusCode", void 0);
    return GetCancelConversionTaskResponse;
}(SpeakeasyBase));
export { GetCancelConversionTaskResponse };
