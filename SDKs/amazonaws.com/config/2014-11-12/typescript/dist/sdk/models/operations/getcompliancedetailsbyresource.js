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
import * as shared from "../shared";
var GetComplianceDetailsByResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetComplianceDetailsByResourceQueryParams, _super);
    function GetComplianceDetailsByResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceQueryParams.prototype, "nextToken", void 0);
    return GetComplianceDetailsByResourceQueryParams;
}(SpeakeasyBase));
export { GetComplianceDetailsByResourceQueryParams };
export var GetComplianceDetailsByResourceXAmzTargetEnum;
(function (GetComplianceDetailsByResourceXAmzTargetEnum) {
    GetComplianceDetailsByResourceXAmzTargetEnum["StarlingDoveServiceGetComplianceDetailsByResource"] = "StarlingDoveService.GetComplianceDetailsByResource";
})(GetComplianceDetailsByResourceXAmzTargetEnum || (GetComplianceDetailsByResourceXAmzTargetEnum = {}));
var GetComplianceDetailsByResourceHeaders = /** @class */ (function (_super) {
    __extends(GetComplianceDetailsByResourceHeaders, _super);
    function GetComplianceDetailsByResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceHeaders.prototype, "xAmzTarget", void 0);
    return GetComplianceDetailsByResourceHeaders;
}(SpeakeasyBase));
export { GetComplianceDetailsByResourceHeaders };
var GetComplianceDetailsByResourceRequest = /** @class */ (function (_super) {
    __extends(GetComplianceDetailsByResourceRequest, _super);
    function GetComplianceDetailsByResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetComplianceDetailsByResourceQueryParams)
    ], GetComplianceDetailsByResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetComplianceDetailsByResourceHeaders)
    ], GetComplianceDetailsByResourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetComplianceDetailsByResourceRequest)
    ], GetComplianceDetailsByResourceRequest.prototype, "request", void 0);
    return GetComplianceDetailsByResourceRequest;
}(SpeakeasyBase));
export { GetComplianceDetailsByResourceRequest };
var GetComplianceDetailsByResourceResponse = /** @class */ (function (_super) {
    __extends(GetComplianceDetailsByResourceResponse, _super);
    function GetComplianceDetailsByResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetComplianceDetailsByResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetComplianceDetailsByResourceResponse)
    ], GetComplianceDetailsByResourceResponse.prototype, "getComplianceDetailsByResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComplianceDetailsByResourceResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetComplianceDetailsByResourceResponse.prototype, "statusCode", void 0);
    return GetComplianceDetailsByResourceResponse;
}(SpeakeasyBase));
export { GetComplianceDetailsByResourceResponse };
