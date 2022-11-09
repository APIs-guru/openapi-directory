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
var DescribeAlarmModelPathParams = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelPathParams, _super);
    function DescribeAlarmModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=alarmModelName" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelPathParams.prototype, "alarmModelName", void 0);
    return DescribeAlarmModelPathParams;
}(SpeakeasyBase));
export { DescribeAlarmModelPathParams };
var DescribeAlarmModelQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelQueryParams, _super);
    function DescribeAlarmModelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelQueryParams.prototype, "version", void 0);
    return DescribeAlarmModelQueryParams;
}(SpeakeasyBase));
export { DescribeAlarmModelQueryParams };
var DescribeAlarmModelHeaders = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelHeaders, _super);
    function DescribeAlarmModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeAlarmModelHeaders;
}(SpeakeasyBase));
export { DescribeAlarmModelHeaders };
var DescribeAlarmModelRequest = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelRequest, _super);
    function DescribeAlarmModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeAlarmModelPathParams)
    ], DescribeAlarmModelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeAlarmModelQueryParams)
    ], DescribeAlarmModelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeAlarmModelHeaders)
    ], DescribeAlarmModelRequest.prototype, "headers", void 0);
    return DescribeAlarmModelRequest;
}(SpeakeasyBase));
export { DescribeAlarmModelRequest };
var DescribeAlarmModelResponse = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelResponse, _super);
    function DescribeAlarmModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeAlarmModelResponse)
    ], DescribeAlarmModelResponse.prototype, "describeAlarmModelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeAlarmModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeAlarmModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeAlarmModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeAlarmModelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeAlarmModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeAlarmModelResponse.prototype, "throttlingException", void 0);
    return DescribeAlarmModelResponse;
}(SpeakeasyBase));
export { DescribeAlarmModelResponse };
