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
export var ListThingRegistrationTasksStatusEnum;
(function (ListThingRegistrationTasksStatusEnum) {
    ListThingRegistrationTasksStatusEnum["InProgress"] = "InProgress";
    ListThingRegistrationTasksStatusEnum["Completed"] = "Completed";
    ListThingRegistrationTasksStatusEnum["Failed"] = "Failed";
    ListThingRegistrationTasksStatusEnum["Cancelled"] = "Cancelled";
    ListThingRegistrationTasksStatusEnum["Cancelling"] = "Cancelling";
})(ListThingRegistrationTasksStatusEnum || (ListThingRegistrationTasksStatusEnum = {}));
var ListThingRegistrationTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTasksQueryParams, _super);
    function ListThingRegistrationTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListThingRegistrationTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksQueryParams.prototype, "status", void 0);
    return ListThingRegistrationTasksQueryParams;
}(SpeakeasyBase));
export { ListThingRegistrationTasksQueryParams };
var ListThingRegistrationTasksHeaders = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTasksHeaders, _super);
    function ListThingRegistrationTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListThingRegistrationTasksHeaders;
}(SpeakeasyBase));
export { ListThingRegistrationTasksHeaders };
var ListThingRegistrationTasksRequest = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTasksRequest, _super);
    function ListThingRegistrationTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingRegistrationTasksQueryParams)
    ], ListThingRegistrationTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingRegistrationTasksHeaders)
    ], ListThingRegistrationTasksRequest.prototype, "headers", void 0);
    return ListThingRegistrationTasksRequest;
}(SpeakeasyBase));
export { ListThingRegistrationTasksRequest };
var ListThingRegistrationTasksResponse = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTasksResponse, _super);
    function ListThingRegistrationTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListThingRegistrationTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTasksResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTasksResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListThingRegistrationTasksResponse)
    ], ListThingRegistrationTasksResponse.prototype, "listThingRegistrationTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListThingRegistrationTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTasksResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingRegistrationTasksResponse.prototype, "unauthorizedException", void 0);
    return ListThingRegistrationTasksResponse;
}(SpeakeasyBase));
export { ListThingRegistrationTasksResponse };
