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
export var GetGetSamlProviderActionEnum;
(function (GetGetSamlProviderActionEnum) {
    GetGetSamlProviderActionEnum["GetSamlProvider"] = "GetSAMLProvider";
})(GetGetSamlProviderActionEnum || (GetGetSamlProviderActionEnum = {}));
export var GetGetSamlProviderVersionEnum;
(function (GetGetSamlProviderVersionEnum) {
    GetGetSamlProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetSamlProviderVersionEnum || (GetGetSamlProviderVersionEnum = {}));
var GetGetSamlProviderQueryParams = /** @class */ (function (_super) {
    __extends(GetGetSamlProviderQueryParams, _super);
    function GetGetSamlProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderQueryParams.prototype, "samlProviderArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderQueryParams.prototype, "version", void 0);
    return GetGetSamlProviderQueryParams;
}(SpeakeasyBase));
export { GetGetSamlProviderQueryParams };
var GetGetSamlProviderHeaders = /** @class */ (function (_super) {
    __extends(GetGetSamlProviderHeaders, _super);
    function GetGetSamlProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetSamlProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetSamlProviderHeaders;
}(SpeakeasyBase));
export { GetGetSamlProviderHeaders };
var GetGetSamlProviderRequest = /** @class */ (function (_super) {
    __extends(GetGetSamlProviderRequest, _super);
    function GetGetSamlProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSamlProviderQueryParams)
    ], GetGetSamlProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSamlProviderHeaders)
    ], GetGetSamlProviderRequest.prototype, "headers", void 0);
    return GetGetSamlProviderRequest;
}(SpeakeasyBase));
export { GetGetSamlProviderRequest };
var GetGetSamlProviderResponse = /** @class */ (function (_super) {
    __extends(GetGetSamlProviderResponse, _super);
    function GetGetSamlProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetSamlProviderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetSamlProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetSamlProviderResponse.prototype, "statusCode", void 0);
    return GetGetSamlProviderResponse;
}(SpeakeasyBase));
export { GetGetSamlProviderResponse };
