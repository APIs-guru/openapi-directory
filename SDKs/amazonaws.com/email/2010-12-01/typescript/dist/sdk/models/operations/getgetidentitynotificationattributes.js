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
export var GetGetIdentityNotificationAttributesActionEnum;
(function (GetGetIdentityNotificationAttributesActionEnum) {
    GetGetIdentityNotificationAttributesActionEnum["GetIdentityNotificationAttributes"] = "GetIdentityNotificationAttributes";
})(GetGetIdentityNotificationAttributesActionEnum || (GetGetIdentityNotificationAttributesActionEnum = {}));
export var GetGetIdentityNotificationAttributesVersionEnum;
(function (GetGetIdentityNotificationAttributesVersionEnum) {
    GetGetIdentityNotificationAttributesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetGetIdentityNotificationAttributesVersionEnum || (GetGetIdentityNotificationAttributesVersionEnum = {}));
var GetGetIdentityNotificationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetIdentityNotificationAttributesQueryParams, _super);
    function GetGetIdentityNotificationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identities" }),
        __metadata("design:type", Array)
    ], GetGetIdentityNotificationAttributesQueryParams.prototype, "identities", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesQueryParams.prototype, "version", void 0);
    return GetGetIdentityNotificationAttributesQueryParams;
}(SpeakeasyBase));
export { GetGetIdentityNotificationAttributesQueryParams };
var GetGetIdentityNotificationAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetGetIdentityNotificationAttributesHeaders, _super);
    function GetGetIdentityNotificationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetIdentityNotificationAttributesHeaders;
}(SpeakeasyBase));
export { GetGetIdentityNotificationAttributesHeaders };
var GetGetIdentityNotificationAttributesRequest = /** @class */ (function (_super) {
    __extends(GetGetIdentityNotificationAttributesRequest, _super);
    function GetGetIdentityNotificationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetIdentityNotificationAttributesQueryParams)
    ], GetGetIdentityNotificationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetIdentityNotificationAttributesHeaders)
    ], GetGetIdentityNotificationAttributesRequest.prototype, "headers", void 0);
    return GetGetIdentityNotificationAttributesRequest;
}(SpeakeasyBase));
export { GetGetIdentityNotificationAttributesRequest };
var GetGetIdentityNotificationAttributesResponse = /** @class */ (function (_super) {
    __extends(GetGetIdentityNotificationAttributesResponse, _super);
    function GetGetIdentityNotificationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetIdentityNotificationAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetIdentityNotificationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetIdentityNotificationAttributesResponse.prototype, "statusCode", void 0);
    return GetGetIdentityNotificationAttributesResponse;
}(SpeakeasyBase));
export { GetGetIdentityNotificationAttributesResponse };
