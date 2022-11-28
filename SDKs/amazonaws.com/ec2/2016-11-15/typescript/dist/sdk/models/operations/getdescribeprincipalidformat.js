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
export var GetDescribePrincipalIdFormatActionEnum;
(function (GetDescribePrincipalIdFormatActionEnum) {
    GetDescribePrincipalIdFormatActionEnum["DescribePrincipalIdFormat"] = "DescribePrincipalIdFormat";
})(GetDescribePrincipalIdFormatActionEnum || (GetDescribePrincipalIdFormatActionEnum = {}));
export var GetDescribePrincipalIdFormatVersionEnum;
(function (GetDescribePrincipalIdFormatVersionEnum) {
    GetDescribePrincipalIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribePrincipalIdFormatVersionEnum || (GetDescribePrincipalIdFormatVersionEnum = {}));
var GetDescribePrincipalIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribePrincipalIdFormatQueryParams, _super);
    function GetDescribePrincipalIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" }),
        __metadata("design:type", Array)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatQueryParams.prototype, "version", void 0);
    return GetDescribePrincipalIdFormatQueryParams;
}(SpeakeasyBase));
export { GetDescribePrincipalIdFormatQueryParams };
var GetDescribePrincipalIdFormatHeaders = /** @class */ (function (_super) {
    __extends(GetDescribePrincipalIdFormatHeaders, _super);
    function GetDescribePrincipalIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribePrincipalIdFormatHeaders;
}(SpeakeasyBase));
export { GetDescribePrincipalIdFormatHeaders };
var GetDescribePrincipalIdFormatRequest = /** @class */ (function (_super) {
    __extends(GetDescribePrincipalIdFormatRequest, _super);
    function GetDescribePrincipalIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribePrincipalIdFormatQueryParams)
    ], GetDescribePrincipalIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribePrincipalIdFormatHeaders)
    ], GetDescribePrincipalIdFormatRequest.prototype, "headers", void 0);
    return GetDescribePrincipalIdFormatRequest;
}(SpeakeasyBase));
export { GetDescribePrincipalIdFormatRequest };
var GetDescribePrincipalIdFormatResponse = /** @class */ (function (_super) {
    __extends(GetDescribePrincipalIdFormatResponse, _super);
    function GetDescribePrincipalIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribePrincipalIdFormatResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribePrincipalIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribePrincipalIdFormatResponse.prototype, "statusCode", void 0);
    return GetDescribePrincipalIdFormatResponse;
}(SpeakeasyBase));
export { GetDescribePrincipalIdFormatResponse };
