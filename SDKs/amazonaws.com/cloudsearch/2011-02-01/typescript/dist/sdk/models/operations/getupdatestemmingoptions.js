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
export var GetUpdateStemmingOptionsActionEnum;
(function (GetUpdateStemmingOptionsActionEnum) {
    GetUpdateStemmingOptionsActionEnum["UpdateStemmingOptions"] = "UpdateStemmingOptions";
})(GetUpdateStemmingOptionsActionEnum || (GetUpdateStemmingOptionsActionEnum = {}));
export var GetUpdateStemmingOptionsVersionEnum;
(function (GetUpdateStemmingOptionsVersionEnum) {
    GetUpdateStemmingOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetUpdateStemmingOptionsVersionEnum || (GetUpdateStemmingOptionsVersionEnum = {}));
var GetUpdateStemmingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateStemmingOptionsQueryParams, _super);
    function GetUpdateStemmingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Stems" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsQueryParams.prototype, "stems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsQueryParams.prototype, "version", void 0);
    return GetUpdateStemmingOptionsQueryParams;
}(SpeakeasyBase));
export { GetUpdateStemmingOptionsQueryParams };
var GetUpdateStemmingOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateStemmingOptionsHeaders, _super);
    function GetUpdateStemmingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateStemmingOptionsHeaders;
}(SpeakeasyBase));
export { GetUpdateStemmingOptionsHeaders };
var GetUpdateStemmingOptionsRequest = /** @class */ (function (_super) {
    __extends(GetUpdateStemmingOptionsRequest, _super);
    function GetUpdateStemmingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateStemmingOptionsQueryParams)
    ], GetUpdateStemmingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateStemmingOptionsHeaders)
    ], GetUpdateStemmingOptionsRequest.prototype, "headers", void 0);
    return GetUpdateStemmingOptionsRequest;
}(SpeakeasyBase));
export { GetUpdateStemmingOptionsRequest };
var GetUpdateStemmingOptionsResponse = /** @class */ (function (_super) {
    __extends(GetUpdateStemmingOptionsResponse, _super);
    function GetUpdateStemmingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateStemmingOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateStemmingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateStemmingOptionsResponse.prototype, "statusCode", void 0);
    return GetUpdateStemmingOptionsResponse;
}(SpeakeasyBase));
export { GetUpdateStemmingOptionsResponse };
