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
export var GetListSshPublicKeysActionEnum;
(function (GetListSshPublicKeysActionEnum) {
    GetListSshPublicKeysActionEnum["ListSshPublicKeys"] = "ListSSHPublicKeys";
})(GetListSshPublicKeysActionEnum || (GetListSshPublicKeysActionEnum = {}));
export var GetListSshPublicKeysVersionEnum;
(function (GetListSshPublicKeysVersionEnum) {
    GetListSshPublicKeysVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListSshPublicKeysVersionEnum || (GetListSshPublicKeysVersionEnum = {}));
var GetListSshPublicKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetListSshPublicKeysQueryParams, _super);
    function GetListSshPublicKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListSshPublicKeysQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysQueryParams.prototype, "version", void 0);
    return GetListSshPublicKeysQueryParams;
}(SpeakeasyBase));
export { GetListSshPublicKeysQueryParams };
var GetListSshPublicKeysHeaders = /** @class */ (function (_super) {
    __extends(GetListSshPublicKeysHeaders, _super);
    function GetListSshPublicKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListSshPublicKeysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListSshPublicKeysHeaders;
}(SpeakeasyBase));
export { GetListSshPublicKeysHeaders };
var GetListSshPublicKeysRequest = /** @class */ (function (_super) {
    __extends(GetListSshPublicKeysRequest, _super);
    function GetListSshPublicKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSshPublicKeysQueryParams)
    ], GetListSshPublicKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSshPublicKeysHeaders)
    ], GetListSshPublicKeysRequest.prototype, "headers", void 0);
    return GetListSshPublicKeysRequest;
}(SpeakeasyBase));
export { GetListSshPublicKeysRequest };
var GetListSshPublicKeysResponse = /** @class */ (function (_super) {
    __extends(GetListSshPublicKeysResponse, _super);
    function GetListSshPublicKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListSshPublicKeysResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListSshPublicKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListSshPublicKeysResponse.prototype, "statusCode", void 0);
    return GetListSshPublicKeysResponse;
}(SpeakeasyBase));
export { GetListSshPublicKeysResponse };
