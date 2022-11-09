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
export var GetBatchStopUpdateActionActionEnum;
(function (GetBatchStopUpdateActionActionEnum) {
    GetBatchStopUpdateActionActionEnum["BatchStopUpdateAction"] = "BatchStopUpdateAction";
})(GetBatchStopUpdateActionActionEnum || (GetBatchStopUpdateActionActionEnum = {}));
export var GetBatchStopUpdateActionVersionEnum;
(function (GetBatchStopUpdateActionVersionEnum) {
    GetBatchStopUpdateActionVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetBatchStopUpdateActionVersionEnum || (GetBatchStopUpdateActionVersionEnum = {}));
var GetBatchStopUpdateActionQueryParams = /** @class */ (function (_super) {
    __extends(GetBatchStopUpdateActionQueryParams, _super);
    function GetBatchStopUpdateActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" }),
        __metadata("design:type", Array)
    ], GetBatchStopUpdateActionQueryParams.prototype, "cacheClusterIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" }),
        __metadata("design:type", Array)
    ], GetBatchStopUpdateActionQueryParams.prototype, "replicationGroupIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionQueryParams.prototype, "serviceUpdateName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionQueryParams.prototype, "version", void 0);
    return GetBatchStopUpdateActionQueryParams;
}(SpeakeasyBase));
export { GetBatchStopUpdateActionQueryParams };
var GetBatchStopUpdateActionHeaders = /** @class */ (function (_super) {
    __extends(GetBatchStopUpdateActionHeaders, _super);
    function GetBatchStopUpdateActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBatchStopUpdateActionHeaders;
}(SpeakeasyBase));
export { GetBatchStopUpdateActionHeaders };
var GetBatchStopUpdateActionRequest = /** @class */ (function (_super) {
    __extends(GetBatchStopUpdateActionRequest, _super);
    function GetBatchStopUpdateActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBatchStopUpdateActionQueryParams)
    ], GetBatchStopUpdateActionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBatchStopUpdateActionHeaders)
    ], GetBatchStopUpdateActionRequest.prototype, "headers", void 0);
    return GetBatchStopUpdateActionRequest;
}(SpeakeasyBase));
export { GetBatchStopUpdateActionRequest };
var GetBatchStopUpdateActionResponse = /** @class */ (function (_super) {
    __extends(GetBatchStopUpdateActionResponse, _super);
    function GetBatchStopUpdateActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetBatchStopUpdateActionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBatchStopUpdateActionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBatchStopUpdateActionResponse.prototype, "statusCode", void 0);
    return GetBatchStopUpdateActionResponse;
}(SpeakeasyBase));
export { GetBatchStopUpdateActionResponse };
