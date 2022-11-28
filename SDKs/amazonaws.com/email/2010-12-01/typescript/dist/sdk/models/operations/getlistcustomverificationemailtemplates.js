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
export var GetListCustomVerificationEmailTemplatesActionEnum;
(function (GetListCustomVerificationEmailTemplatesActionEnum) {
    GetListCustomVerificationEmailTemplatesActionEnum["ListCustomVerificationEmailTemplates"] = "ListCustomVerificationEmailTemplates";
})(GetListCustomVerificationEmailTemplatesActionEnum || (GetListCustomVerificationEmailTemplatesActionEnum = {}));
export var GetListCustomVerificationEmailTemplatesVersionEnum;
(function (GetListCustomVerificationEmailTemplatesVersionEnum) {
    GetListCustomVerificationEmailTemplatesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetListCustomVerificationEmailTemplatesVersionEnum || (GetListCustomVerificationEmailTemplatesVersionEnum = {}));
var GetListCustomVerificationEmailTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(GetListCustomVerificationEmailTemplatesQueryParams, _super);
    function GetListCustomVerificationEmailTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetListCustomVerificationEmailTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesQueryParams.prototype, "version", void 0);
    return GetListCustomVerificationEmailTemplatesQueryParams;
}(SpeakeasyBase));
export { GetListCustomVerificationEmailTemplatesQueryParams };
var GetListCustomVerificationEmailTemplatesHeaders = /** @class */ (function (_super) {
    __extends(GetListCustomVerificationEmailTemplatesHeaders, _super);
    function GetListCustomVerificationEmailTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListCustomVerificationEmailTemplatesHeaders;
}(SpeakeasyBase));
export { GetListCustomVerificationEmailTemplatesHeaders };
var GetListCustomVerificationEmailTemplatesRequest = /** @class */ (function (_super) {
    __extends(GetListCustomVerificationEmailTemplatesRequest, _super);
    function GetListCustomVerificationEmailTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListCustomVerificationEmailTemplatesQueryParams)
    ], GetListCustomVerificationEmailTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListCustomVerificationEmailTemplatesHeaders)
    ], GetListCustomVerificationEmailTemplatesRequest.prototype, "headers", void 0);
    return GetListCustomVerificationEmailTemplatesRequest;
}(SpeakeasyBase));
export { GetListCustomVerificationEmailTemplatesRequest };
var GetListCustomVerificationEmailTemplatesResponse = /** @class */ (function (_super) {
    __extends(GetListCustomVerificationEmailTemplatesResponse, _super);
    function GetListCustomVerificationEmailTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListCustomVerificationEmailTemplatesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListCustomVerificationEmailTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListCustomVerificationEmailTemplatesResponse.prototype, "statusCode", void 0);
    return GetListCustomVerificationEmailTemplatesResponse;
}(SpeakeasyBase));
export { GetListCustomVerificationEmailTemplatesResponse };
