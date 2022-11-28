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
export var GetPutWarmPoolActionEnum;
(function (GetPutWarmPoolActionEnum) {
    GetPutWarmPoolActionEnum["PutWarmPool"] = "PutWarmPool";
})(GetPutWarmPoolActionEnum || (GetPutWarmPoolActionEnum = {}));
export var GetPutWarmPoolPoolStateEnum;
(function (GetPutWarmPoolPoolStateEnum) {
    GetPutWarmPoolPoolStateEnum["Stopped"] = "Stopped";
    GetPutWarmPoolPoolStateEnum["Running"] = "Running";
})(GetPutWarmPoolPoolStateEnum || (GetPutWarmPoolPoolStateEnum = {}));
export var GetPutWarmPoolVersionEnum;
(function (GetPutWarmPoolVersionEnum) {
    GetPutWarmPoolVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetPutWarmPoolVersionEnum || (GetPutWarmPoolVersionEnum = {}));
var GetPutWarmPoolQueryParams = /** @class */ (function (_super) {
    __extends(GetPutWarmPoolQueryParams, _super);
    function GetPutWarmPoolQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxGroupPreparedCapacity" }),
        __metadata("design:type", Number)
    ], GetPutWarmPoolQueryParams.prototype, "maxGroupPreparedCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinSize" }),
        __metadata("design:type", Number)
    ], GetPutWarmPoolQueryParams.prototype, "minSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PoolState" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolQueryParams.prototype, "poolState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolQueryParams.prototype, "version", void 0);
    return GetPutWarmPoolQueryParams;
}(SpeakeasyBase));
export { GetPutWarmPoolQueryParams };
var GetPutWarmPoolHeaders = /** @class */ (function (_super) {
    __extends(GetPutWarmPoolHeaders, _super);
    function GetPutWarmPoolHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutWarmPoolHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutWarmPoolHeaders;
}(SpeakeasyBase));
export { GetPutWarmPoolHeaders };
var GetPutWarmPoolRequest = /** @class */ (function (_super) {
    __extends(GetPutWarmPoolRequest, _super);
    function GetPutWarmPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutWarmPoolQueryParams)
    ], GetPutWarmPoolRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutWarmPoolHeaders)
    ], GetPutWarmPoolRequest.prototype, "headers", void 0);
    return GetPutWarmPoolRequest;
}(SpeakeasyBase));
export { GetPutWarmPoolRequest };
var GetPutWarmPoolResponse = /** @class */ (function (_super) {
    __extends(GetPutWarmPoolResponse, _super);
    function GetPutWarmPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutWarmPoolResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPutWarmPoolResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPutWarmPoolResponse.prototype, "statusCode", void 0);
    return GetPutWarmPoolResponse;
}(SpeakeasyBase));
export { GetPutWarmPoolResponse };
