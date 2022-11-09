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
export var GetGetAccessKeyLastUsedActionEnum;
(function (GetGetAccessKeyLastUsedActionEnum) {
    GetGetAccessKeyLastUsedActionEnum["GetAccessKeyLastUsed"] = "GetAccessKeyLastUsed";
})(GetGetAccessKeyLastUsedActionEnum || (GetGetAccessKeyLastUsedActionEnum = {}));
export var GetGetAccessKeyLastUsedVersionEnum;
(function (GetGetAccessKeyLastUsedVersionEnum) {
    GetGetAccessKeyLastUsedVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetAccessKeyLastUsedVersionEnum || (GetGetAccessKeyLastUsedVersionEnum = {}));
var GetGetAccessKeyLastUsedQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyLastUsedQueryParams, _super);
    function GetGetAccessKeyLastUsedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedQueryParams.prototype, "accessKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedQueryParams.prototype, "version", void 0);
    return GetGetAccessKeyLastUsedQueryParams;
}(SpeakeasyBase));
export { GetGetAccessKeyLastUsedQueryParams };
var GetGetAccessKeyLastUsedHeaders = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyLastUsedHeaders, _super);
    function GetGetAccessKeyLastUsedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAccessKeyLastUsedHeaders;
}(SpeakeasyBase));
export { GetGetAccessKeyLastUsedHeaders };
var GetGetAccessKeyLastUsedRequest = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyLastUsedRequest, _super);
    function GetGetAccessKeyLastUsedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetAccessKeyLastUsedQueryParams)
    ], GetGetAccessKeyLastUsedRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetAccessKeyLastUsedHeaders)
    ], GetGetAccessKeyLastUsedRequest.prototype, "headers", void 0);
    return GetGetAccessKeyLastUsedRequest;
}(SpeakeasyBase));
export { GetGetAccessKeyLastUsedRequest };
var GetGetAccessKeyLastUsedResponse = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyLastUsedResponse, _super);
    function GetGetAccessKeyLastUsedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAccessKeyLastUsedResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetAccessKeyLastUsedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetAccessKeyLastUsedResponse.prototype, "statusCode", void 0);
    return GetGetAccessKeyLastUsedResponse;
}(SpeakeasyBase));
export { GetGetAccessKeyLastUsedResponse };
