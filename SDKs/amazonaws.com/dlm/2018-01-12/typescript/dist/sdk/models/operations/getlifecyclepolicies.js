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
export var GetLifecyclePoliciesStateEnum;
(function (GetLifecyclePoliciesStateEnum) {
    GetLifecyclePoliciesStateEnum["Enabled"] = "ENABLED";
    GetLifecyclePoliciesStateEnum["Disabled"] = "DISABLED";
    GetLifecyclePoliciesStateEnum["Error"] = "ERROR";
})(GetLifecyclePoliciesStateEnum || (GetLifecyclePoliciesStateEnum = {}));
var GetLifecyclePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetLifecyclePoliciesQueryParams, _super);
    function GetLifecyclePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyIds" }),
        __metadata("design:type", Array)
    ], GetLifecyclePoliciesQueryParams.prototype, "policyIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" }),
        __metadata("design:type", Array)
    ], GetLifecyclePoliciesQueryParams.prototype, "resourceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagsToAdd" }),
        __metadata("design:type", Array)
    ], GetLifecyclePoliciesQueryParams.prototype, "tagsToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetTags" }),
        __metadata("design:type", Array)
    ], GetLifecyclePoliciesQueryParams.prototype, "targetTags", void 0);
    return GetLifecyclePoliciesQueryParams;
}(SpeakeasyBase));
export { GetLifecyclePoliciesQueryParams };
var GetLifecyclePoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetLifecyclePoliciesHeaders, _super);
    function GetLifecyclePoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetLifecyclePoliciesHeaders;
}(SpeakeasyBase));
export { GetLifecyclePoliciesHeaders };
var GetLifecyclePoliciesRequest = /** @class */ (function (_super) {
    __extends(GetLifecyclePoliciesRequest, _super);
    function GetLifecyclePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLifecyclePoliciesQueryParams)
    ], GetLifecyclePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLifecyclePoliciesHeaders)
    ], GetLifecyclePoliciesRequest.prototype, "headers", void 0);
    return GetLifecyclePoliciesRequest;
}(SpeakeasyBase));
export { GetLifecyclePoliciesRequest };
var GetLifecyclePoliciesResponse = /** @class */ (function (_super) {
    __extends(GetLifecyclePoliciesResponse, _super);
    function GetLifecyclePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLifecyclePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetLifecyclePoliciesResponse)
    ], GetLifecyclePoliciesResponse.prototype, "getLifecyclePoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePoliciesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePoliciesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePoliciesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePoliciesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLifecyclePoliciesResponse.prototype, "statusCode", void 0);
    return GetLifecyclePoliciesResponse;
}(SpeakeasyBase));
export { GetLifecyclePoliciesResponse };
