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
export var GetDescribeSuggestersActionEnum;
(function (GetDescribeSuggestersActionEnum) {
    GetDescribeSuggestersActionEnum["DescribeSuggesters"] = "DescribeSuggesters";
})(GetDescribeSuggestersActionEnum || (GetDescribeSuggestersActionEnum = {}));
export var GetDescribeSuggestersVersionEnum;
(function (GetDescribeSuggestersVersionEnum) {
    GetDescribeSuggestersVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDescribeSuggestersVersionEnum || (GetDescribeSuggestersVersionEnum = {}));
var GetDescribeSuggestersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSuggestersQueryParams, _super);
    function GetDescribeSuggestersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Deployed" }),
        __metadata("design:type", Boolean)
    ], GetDescribeSuggestersQueryParams.prototype, "deployed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SuggesterNames" }),
        __metadata("design:type", Array)
    ], GetDescribeSuggestersQueryParams.prototype, "suggesterNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersQueryParams.prototype, "version", void 0);
    return GetDescribeSuggestersQueryParams;
}(SpeakeasyBase));
export { GetDescribeSuggestersQueryParams };
var GetDescribeSuggestersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSuggestersHeaders, _super);
    function GetDescribeSuggestersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSuggestersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSuggestersHeaders;
}(SpeakeasyBase));
export { GetDescribeSuggestersHeaders };
var GetDescribeSuggestersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSuggestersRequest, _super);
    function GetDescribeSuggestersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSuggestersQueryParams)
    ], GetDescribeSuggestersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSuggestersHeaders)
    ], GetDescribeSuggestersRequest.prototype, "headers", void 0);
    return GetDescribeSuggestersRequest;
}(SpeakeasyBase));
export { GetDescribeSuggestersRequest };
var GetDescribeSuggestersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSuggestersResponse, _super);
    function GetDescribeSuggestersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSuggestersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeSuggestersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeSuggestersResponse.prototype, "statusCode", void 0);
    return GetDescribeSuggestersResponse;
}(SpeakeasyBase));
export { GetDescribeSuggestersResponse };
