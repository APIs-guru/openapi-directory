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
export var GetDescribeSynonymOptionsActionEnum;
(function (GetDescribeSynonymOptionsActionEnum) {
    GetDescribeSynonymOptionsActionEnum["DescribeSynonymOptions"] = "DescribeSynonymOptions";
})(GetDescribeSynonymOptionsActionEnum || (GetDescribeSynonymOptionsActionEnum = {}));
export var GetDescribeSynonymOptionsVersionEnum;
(function (GetDescribeSynonymOptionsVersionEnum) {
    GetDescribeSynonymOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetDescribeSynonymOptionsVersionEnum || (GetDescribeSynonymOptionsVersionEnum = {}));
var GetDescribeSynonymOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSynonymOptionsQueryParams, _super);
    function GetDescribeSynonymOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsQueryParams.prototype, "version", void 0);
    return GetDescribeSynonymOptionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeSynonymOptionsQueryParams };
var GetDescribeSynonymOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSynonymOptionsHeaders, _super);
    function GetDescribeSynonymOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSynonymOptionsHeaders;
}(SpeakeasyBase));
export { GetDescribeSynonymOptionsHeaders };
var GetDescribeSynonymOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSynonymOptionsRequest, _super);
    function GetDescribeSynonymOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeSynonymOptionsQueryParams)
    ], GetDescribeSynonymOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeSynonymOptionsHeaders)
    ], GetDescribeSynonymOptionsRequest.prototype, "headers", void 0);
    return GetDescribeSynonymOptionsRequest;
}(SpeakeasyBase));
export { GetDescribeSynonymOptionsRequest };
var GetDescribeSynonymOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSynonymOptionsResponse, _super);
    function GetDescribeSynonymOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSynonymOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeSynonymOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeSynonymOptionsResponse.prototype, "statusCode", void 0);
    return GetDescribeSynonymOptionsResponse;
}(SpeakeasyBase));
export { GetDescribeSynonymOptionsResponse };
