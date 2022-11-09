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
export var GetCancelImportTaskActionEnum;
(function (GetCancelImportTaskActionEnum) {
    GetCancelImportTaskActionEnum["CancelImportTask"] = "CancelImportTask";
})(GetCancelImportTaskActionEnum || (GetCancelImportTaskActionEnum = {}));
export var GetCancelImportTaskVersionEnum;
(function (GetCancelImportTaskVersionEnum) {
    GetCancelImportTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelImportTaskVersionEnum || (GetCancelImportTaskVersionEnum = {}));
var GetCancelImportTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelImportTaskQueryParams, _super);
    function GetCancelImportTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CancelReason" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskQueryParams.prototype, "cancelReason", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelImportTaskQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ImportTaskId" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskQueryParams.prototype, "importTaskId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskQueryParams.prototype, "version", void 0);
    return GetCancelImportTaskQueryParams;
}(SpeakeasyBase));
export { GetCancelImportTaskQueryParams };
var GetCancelImportTaskHeaders = /** @class */ (function (_super) {
    __extends(GetCancelImportTaskHeaders, _super);
    function GetCancelImportTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelImportTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelImportTaskHeaders;
}(SpeakeasyBase));
export { GetCancelImportTaskHeaders };
var GetCancelImportTaskRequest = /** @class */ (function (_super) {
    __extends(GetCancelImportTaskRequest, _super);
    function GetCancelImportTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelImportTaskQueryParams)
    ], GetCancelImportTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelImportTaskHeaders)
    ], GetCancelImportTaskRequest.prototype, "headers", void 0);
    return GetCancelImportTaskRequest;
}(SpeakeasyBase));
export { GetCancelImportTaskRequest };
var GetCancelImportTaskResponse = /** @class */ (function (_super) {
    __extends(GetCancelImportTaskResponse, _super);
    function GetCancelImportTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCancelImportTaskResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCancelImportTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCancelImportTaskResponse.prototype, "statusCode", void 0);
    return GetCancelImportTaskResponse;
}(SpeakeasyBase));
export { GetCancelImportTaskResponse };
