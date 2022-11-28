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
export var GetDeleteRankExpressionActionEnum;
(function (GetDeleteRankExpressionActionEnum) {
    GetDeleteRankExpressionActionEnum["DeleteRankExpression"] = "DeleteRankExpression";
})(GetDeleteRankExpressionActionEnum || (GetDeleteRankExpressionActionEnum = {}));
export var GetDeleteRankExpressionVersionEnum;
(function (GetDeleteRankExpressionVersionEnum) {
    GetDeleteRankExpressionVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetDeleteRankExpressionVersionEnum || (GetDeleteRankExpressionVersionEnum = {}));
var GetDeleteRankExpressionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteRankExpressionQueryParams, _super);
    function GetDeleteRankExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RankName" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionQueryParams.prototype, "rankName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionQueryParams.prototype, "version", void 0);
    return GetDeleteRankExpressionQueryParams;
}(SpeakeasyBase));
export { GetDeleteRankExpressionQueryParams };
var GetDeleteRankExpressionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteRankExpressionHeaders, _super);
    function GetDeleteRankExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteRankExpressionHeaders;
}(SpeakeasyBase));
export { GetDeleteRankExpressionHeaders };
var GetDeleteRankExpressionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteRankExpressionRequest, _super);
    function GetDeleteRankExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteRankExpressionQueryParams)
    ], GetDeleteRankExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteRankExpressionHeaders)
    ], GetDeleteRankExpressionRequest.prototype, "headers", void 0);
    return GetDeleteRankExpressionRequest;
}(SpeakeasyBase));
export { GetDeleteRankExpressionRequest };
var GetDeleteRankExpressionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteRankExpressionResponse, _super);
    function GetDeleteRankExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteRankExpressionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteRankExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteRankExpressionResponse.prototype, "statusCode", void 0);
    return GetDeleteRankExpressionResponse;
}(SpeakeasyBase));
export { GetDeleteRankExpressionResponse };
