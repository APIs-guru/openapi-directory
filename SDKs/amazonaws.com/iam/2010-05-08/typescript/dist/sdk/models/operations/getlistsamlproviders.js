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
export var GetListSamlProvidersActionEnum;
(function (GetListSamlProvidersActionEnum) {
    GetListSamlProvidersActionEnum["ListSamlProviders"] = "ListSAMLProviders";
})(GetListSamlProvidersActionEnum || (GetListSamlProvidersActionEnum = {}));
export var GetListSamlProvidersVersionEnum;
(function (GetListSamlProvidersVersionEnum) {
    GetListSamlProvidersVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListSamlProvidersVersionEnum || (GetListSamlProvidersVersionEnum = {}));
var GetListSamlProvidersQueryParams = /** @class */ (function (_super) {
    __extends(GetListSamlProvidersQueryParams, _super);
    function GetListSamlProvidersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersQueryParams.prototype, "version", void 0);
    return GetListSamlProvidersQueryParams;
}(SpeakeasyBase));
export { GetListSamlProvidersQueryParams };
var GetListSamlProvidersHeaders = /** @class */ (function (_super) {
    __extends(GetListSamlProvidersHeaders, _super);
    function GetListSamlProvidersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListSamlProvidersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListSamlProvidersHeaders;
}(SpeakeasyBase));
export { GetListSamlProvidersHeaders };
var GetListSamlProvidersRequest = /** @class */ (function (_super) {
    __extends(GetListSamlProvidersRequest, _super);
    function GetListSamlProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSamlProvidersQueryParams)
    ], GetListSamlProvidersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSamlProvidersHeaders)
    ], GetListSamlProvidersRequest.prototype, "headers", void 0);
    return GetListSamlProvidersRequest;
}(SpeakeasyBase));
export { GetListSamlProvidersRequest };
var GetListSamlProvidersResponse = /** @class */ (function (_super) {
    __extends(GetListSamlProvidersResponse, _super);
    function GetListSamlProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListSamlProvidersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListSamlProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListSamlProvidersResponse.prototype, "statusCode", void 0);
    return GetListSamlProvidersResponse;
}(SpeakeasyBase));
export { GetListSamlProvidersResponse };
