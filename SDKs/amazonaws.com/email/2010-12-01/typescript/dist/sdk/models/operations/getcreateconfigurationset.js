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
export var GetCreateConfigurationSetActionEnum;
(function (GetCreateConfigurationSetActionEnum) {
    GetCreateConfigurationSetActionEnum["CreateConfigurationSet"] = "CreateConfigurationSet";
})(GetCreateConfigurationSetActionEnum || (GetCreateConfigurationSetActionEnum = {}));
// GetCreateConfigurationSetConfigurationSet
/**
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
var GetCreateConfigurationSetConfigurationSet = /** @class */ (function (_super) {
    __extends(GetCreateConfigurationSetConfigurationSet, _super);
    function GetCreateConfigurationSetConfigurationSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Name" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetConfigurationSet.prototype, "name", void 0);
    return GetCreateConfigurationSetConfigurationSet;
}(SpeakeasyBase));
export { GetCreateConfigurationSetConfigurationSet };
export var GetCreateConfigurationSetVersionEnum;
(function (GetCreateConfigurationSetVersionEnum) {
    GetCreateConfigurationSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetCreateConfigurationSetVersionEnum || (GetCreateConfigurationSetVersionEnum = {}));
var GetCreateConfigurationSetQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateConfigurationSetQueryParams, _super);
    function GetCreateConfigurationSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSet" }),
        __metadata("design:type", GetCreateConfigurationSetConfigurationSet)
    ], GetCreateConfigurationSetQueryParams.prototype, "configurationSet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetQueryParams.prototype, "version", void 0);
    return GetCreateConfigurationSetQueryParams;
}(SpeakeasyBase));
export { GetCreateConfigurationSetQueryParams };
var GetCreateConfigurationSetHeaders = /** @class */ (function (_super) {
    __extends(GetCreateConfigurationSetHeaders, _super);
    function GetCreateConfigurationSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateConfigurationSetHeaders;
}(SpeakeasyBase));
export { GetCreateConfigurationSetHeaders };
var GetCreateConfigurationSetRequest = /** @class */ (function (_super) {
    __extends(GetCreateConfigurationSetRequest, _super);
    function GetCreateConfigurationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateConfigurationSetQueryParams)
    ], GetCreateConfigurationSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateConfigurationSetHeaders)
    ], GetCreateConfigurationSetRequest.prototype, "headers", void 0);
    return GetCreateConfigurationSetRequest;
}(SpeakeasyBase));
export { GetCreateConfigurationSetRequest };
var GetCreateConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(GetCreateConfigurationSetResponse, _super);
    function GetCreateConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateConfigurationSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateConfigurationSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateConfigurationSetResponse.prototype, "statusCode", void 0);
    return GetCreateConfigurationSetResponse;
}(SpeakeasyBase));
export { GetCreateConfigurationSetResponse };
