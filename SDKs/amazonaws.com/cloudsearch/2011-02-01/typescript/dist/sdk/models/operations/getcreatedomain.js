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
export var GetCreateDomainActionEnum;
(function (GetCreateDomainActionEnum) {
    GetCreateDomainActionEnum["CreateDomain"] = "CreateDomain";
})(GetCreateDomainActionEnum || (GetCreateDomainActionEnum = {}));
export var GetCreateDomainVersionEnum;
(function (GetCreateDomainVersionEnum) {
    GetCreateDomainVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetCreateDomainVersionEnum || (GetCreateDomainVersionEnum = {}));
var GetCreateDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDomainQueryParams, _super);
    function GetCreateDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDomainQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetCreateDomainQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDomainQueryParams.prototype, "version", void 0);
    return GetCreateDomainQueryParams;
}(SpeakeasyBase));
export { GetCreateDomainQueryParams };
var GetCreateDomainHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDomainHeaders, _super);
    function GetCreateDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDomainHeaders;
}(SpeakeasyBase));
export { GetCreateDomainHeaders };
var GetCreateDomainRequest = /** @class */ (function (_super) {
    __extends(GetCreateDomainRequest, _super);
    function GetCreateDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDomainQueryParams)
    ], GetCreateDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDomainHeaders)
    ], GetCreateDomainRequest.prototype, "headers", void 0);
    return GetCreateDomainRequest;
}(SpeakeasyBase));
export { GetCreateDomainRequest };
var GetCreateDomainResponse = /** @class */ (function (_super) {
    __extends(GetCreateDomainResponse, _super);
    function GetCreateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDomainResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateDomainResponse.prototype, "statusCode", void 0);
    return GetCreateDomainResponse;
}(SpeakeasyBase));
export { GetCreateDomainResponse };
