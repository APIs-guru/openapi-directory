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
export var GetListGroupPoliciesActionEnum;
(function (GetListGroupPoliciesActionEnum) {
    GetListGroupPoliciesActionEnum["ListGroupPolicies"] = "ListGroupPolicies";
})(GetListGroupPoliciesActionEnum || (GetListGroupPoliciesActionEnum = {}));
export var GetListGroupPoliciesVersionEnum;
(function (GetListGroupPoliciesVersionEnum) {
    GetListGroupPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListGroupPoliciesVersionEnum || (GetListGroupPoliciesVersionEnum = {}));
var GetListGroupPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListGroupPoliciesQueryParams, _super);
    function GetListGroupPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListGroupPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesQueryParams.prototype, "version", void 0);
    return GetListGroupPoliciesQueryParams;
}(SpeakeasyBase));
export { GetListGroupPoliciesQueryParams };
var GetListGroupPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListGroupPoliciesHeaders, _super);
    function GetListGroupPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListGroupPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListGroupPoliciesHeaders;
}(SpeakeasyBase));
export { GetListGroupPoliciesHeaders };
var GetListGroupPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListGroupPoliciesRequest, _super);
    function GetListGroupPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListGroupPoliciesQueryParams)
    ], GetListGroupPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListGroupPoliciesHeaders)
    ], GetListGroupPoliciesRequest.prototype, "headers", void 0);
    return GetListGroupPoliciesRequest;
}(SpeakeasyBase));
export { GetListGroupPoliciesRequest };
var GetListGroupPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListGroupPoliciesResponse, _super);
    function GetListGroupPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListGroupPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListGroupPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListGroupPoliciesResponse.prototype, "statusCode", void 0);
    return GetListGroupPoliciesResponse;
}(SpeakeasyBase));
export { GetListGroupPoliciesResponse };
