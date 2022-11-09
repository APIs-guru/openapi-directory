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
import * as shared from "../shared";
export var GetSettingsAttributeEnum;
(function (GetSettingsAttributeEnum) {
    GetSettingsAttributeEnum["All"] = "ALL";
    GetSettingsAttributeEnum["IsAwsOrgEnabled"] = "IS_AWS_ORG_ENABLED";
    GetSettingsAttributeEnum["SnsTopic"] = "SNS_TOPIC";
    GetSettingsAttributeEnum["DefaultAssessmentReportsDestination"] = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION";
    GetSettingsAttributeEnum["DefaultProcessOwners"] = "DEFAULT_PROCESS_OWNERS";
})(GetSettingsAttributeEnum || (GetSettingsAttributeEnum = {}));
var GetSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetSettingsPathParams, _super);
    function GetSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attribute" }),
        __metadata("design:type", String)
    ], GetSettingsPathParams.prototype, "attribute", void 0);
    return GetSettingsPathParams;
}(SpeakeasyBase));
export { GetSettingsPathParams };
var GetSettingsHeaders = /** @class */ (function (_super) {
    __extends(GetSettingsHeaders, _super);
    function GetSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSettingsHeaders;
}(SpeakeasyBase));
export { GetSettingsHeaders };
var GetSettingsRequest = /** @class */ (function (_super) {
    __extends(GetSettingsRequest, _super);
    function GetSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSettingsPathParams)
    ], GetSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSettingsHeaders)
    ], GetSettingsRequest.prototype, "headers", void 0);
    return GetSettingsRequest;
}(SpeakeasyBase));
export { GetSettingsRequest };
var GetSettingsResponse = /** @class */ (function (_super) {
    __extends(GetSettingsResponse, _super);
    function GetSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSettingsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetSettingsResponse)
    ], GetSettingsResponse.prototype, "getSettingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSettingsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSettingsResponse.prototype, "statusCode", void 0);
    return GetSettingsResponse;
}(SpeakeasyBase));
export { GetSettingsResponse };
