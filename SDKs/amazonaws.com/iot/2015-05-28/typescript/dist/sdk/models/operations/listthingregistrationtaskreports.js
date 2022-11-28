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
var ListThingRegistrationTaskReportsPathParams = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsPathParams, _super);
    function ListThingRegistrationTaskReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsPathParams.prototype, "taskId", void 0);
    return ListThingRegistrationTaskReportsPathParams;
}(SpeakeasyBase));
export { ListThingRegistrationTaskReportsPathParams };
export var ListThingRegistrationTaskReportsReportTypeEnum;
(function (ListThingRegistrationTaskReportsReportTypeEnum) {
    ListThingRegistrationTaskReportsReportTypeEnum["Errors"] = "ERRORS";
    ListThingRegistrationTaskReportsReportTypeEnum["Results"] = "RESULTS";
})(ListThingRegistrationTaskReportsReportTypeEnum || (ListThingRegistrationTaskReportsReportTypeEnum = {}));
var ListThingRegistrationTaskReportsQueryParams = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsQueryParams, _super);
    function ListThingRegistrationTaskReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListThingRegistrationTaskReportsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsQueryParams.prototype, "reportType", void 0);
    return ListThingRegistrationTaskReportsQueryParams;
}(SpeakeasyBase));
export { ListThingRegistrationTaskReportsQueryParams };
var ListThingRegistrationTaskReportsHeaders = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsHeaders, _super);
    function ListThingRegistrationTaskReportsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListThingRegistrationTaskReportsHeaders;
}(SpeakeasyBase));
export { ListThingRegistrationTaskReportsHeaders };
var ListThingRegistrationTaskReportsRequest = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsRequest, _super);
    function ListThingRegistrationTaskReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingRegistrationTaskReportsPathParams)
    ], ListThingRegistrationTaskReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingRegistrationTaskReportsQueryParams)
    ], ListThingRegistrationTaskReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingRegistrationTaskReportsHeaders)
    ], ListThingRegistrationTaskReportsRequest.prototype, "headers", void 0);
    return ListThingRegistrationTaskReportsRequest;
}(SpeakeasyBase));
export { ListThingRegistrationTaskReportsRequest };
var ListThingRegistrationTaskReportsResponse = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsResponse, _super);
    function ListThingRegistrationTaskReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListThingRegistrationTaskReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTaskReportsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTaskReportsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListThingRegistrationTaskReportsResponse)
    ], ListThingRegistrationTaskReportsResponse.prototype, "listThingRegistrationTaskReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListThingRegistrationTaskReportsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTaskReportsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTaskReportsResponse.prototype, "unauthorizedException", void 0);
    return ListThingRegistrationTaskReportsResponse;
}(SpeakeasyBase));
export { ListThingRegistrationTaskReportsResponse };
