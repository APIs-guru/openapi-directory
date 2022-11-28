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
export var GetGetIdentityMailFromDomainAttributesActionEnum;
(function (GetGetIdentityMailFromDomainAttributesActionEnum) {
    GetGetIdentityMailFromDomainAttributesActionEnum["GetIdentityMailFromDomainAttributes"] = "GetIdentityMailFromDomainAttributes";
})(GetGetIdentityMailFromDomainAttributesActionEnum || (GetGetIdentityMailFromDomainAttributesActionEnum = {}));
export var GetGetIdentityMailFromDomainAttributesVersionEnum;
(function (GetGetIdentityMailFromDomainAttributesVersionEnum) {
    GetGetIdentityMailFromDomainAttributesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetGetIdentityMailFromDomainAttributesVersionEnum || (GetGetIdentityMailFromDomainAttributesVersionEnum = {}));
var GetGetIdentityMailFromDomainAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetIdentityMailFromDomainAttributesQueryParams, _super);
    function GetGetIdentityMailFromDomainAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identities" }),
        __metadata("design:type", Array)
    ], GetGetIdentityMailFromDomainAttributesQueryParams.prototype, "identities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesQueryParams.prototype, "version", void 0);
    return GetGetIdentityMailFromDomainAttributesQueryParams;
}(SpeakeasyBase));
export { GetGetIdentityMailFromDomainAttributesQueryParams };
var GetGetIdentityMailFromDomainAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetGetIdentityMailFromDomainAttributesHeaders, _super);
    function GetGetIdentityMailFromDomainAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetIdentityMailFromDomainAttributesHeaders;
}(SpeakeasyBase));
export { GetGetIdentityMailFromDomainAttributesHeaders };
var GetGetIdentityMailFromDomainAttributesRequest = /** @class */ (function (_super) {
    __extends(GetGetIdentityMailFromDomainAttributesRequest, _super);
    function GetGetIdentityMailFromDomainAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetIdentityMailFromDomainAttributesQueryParams)
    ], GetGetIdentityMailFromDomainAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetIdentityMailFromDomainAttributesHeaders)
    ], GetGetIdentityMailFromDomainAttributesRequest.prototype, "headers", void 0);
    return GetGetIdentityMailFromDomainAttributesRequest;
}(SpeakeasyBase));
export { GetGetIdentityMailFromDomainAttributesRequest };
var GetGetIdentityMailFromDomainAttributesResponse = /** @class */ (function (_super) {
    __extends(GetGetIdentityMailFromDomainAttributesResponse, _super);
    function GetGetIdentityMailFromDomainAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetIdentityMailFromDomainAttributesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetIdentityMailFromDomainAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetIdentityMailFromDomainAttributesResponse.prototype, "statusCode", void 0);
    return GetGetIdentityMailFromDomainAttributesResponse;
}(SpeakeasyBase));
export { GetGetIdentityMailFromDomainAttributesResponse };
