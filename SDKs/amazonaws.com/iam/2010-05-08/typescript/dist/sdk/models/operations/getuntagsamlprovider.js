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
export var GetUntagSamlProviderActionEnum;
(function (GetUntagSamlProviderActionEnum) {
    GetUntagSamlProviderActionEnum["UntagSamlProvider"] = "UntagSAMLProvider";
})(GetUntagSamlProviderActionEnum || (GetUntagSamlProviderActionEnum = {}));
export var GetUntagSamlProviderVersionEnum;
(function (GetUntagSamlProviderVersionEnum) {
    GetUntagSamlProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUntagSamlProviderVersionEnum || (GetUntagSamlProviderVersionEnum = {}));
var GetUntagSamlProviderQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagSamlProviderQueryParams, _super);
    function GetUntagSamlProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderQueryParams.prototype, "samlProviderArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagSamlProviderQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderQueryParams.prototype, "version", void 0);
    return GetUntagSamlProviderQueryParams;
}(SpeakeasyBase));
export { GetUntagSamlProviderQueryParams };
var GetUntagSamlProviderHeaders = /** @class */ (function (_super) {
    __extends(GetUntagSamlProviderHeaders, _super);
    function GetUntagSamlProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagSamlProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagSamlProviderHeaders;
}(SpeakeasyBase));
export { GetUntagSamlProviderHeaders };
var GetUntagSamlProviderRequest = /** @class */ (function (_super) {
    __extends(GetUntagSamlProviderRequest, _super);
    function GetUntagSamlProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUntagSamlProviderQueryParams)
    ], GetUntagSamlProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUntagSamlProviderHeaders)
    ], GetUntagSamlProviderRequest.prototype, "headers", void 0);
    return GetUntagSamlProviderRequest;
}(SpeakeasyBase));
export { GetUntagSamlProviderRequest };
var GetUntagSamlProviderResponse = /** @class */ (function (_super) {
    __extends(GetUntagSamlProviderResponse, _super);
    function GetUntagSamlProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntagSamlProviderResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUntagSamlProviderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUntagSamlProviderResponse.prototype, "statusCode", void 0);
    return GetUntagSamlProviderResponse;
}(SpeakeasyBase));
export { GetUntagSamlProviderResponse };
