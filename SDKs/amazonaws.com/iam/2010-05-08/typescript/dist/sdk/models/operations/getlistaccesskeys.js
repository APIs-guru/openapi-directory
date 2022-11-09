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
export var GetListAccessKeysActionEnum;
(function (GetListAccessKeysActionEnum) {
    GetListAccessKeysActionEnum["ListAccessKeys"] = "ListAccessKeys";
})(GetListAccessKeysActionEnum || (GetListAccessKeysActionEnum = {}));
export var GetListAccessKeysVersionEnum;
(function (GetListAccessKeysVersionEnum) {
    GetListAccessKeysVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAccessKeysVersionEnum || (GetListAccessKeysVersionEnum = {}));
var GetListAccessKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetListAccessKeysQueryParams, _super);
    function GetListAccessKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAccessKeysQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAccessKeysQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAccessKeysQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListAccessKeysQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAccessKeysQueryParams.prototype, "version", void 0);
    return GetListAccessKeysQueryParams;
}(SpeakeasyBase));
export { GetListAccessKeysQueryParams };
var GetListAccessKeysHeaders = /** @class */ (function (_super) {
    __extends(GetListAccessKeysHeaders, _super);
    function GetListAccessKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAccessKeysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAccessKeysHeaders;
}(SpeakeasyBase));
export { GetListAccessKeysHeaders };
var GetListAccessKeysRequest = /** @class */ (function (_super) {
    __extends(GetListAccessKeysRequest, _super);
    function GetListAccessKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAccessKeysQueryParams)
    ], GetListAccessKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAccessKeysHeaders)
    ], GetListAccessKeysRequest.prototype, "headers", void 0);
    return GetListAccessKeysRequest;
}(SpeakeasyBase));
export { GetListAccessKeysRequest };
var GetListAccessKeysResponse = /** @class */ (function (_super) {
    __extends(GetListAccessKeysResponse, _super);
    function GetListAccessKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListAccessKeysResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListAccessKeysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListAccessKeysResponse.prototype, "statusCode", void 0);
    return GetListAccessKeysResponse;
}(SpeakeasyBase));
export { GetListAccessKeysResponse };
