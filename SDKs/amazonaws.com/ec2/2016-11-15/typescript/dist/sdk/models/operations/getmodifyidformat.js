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
export var GetModifyIdFormatActionEnum;
(function (GetModifyIdFormatActionEnum) {
    GetModifyIdFormatActionEnum["ModifyIdFormat"] = "ModifyIdFormat";
})(GetModifyIdFormatActionEnum || (GetModifyIdFormatActionEnum = {}));
export var GetModifyIdFormatVersionEnum;
(function (GetModifyIdFormatVersionEnum) {
    GetModifyIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyIdFormatVersionEnum || (GetModifyIdFormatVersionEnum = {}));
var GetModifyIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyIdFormatQueryParams, _super);
    function GetModifyIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatQueryParams.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UseLongIds" }),
        __metadata("design:type", Boolean)
    ], GetModifyIdFormatQueryParams.prototype, "useLongIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatQueryParams.prototype, "version", void 0);
    return GetModifyIdFormatQueryParams;
}(SpeakeasyBase));
export { GetModifyIdFormatQueryParams };
var GetModifyIdFormatHeaders = /** @class */ (function (_super) {
    __extends(GetModifyIdFormatHeaders, _super);
    function GetModifyIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyIdFormatHeaders;
}(SpeakeasyBase));
export { GetModifyIdFormatHeaders };
var GetModifyIdFormatRequest = /** @class */ (function (_super) {
    __extends(GetModifyIdFormatRequest, _super);
    function GetModifyIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyIdFormatQueryParams)
    ], GetModifyIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyIdFormatHeaders)
    ], GetModifyIdFormatRequest.prototype, "headers", void 0);
    return GetModifyIdFormatRequest;
}(SpeakeasyBase));
export { GetModifyIdFormatRequest };
var GetModifyIdFormatResponse = /** @class */ (function (_super) {
    __extends(GetModifyIdFormatResponse, _super);
    function GetModifyIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyIdFormatResponse.prototype, "statusCode", void 0);
    return GetModifyIdFormatResponse;
}(SpeakeasyBase));
export { GetModifyIdFormatResponse };
