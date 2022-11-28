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
export var GetDeleteReceiptFilterActionEnum;
(function (GetDeleteReceiptFilterActionEnum) {
    GetDeleteReceiptFilterActionEnum["DeleteReceiptFilter"] = "DeleteReceiptFilter";
})(GetDeleteReceiptFilterActionEnum || (GetDeleteReceiptFilterActionEnum = {}));
export var GetDeleteReceiptFilterVersionEnum;
(function (GetDeleteReceiptFilterVersionEnum) {
    GetDeleteReceiptFilterVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteReceiptFilterVersionEnum || (GetDeleteReceiptFilterVersionEnum = {}));
var GetDeleteReceiptFilterQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptFilterQueryParams, _super);
    function GetDeleteReceiptFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FilterName" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterQueryParams.prototype, "filterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterQueryParams.prototype, "version", void 0);
    return GetDeleteReceiptFilterQueryParams;
}(SpeakeasyBase));
export { GetDeleteReceiptFilterQueryParams };
var GetDeleteReceiptFilterHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptFilterHeaders, _super);
    function GetDeleteReceiptFilterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteReceiptFilterHeaders;
}(SpeakeasyBase));
export { GetDeleteReceiptFilterHeaders };
var GetDeleteReceiptFilterRequest = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptFilterRequest, _super);
    function GetDeleteReceiptFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteReceiptFilterQueryParams)
    ], GetDeleteReceiptFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteReceiptFilterHeaders)
    ], GetDeleteReceiptFilterRequest.prototype, "headers", void 0);
    return GetDeleteReceiptFilterRequest;
}(SpeakeasyBase));
export { GetDeleteReceiptFilterRequest };
var GetDeleteReceiptFilterResponse = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptFilterResponse, _super);
    function GetDeleteReceiptFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteReceiptFilterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteReceiptFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteReceiptFilterResponse.prototype, "statusCode", void 0);
    return GetDeleteReceiptFilterResponse;
}(SpeakeasyBase));
export { GetDeleteReceiptFilterResponse };
