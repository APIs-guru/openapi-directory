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
export var GetCancelBundleTaskActionEnum;
(function (GetCancelBundleTaskActionEnum) {
    GetCancelBundleTaskActionEnum["CancelBundleTask"] = "CancelBundleTask";
})(GetCancelBundleTaskActionEnum || (GetCancelBundleTaskActionEnum = {}));
export var GetCancelBundleTaskVersionEnum;
(function (GetCancelBundleTaskVersionEnum) {
    GetCancelBundleTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelBundleTaskVersionEnum || (GetCancelBundleTaskVersionEnum = {}));
var GetCancelBundleTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelBundleTaskQueryParams, _super);
    function GetCancelBundleTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BundleId" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskQueryParams.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelBundleTaskQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskQueryParams.prototype, "version", void 0);
    return GetCancelBundleTaskQueryParams;
}(SpeakeasyBase));
export { GetCancelBundleTaskQueryParams };
var GetCancelBundleTaskHeaders = /** @class */ (function (_super) {
    __extends(GetCancelBundleTaskHeaders, _super);
    function GetCancelBundleTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelBundleTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelBundleTaskHeaders;
}(SpeakeasyBase));
export { GetCancelBundleTaskHeaders };
var GetCancelBundleTaskRequest = /** @class */ (function (_super) {
    __extends(GetCancelBundleTaskRequest, _super);
    function GetCancelBundleTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelBundleTaskQueryParams)
    ], GetCancelBundleTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelBundleTaskHeaders)
    ], GetCancelBundleTaskRequest.prototype, "headers", void 0);
    return GetCancelBundleTaskRequest;
}(SpeakeasyBase));
export { GetCancelBundleTaskRequest };
var GetCancelBundleTaskResponse = /** @class */ (function (_super) {
    __extends(GetCancelBundleTaskResponse, _super);
    function GetCancelBundleTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCancelBundleTaskResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCancelBundleTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCancelBundleTaskResponse.prototype, "statusCode", void 0);
    return GetCancelBundleTaskResponse;
}(SpeakeasyBase));
export { GetCancelBundleTaskResponse };
