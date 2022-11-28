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
export var GetDisableVpcClassicLinkActionEnum;
(function (GetDisableVpcClassicLinkActionEnum) {
    GetDisableVpcClassicLinkActionEnum["DisableVpcClassicLink"] = "DisableVpcClassicLink";
})(GetDisableVpcClassicLinkActionEnum || (GetDisableVpcClassicLinkActionEnum = {}));
export var GetDisableVpcClassicLinkVersionEnum;
(function (GetDisableVpcClassicLinkVersionEnum) {
    GetDisableVpcClassicLinkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableVpcClassicLinkVersionEnum || (GetDisableVpcClassicLinkVersionEnum = {}));
var GetDisableVpcClassicLinkQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableVpcClassicLinkQueryParams, _super);
    function GetDisableVpcClassicLinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableVpcClassicLinkQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkQueryParams.prototype, "vpcId", void 0);
    return GetDisableVpcClassicLinkQueryParams;
}(SpeakeasyBase));
export { GetDisableVpcClassicLinkQueryParams };
var GetDisableVpcClassicLinkHeaders = /** @class */ (function (_super) {
    __extends(GetDisableVpcClassicLinkHeaders, _super);
    function GetDisableVpcClassicLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableVpcClassicLinkHeaders;
}(SpeakeasyBase));
export { GetDisableVpcClassicLinkHeaders };
var GetDisableVpcClassicLinkRequest = /** @class */ (function (_super) {
    __extends(GetDisableVpcClassicLinkRequest, _super);
    function GetDisableVpcClassicLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableVpcClassicLinkQueryParams)
    ], GetDisableVpcClassicLinkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableVpcClassicLinkHeaders)
    ], GetDisableVpcClassicLinkRequest.prototype, "headers", void 0);
    return GetDisableVpcClassicLinkRequest;
}(SpeakeasyBase));
export { GetDisableVpcClassicLinkRequest };
var GetDisableVpcClassicLinkResponse = /** @class */ (function (_super) {
    __extends(GetDisableVpcClassicLinkResponse, _super);
    function GetDisableVpcClassicLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableVpcClassicLinkResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableVpcClassicLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableVpcClassicLinkResponse.prototype, "statusCode", void 0);
    return GetDisableVpcClassicLinkResponse;
}(SpeakeasyBase));
export { GetDisableVpcClassicLinkResponse };
