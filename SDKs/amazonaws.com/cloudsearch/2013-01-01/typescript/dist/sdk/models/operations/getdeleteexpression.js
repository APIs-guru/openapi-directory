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
export var GetDeleteExpressionActionEnum;
(function (GetDeleteExpressionActionEnum) {
    GetDeleteExpressionActionEnum["DeleteExpression"] = "DeleteExpression";
})(GetDeleteExpressionActionEnum || (GetDeleteExpressionActionEnum = {}));
export var GetDeleteExpressionVersionEnum;
(function (GetDeleteExpressionVersionEnum) {
    GetDeleteExpressionVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDeleteExpressionVersionEnum || (GetDeleteExpressionVersionEnum = {}));
var GetDeleteExpressionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteExpressionQueryParams, _super);
    function GetDeleteExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExpressionName" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionQueryParams.prototype, "expressionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionQueryParams.prototype, "version", void 0);
    return GetDeleteExpressionQueryParams;
}(SpeakeasyBase));
export { GetDeleteExpressionQueryParams };
var GetDeleteExpressionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteExpressionHeaders, _super);
    function GetDeleteExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteExpressionHeaders;
}(SpeakeasyBase));
export { GetDeleteExpressionHeaders };
var GetDeleteExpressionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteExpressionRequest, _super);
    function GetDeleteExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteExpressionQueryParams)
    ], GetDeleteExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteExpressionHeaders)
    ], GetDeleteExpressionRequest.prototype, "headers", void 0);
    return GetDeleteExpressionRequest;
}(SpeakeasyBase));
export { GetDeleteExpressionRequest };
var GetDeleteExpressionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteExpressionResponse, _super);
    function GetDeleteExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteExpressionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteExpressionResponse.prototype, "statusCode", void 0);
    return GetDeleteExpressionResponse;
}(SpeakeasyBase));
export { GetDeleteExpressionResponse };
