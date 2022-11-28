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
export var GetDeleteSuggesterActionEnum;
(function (GetDeleteSuggesterActionEnum) {
    GetDeleteSuggesterActionEnum["DeleteSuggester"] = "DeleteSuggester";
})(GetDeleteSuggesterActionEnum || (GetDeleteSuggesterActionEnum = {}));
export var GetDeleteSuggesterVersionEnum;
(function (GetDeleteSuggesterVersionEnum) {
    GetDeleteSuggesterVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDeleteSuggesterVersionEnum || (GetDeleteSuggesterVersionEnum = {}));
var GetDeleteSuggesterQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSuggesterQueryParams, _super);
    function GetDeleteSuggesterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SuggesterName" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterQueryParams.prototype, "suggesterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterQueryParams.prototype, "version", void 0);
    return GetDeleteSuggesterQueryParams;
}(SpeakeasyBase));
export { GetDeleteSuggesterQueryParams };
var GetDeleteSuggesterHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSuggesterHeaders, _super);
    function GetDeleteSuggesterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSuggesterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSuggesterHeaders;
}(SpeakeasyBase));
export { GetDeleteSuggesterHeaders };
var GetDeleteSuggesterRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSuggesterRequest, _super);
    function GetDeleteSuggesterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSuggesterQueryParams)
    ], GetDeleteSuggesterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSuggesterHeaders)
    ], GetDeleteSuggesterRequest.prototype, "headers", void 0);
    return GetDeleteSuggesterRequest;
}(SpeakeasyBase));
export { GetDeleteSuggesterRequest };
var GetDeleteSuggesterResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSuggesterResponse, _super);
    function GetDeleteSuggesterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteSuggesterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteSuggesterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteSuggesterResponse.prototype, "statusCode", void 0);
    return GetDeleteSuggesterResponse;
}(SpeakeasyBase));
export { GetDeleteSuggesterResponse };
