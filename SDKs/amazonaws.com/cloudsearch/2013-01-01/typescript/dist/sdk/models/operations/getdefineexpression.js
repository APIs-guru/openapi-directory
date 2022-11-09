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
export var GetDefineExpressionActionEnum;
(function (GetDefineExpressionActionEnum) {
    GetDefineExpressionActionEnum["DefineExpression"] = "DefineExpression";
})(GetDefineExpressionActionEnum || (GetDefineExpressionActionEnum = {}));
// GetDefineExpressionExpression
/**
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
**/
var GetDefineExpressionExpression = /** @class */ (function (_super) {
    __extends(GetDefineExpressionExpression, _super);
    function GetDefineExpressionExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=ExpressionName" }),
        __metadata("design:type", String)
    ], GetDefineExpressionExpression.prototype, "expressionName", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=ExpressionValue" }),
        __metadata("design:type", String)
    ], GetDefineExpressionExpression.prototype, "expressionValue", void 0);
    return GetDefineExpressionExpression;
}(SpeakeasyBase));
export { GetDefineExpressionExpression };
export var GetDefineExpressionVersionEnum;
(function (GetDefineExpressionVersionEnum) {
    GetDefineExpressionVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDefineExpressionVersionEnum || (GetDefineExpressionVersionEnum = {}));
var GetDefineExpressionQueryParams = /** @class */ (function (_super) {
    __extends(GetDefineExpressionQueryParams, _super);
    function GetDefineExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDefineExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDefineExpressionQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Expression" }),
        __metadata("design:type", GetDefineExpressionExpression)
    ], GetDefineExpressionQueryParams.prototype, "expression", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDefineExpressionQueryParams.prototype, "version", void 0);
    return GetDefineExpressionQueryParams;
}(SpeakeasyBase));
export { GetDefineExpressionQueryParams };
var GetDefineExpressionHeaders = /** @class */ (function (_super) {
    __extends(GetDefineExpressionHeaders, _super);
    function GetDefineExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDefineExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDefineExpressionHeaders;
}(SpeakeasyBase));
export { GetDefineExpressionHeaders };
var GetDefineExpressionRequest = /** @class */ (function (_super) {
    __extends(GetDefineExpressionRequest, _super);
    function GetDefineExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDefineExpressionQueryParams)
    ], GetDefineExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDefineExpressionHeaders)
    ], GetDefineExpressionRequest.prototype, "headers", void 0);
    return GetDefineExpressionRequest;
}(SpeakeasyBase));
export { GetDefineExpressionRequest };
var GetDefineExpressionResponse = /** @class */ (function (_super) {
    __extends(GetDefineExpressionResponse, _super);
    function GetDefineExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDefineExpressionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDefineExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDefineExpressionResponse.prototype, "statusCode", void 0);
    return GetDefineExpressionResponse;
}(SpeakeasyBase));
export { GetDefineExpressionResponse };
