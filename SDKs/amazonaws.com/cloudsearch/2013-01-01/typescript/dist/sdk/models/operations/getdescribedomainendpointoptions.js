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
export var GetDescribeDomainEndpointOptionsActionEnum;
(function (GetDescribeDomainEndpointOptionsActionEnum) {
    GetDescribeDomainEndpointOptionsActionEnum["DescribeDomainEndpointOptions"] = "DescribeDomainEndpointOptions";
})(GetDescribeDomainEndpointOptionsActionEnum || (GetDescribeDomainEndpointOptionsActionEnum = {}));
export var GetDescribeDomainEndpointOptionsVersionEnum;
(function (GetDescribeDomainEndpointOptionsVersionEnum) {
    GetDescribeDomainEndpointOptionsVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDescribeDomainEndpointOptionsVersionEnum || (GetDescribeDomainEndpointOptionsVersionEnum = {}));
var GetDescribeDomainEndpointOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDomainEndpointOptionsQueryParams, _super);
    function GetDescribeDomainEndpointOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deployed" }),
        __metadata("design:type", Boolean)
    ], GetDescribeDomainEndpointOptionsQueryParams.prototype, "deployed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsQueryParams.prototype, "version", void 0);
    return GetDescribeDomainEndpointOptionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeDomainEndpointOptionsQueryParams };
var GetDescribeDomainEndpointOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDomainEndpointOptionsHeaders, _super);
    function GetDescribeDomainEndpointOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDomainEndpointOptionsHeaders;
}(SpeakeasyBase));
export { GetDescribeDomainEndpointOptionsHeaders };
var GetDescribeDomainEndpointOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDomainEndpointOptionsRequest, _super);
    function GetDescribeDomainEndpointOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDomainEndpointOptionsQueryParams)
    ], GetDescribeDomainEndpointOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDomainEndpointOptionsHeaders)
    ], GetDescribeDomainEndpointOptionsRequest.prototype, "headers", void 0);
    return GetDescribeDomainEndpointOptionsRequest;
}(SpeakeasyBase));
export { GetDescribeDomainEndpointOptionsRequest };
var GetDescribeDomainEndpointOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDomainEndpointOptionsResponse, _super);
    function GetDescribeDomainEndpointOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDomainEndpointOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDomainEndpointOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDomainEndpointOptionsResponse.prototype, "statusCode", void 0);
    return GetDescribeDomainEndpointOptionsResponse;
}(SpeakeasyBase));
export { GetDescribeDomainEndpointOptionsResponse };
