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
export var GetIndexDocumentsActionEnum;
(function (GetIndexDocumentsActionEnum) {
    GetIndexDocumentsActionEnum["IndexDocuments"] = "IndexDocuments";
})(GetIndexDocumentsActionEnum || (GetIndexDocumentsActionEnum = {}));
export var GetIndexDocumentsVersionEnum;
(function (GetIndexDocumentsVersionEnum) {
    GetIndexDocumentsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetIndexDocumentsVersionEnum || (GetIndexDocumentsVersionEnum = {}));
var GetIndexDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(GetIndexDocumentsQueryParams, _super);
    function GetIndexDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsQueryParams.prototype, "version", void 0);
    return GetIndexDocumentsQueryParams;
}(SpeakeasyBase));
export { GetIndexDocumentsQueryParams };
var GetIndexDocumentsHeaders = /** @class */ (function (_super) {
    __extends(GetIndexDocumentsHeaders, _super);
    function GetIndexDocumentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetIndexDocumentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetIndexDocumentsHeaders;
}(SpeakeasyBase));
export { GetIndexDocumentsHeaders };
var GetIndexDocumentsRequest = /** @class */ (function (_super) {
    __extends(GetIndexDocumentsRequest, _super);
    function GetIndexDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIndexDocumentsQueryParams)
    ], GetIndexDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIndexDocumentsHeaders)
    ], GetIndexDocumentsRequest.prototype, "headers", void 0);
    return GetIndexDocumentsRequest;
}(SpeakeasyBase));
export { GetIndexDocumentsRequest };
var GetIndexDocumentsResponse = /** @class */ (function (_super) {
    __extends(GetIndexDocumentsResponse, _super);
    function GetIndexDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetIndexDocumentsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIndexDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIndexDocumentsResponse.prototype, "statusCode", void 0);
    return GetIndexDocumentsResponse;
}(SpeakeasyBase));
export { GetIndexDocumentsResponse };
