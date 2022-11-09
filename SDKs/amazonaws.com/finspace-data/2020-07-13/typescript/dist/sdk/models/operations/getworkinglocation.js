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
var GetWorkingLocationHeaders = /** @class */ (function (_super) {
    __extends(GetWorkingLocationHeaders, _super);
    function GetWorkingLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetWorkingLocationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetWorkingLocationHeaders;
}(SpeakeasyBase));
export { GetWorkingLocationHeaders };
export var GetWorkingLocationRequestBodyLocationTypeEnum;
(function (GetWorkingLocationRequestBodyLocationTypeEnum) {
    GetWorkingLocationRequestBodyLocationTypeEnum["Ingestion"] = "INGESTION";
    GetWorkingLocationRequestBodyLocationTypeEnum["Sagemaker"] = "SAGEMAKER";
})(GetWorkingLocationRequestBodyLocationTypeEnum || (GetWorkingLocationRequestBodyLocationTypeEnum = {}));
var GetWorkingLocationRequestBody = /** @class */ (function (_super) {
    __extends(GetWorkingLocationRequestBody, _super);
    function GetWorkingLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], GetWorkingLocationRequestBody.prototype, "locationType", void 0);
    return GetWorkingLocationRequestBody;
}(SpeakeasyBase));
export { GetWorkingLocationRequestBody };
var GetWorkingLocationRequest = /** @class */ (function (_super) {
    __extends(GetWorkingLocationRequest, _super);
    function GetWorkingLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkingLocationHeaders)
    ], GetWorkingLocationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetWorkingLocationRequestBody)
    ], GetWorkingLocationRequest.prototype, "request", void 0);
    return GetWorkingLocationRequest;
}(SpeakeasyBase));
export { GetWorkingLocationRequest };
var GetWorkingLocationResponse = /** @class */ (function (_super) {
    __extends(GetWorkingLocationResponse, _super);
    function GetWorkingLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWorkingLocationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWorkingLocationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetWorkingLocationResponse)
    ], GetWorkingLocationResponse.prototype, "getWorkingLocationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWorkingLocationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWorkingLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWorkingLocationResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWorkingLocationResponse.prototype, "validationException", void 0);
    return GetWorkingLocationResponse;
}(SpeakeasyBase));
export { GetWorkingLocationResponse };
