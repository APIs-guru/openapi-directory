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
export var GetDefineRankExpressionActionEnum;
(function (GetDefineRankExpressionActionEnum) {
    GetDefineRankExpressionActionEnum["DefineRankExpression"] = "DefineRankExpression";
})(GetDefineRankExpressionActionEnum || (GetDefineRankExpressionActionEnum = {}));
// GetDefineRankExpressionRankExpression
/**
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
**/
var GetDefineRankExpressionRankExpression = /** @class */ (function (_super) {
    __extends(GetDefineRankExpressionRankExpression, _super);
    function GetDefineRankExpressionRankExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=RankExpression" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionRankExpression.prototype, "rankExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=RankName" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionRankExpression.prototype, "rankName", void 0);
    return GetDefineRankExpressionRankExpression;
}(SpeakeasyBase));
export { GetDefineRankExpressionRankExpression };
export var GetDefineRankExpressionVersionEnum;
(function (GetDefineRankExpressionVersionEnum) {
    GetDefineRankExpressionVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetDefineRankExpressionVersionEnum || (GetDefineRankExpressionVersionEnum = {}));
var GetDefineRankExpressionQueryParams = /** @class */ (function (_super) {
    __extends(GetDefineRankExpressionQueryParams, _super);
    function GetDefineRankExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RankExpression" }),
        __metadata("design:type", GetDefineRankExpressionRankExpression)
    ], GetDefineRankExpressionQueryParams.prototype, "rankExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionQueryParams.prototype, "version", void 0);
    return GetDefineRankExpressionQueryParams;
}(SpeakeasyBase));
export { GetDefineRankExpressionQueryParams };
var GetDefineRankExpressionHeaders = /** @class */ (function (_super) {
    __extends(GetDefineRankExpressionHeaders, _super);
    function GetDefineRankExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDefineRankExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDefineRankExpressionHeaders;
}(SpeakeasyBase));
export { GetDefineRankExpressionHeaders };
var GetDefineRankExpressionRequest = /** @class */ (function (_super) {
    __extends(GetDefineRankExpressionRequest, _super);
    function GetDefineRankExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDefineRankExpressionQueryParams)
    ], GetDefineRankExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDefineRankExpressionHeaders)
    ], GetDefineRankExpressionRequest.prototype, "headers", void 0);
    return GetDefineRankExpressionRequest;
}(SpeakeasyBase));
export { GetDefineRankExpressionRequest };
var GetDefineRankExpressionResponse = /** @class */ (function (_super) {
    __extends(GetDefineRankExpressionResponse, _super);
    function GetDefineRankExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDefineRankExpressionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDefineRankExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDefineRankExpressionResponse.prototype, "statusCode", void 0);
    return GetDefineRankExpressionResponse;
}(SpeakeasyBase));
export { GetDefineRankExpressionResponse };
