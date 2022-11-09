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
export var GetSetInstanceHealthActionEnum;
(function (GetSetInstanceHealthActionEnum) {
    GetSetInstanceHealthActionEnum["SetInstanceHealth"] = "SetInstanceHealth";
})(GetSetInstanceHealthActionEnum || (GetSetInstanceHealthActionEnum = {}));
export var GetSetInstanceHealthVersionEnum;
(function (GetSetInstanceHealthVersionEnum) {
    GetSetInstanceHealthVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetSetInstanceHealthVersionEnum || (GetSetInstanceHealthVersionEnum = {}));
var GetSetInstanceHealthQueryParams = /** @class */ (function (_super) {
    __extends(GetSetInstanceHealthQueryParams, _super);
    function GetSetInstanceHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HealthStatus" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthQueryParams.prototype, "healthStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthQueryParams.prototype, "instanceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShouldRespectGracePeriod" }),
        __metadata("design:type", Boolean)
    ], GetSetInstanceHealthQueryParams.prototype, "shouldRespectGracePeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthQueryParams.prototype, "version", void 0);
    return GetSetInstanceHealthQueryParams;
}(SpeakeasyBase));
export { GetSetInstanceHealthQueryParams };
var GetSetInstanceHealthHeaders = /** @class */ (function (_super) {
    __extends(GetSetInstanceHealthHeaders, _super);
    function GetSetInstanceHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetInstanceHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetInstanceHealthHeaders;
}(SpeakeasyBase));
export { GetSetInstanceHealthHeaders };
var GetSetInstanceHealthRequest = /** @class */ (function (_super) {
    __extends(GetSetInstanceHealthRequest, _super);
    function GetSetInstanceHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetInstanceHealthQueryParams)
    ], GetSetInstanceHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetInstanceHealthHeaders)
    ], GetSetInstanceHealthRequest.prototype, "headers", void 0);
    return GetSetInstanceHealthRequest;
}(SpeakeasyBase));
export { GetSetInstanceHealthRequest };
var GetSetInstanceHealthResponse = /** @class */ (function (_super) {
    __extends(GetSetInstanceHealthResponse, _super);
    function GetSetInstanceHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetInstanceHealthResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetInstanceHealthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetInstanceHealthResponse.prototype, "statusCode", void 0);
    return GetSetInstanceHealthResponse;
}(SpeakeasyBase));
export { GetSetInstanceHealthResponse };
