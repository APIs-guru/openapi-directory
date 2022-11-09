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
export var GetDeleteSamlProviderActionEnum;
(function (GetDeleteSamlProviderActionEnum) {
    GetDeleteSamlProviderActionEnum["DeleteSamlProvider"] = "DeleteSAMLProvider";
})(GetDeleteSamlProviderActionEnum || (GetDeleteSamlProviderActionEnum = {}));
export var GetDeleteSamlProviderVersionEnum;
(function (GetDeleteSamlProviderVersionEnum) {
    GetDeleteSamlProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteSamlProviderVersionEnum || (GetDeleteSamlProviderVersionEnum = {}));
var GetDeleteSamlProviderQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSamlProviderQueryParams, _super);
    function GetDeleteSamlProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderQueryParams.prototype, "samlProviderArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderQueryParams.prototype, "version", void 0);
    return GetDeleteSamlProviderQueryParams;
}(SpeakeasyBase));
export { GetDeleteSamlProviderQueryParams };
var GetDeleteSamlProviderHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSamlProviderHeaders, _super);
    function GetDeleteSamlProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSamlProviderHeaders;
}(SpeakeasyBase));
export { GetDeleteSamlProviderHeaders };
var GetDeleteSamlProviderRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSamlProviderRequest, _super);
    function GetDeleteSamlProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteSamlProviderQueryParams)
    ], GetDeleteSamlProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteSamlProviderHeaders)
    ], GetDeleteSamlProviderRequest.prototype, "headers", void 0);
    return GetDeleteSamlProviderRequest;
}(SpeakeasyBase));
export { GetDeleteSamlProviderRequest };
var GetDeleteSamlProviderResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSamlProviderResponse, _super);
    function GetDeleteSamlProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteSamlProviderResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteSamlProviderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteSamlProviderResponse.prototype, "statusCode", void 0);
    return GetDeleteSamlProviderResponse;
}(SpeakeasyBase));
export { GetDeleteSamlProviderResponse };
