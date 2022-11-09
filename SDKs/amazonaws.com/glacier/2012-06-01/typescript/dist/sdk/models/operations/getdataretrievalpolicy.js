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
var GetDataRetrievalPolicyPathParams = /** @class */ (function (_super) {
    __extends(GetDataRetrievalPolicyPathParams, _super);
    function GetDataRetrievalPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyPathParams.prototype, "accountId", void 0);
    return GetDataRetrievalPolicyPathParams;
}(SpeakeasyBase));
export { GetDataRetrievalPolicyPathParams };
var GetDataRetrievalPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDataRetrievalPolicyHeaders, _super);
    function GetDataRetrievalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDataRetrievalPolicyHeaders;
}(SpeakeasyBase));
export { GetDataRetrievalPolicyHeaders };
var GetDataRetrievalPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDataRetrievalPolicyRequest, _super);
    function GetDataRetrievalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDataRetrievalPolicyPathParams)
    ], GetDataRetrievalPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDataRetrievalPolicyHeaders)
    ], GetDataRetrievalPolicyRequest.prototype, "headers", void 0);
    return GetDataRetrievalPolicyRequest;
}(SpeakeasyBase));
export { GetDataRetrievalPolicyRequest };
var GetDataRetrievalPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDataRetrievalPolicyResponse, _super);
    function GetDataRetrievalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDataRetrievalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDataRetrievalPolicyOutput)
    ], GetDataRetrievalPolicyResponse.prototype, "getDataRetrievalPolicyOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDataRetrievalPolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDataRetrievalPolicyResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDataRetrievalPolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDataRetrievalPolicyResponse.prototype, "statusCode", void 0);
    return GetDataRetrievalPolicyResponse;
}(SpeakeasyBase));
export { GetDataRetrievalPolicyResponse };
