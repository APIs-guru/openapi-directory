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
var ListReportsForReportGroupQueryParams = /** @class */ (function (_super) {
    __extends(ListReportsForReportGroupQueryParams, _super);
    function ListReportsForReportGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupQueryParams.prototype, "nextToken", void 0);
    return ListReportsForReportGroupQueryParams;
}(SpeakeasyBase));
export { ListReportsForReportGroupQueryParams };
export var ListReportsForReportGroupXAmzTargetEnum;
(function (ListReportsForReportGroupXAmzTargetEnum) {
    ListReportsForReportGroupXAmzTargetEnum["CodeBuild20161006ListReportsForReportGroup"] = "CodeBuild_20161006.ListReportsForReportGroup";
})(ListReportsForReportGroupXAmzTargetEnum || (ListReportsForReportGroupXAmzTargetEnum = {}));
var ListReportsForReportGroupHeaders = /** @class */ (function (_super) {
    __extends(ListReportsForReportGroupHeaders, _super);
    function ListReportsForReportGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListReportsForReportGroupHeaders.prototype, "xAmzTarget", void 0);
    return ListReportsForReportGroupHeaders;
}(SpeakeasyBase));
export { ListReportsForReportGroupHeaders };
var ListReportsForReportGroupRequest = /** @class */ (function (_super) {
    __extends(ListReportsForReportGroupRequest, _super);
    function ListReportsForReportGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListReportsForReportGroupQueryParams)
    ], ListReportsForReportGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListReportsForReportGroupHeaders)
    ], ListReportsForReportGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListReportsForReportGroupInput)
    ], ListReportsForReportGroupRequest.prototype, "request", void 0);
    return ListReportsForReportGroupRequest;
}(SpeakeasyBase));
export { ListReportsForReportGroupRequest };
var ListReportsForReportGroupResponse = /** @class */ (function (_super) {
    __extends(ListReportsForReportGroupResponse, _super);
    function ListReportsForReportGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListReportsForReportGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListReportsForReportGroupResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReportsForReportGroupOutput)
    ], ListReportsForReportGroupResponse.prototype, "listReportsForReportGroupOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListReportsForReportGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListReportsForReportGroupResponse.prototype, "statusCode", void 0);
    return ListReportsForReportGroupResponse;
}(SpeakeasyBase));
export { ListReportsForReportGroupResponse };
