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
var CreateCustomMetricPathParams = /** @class */ (function (_super) {
    __extends(CreateCustomMetricPathParams, _super);
    function CreateCustomMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], CreateCustomMetricPathParams.prototype, "metricName", void 0);
    return CreateCustomMetricPathParams;
}(SpeakeasyBase));
export { CreateCustomMetricPathParams };
var CreateCustomMetricHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomMetricHeaders, _super);
    function CreateCustomMetricHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomMetricHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCustomMetricHeaders;
}(SpeakeasyBase));
export { CreateCustomMetricHeaders };
export var CreateCustomMetricRequestBodyMetricTypeEnum;
(function (CreateCustomMetricRequestBodyMetricTypeEnum) {
    CreateCustomMetricRequestBodyMetricTypeEnum["StringList"] = "string-list";
    CreateCustomMetricRequestBodyMetricTypeEnum["IpAddressList"] = "ip-address-list";
    CreateCustomMetricRequestBodyMetricTypeEnum["NumberList"] = "number-list";
    CreateCustomMetricRequestBodyMetricTypeEnum["Number"] = "number";
})(CreateCustomMetricRequestBodyMetricTypeEnum || (CreateCustomMetricRequestBodyMetricTypeEnum = {}));
var CreateCustomMetricRequestBody = /** @class */ (function (_super) {
    __extends(CreateCustomMetricRequestBody, _super);
    function CreateCustomMetricRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateCustomMetricRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CreateCustomMetricRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricType" }),
        __metadata("design:type", String)
    ], CreateCustomMetricRequestBody.prototype, "metricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateCustomMetricRequestBody.prototype, "tags", void 0);
    return CreateCustomMetricRequestBody;
}(SpeakeasyBase));
export { CreateCustomMetricRequestBody };
var CreateCustomMetricRequest = /** @class */ (function (_super) {
    __extends(CreateCustomMetricRequest, _super);
    function CreateCustomMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomMetricPathParams)
    ], CreateCustomMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomMetricHeaders)
    ], CreateCustomMetricRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomMetricRequestBody)
    ], CreateCustomMetricRequest.prototype, "request", void 0);
    return CreateCustomMetricRequest;
}(SpeakeasyBase));
export { CreateCustomMetricRequest };
var CreateCustomMetricResponse = /** @class */ (function (_super) {
    __extends(CreateCustomMetricResponse, _super);
    function CreateCustomMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCustomMetricResponse)
    ], CreateCustomMetricResponse.prototype, "createCustomMetricResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomMetricResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomMetricResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomMetricResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomMetricResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomMetricResponse.prototype, "throttlingException", void 0);
    return CreateCustomMetricResponse;
}(SpeakeasyBase));
export { CreateCustomMetricResponse };
