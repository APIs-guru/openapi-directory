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
export var GetListConfigurationSetsActionEnum;
(function (GetListConfigurationSetsActionEnum) {
    GetListConfigurationSetsActionEnum["ListConfigurationSets"] = "ListConfigurationSets";
})(GetListConfigurationSetsActionEnum || (GetListConfigurationSetsActionEnum = {}));
export var GetListConfigurationSetsVersionEnum;
(function (GetListConfigurationSetsVersionEnum) {
    GetListConfigurationSetsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetListConfigurationSetsVersionEnum || (GetListConfigurationSetsVersionEnum = {}));
var GetListConfigurationSetsQueryParams = /** @class */ (function (_super) {
    __extends(GetListConfigurationSetsQueryParams, _super);
    function GetListConfigurationSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListConfigurationSetsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsQueryParams.prototype, "version", void 0);
    return GetListConfigurationSetsQueryParams;
}(SpeakeasyBase));
export { GetListConfigurationSetsQueryParams };
var GetListConfigurationSetsHeaders = /** @class */ (function (_super) {
    __extends(GetListConfigurationSetsHeaders, _super);
    function GetListConfigurationSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListConfigurationSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListConfigurationSetsHeaders;
}(SpeakeasyBase));
export { GetListConfigurationSetsHeaders };
var GetListConfigurationSetsRequest = /** @class */ (function (_super) {
    __extends(GetListConfigurationSetsRequest, _super);
    function GetListConfigurationSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListConfigurationSetsQueryParams)
    ], GetListConfigurationSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListConfigurationSetsHeaders)
    ], GetListConfigurationSetsRequest.prototype, "headers", void 0);
    return GetListConfigurationSetsRequest;
}(SpeakeasyBase));
export { GetListConfigurationSetsRequest };
var GetListConfigurationSetsResponse = /** @class */ (function (_super) {
    __extends(GetListConfigurationSetsResponse, _super);
    function GetListConfigurationSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListConfigurationSetsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListConfigurationSetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListConfigurationSetsResponse.prototype, "statusCode", void 0);
    return GetListConfigurationSetsResponse;
}(SpeakeasyBase));
export { GetListConfigurationSetsResponse };
