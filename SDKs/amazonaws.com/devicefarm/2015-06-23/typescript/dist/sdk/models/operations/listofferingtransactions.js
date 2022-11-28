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
var ListOfferingTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(ListOfferingTransactionsQueryParams, _super);
    function ListOfferingTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsQueryParams.prototype, "nextToken", void 0);
    return ListOfferingTransactionsQueryParams;
}(SpeakeasyBase));
export { ListOfferingTransactionsQueryParams };
export var ListOfferingTransactionsXAmzTargetEnum;
(function (ListOfferingTransactionsXAmzTargetEnum) {
    ListOfferingTransactionsXAmzTargetEnum["DeviceFarm20150623ListOfferingTransactions"] = "DeviceFarm_20150623.ListOfferingTransactions";
})(ListOfferingTransactionsXAmzTargetEnum || (ListOfferingTransactionsXAmzTargetEnum = {}));
var ListOfferingTransactionsHeaders = /** @class */ (function (_super) {
    __extends(ListOfferingTransactionsHeaders, _super);
    function ListOfferingTransactionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListOfferingTransactionsHeaders.prototype, "xAmzTarget", void 0);
    return ListOfferingTransactionsHeaders;
}(SpeakeasyBase));
export { ListOfferingTransactionsHeaders };
var ListOfferingTransactionsRequest = /** @class */ (function (_super) {
    __extends(ListOfferingTransactionsRequest, _super);
    function ListOfferingTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOfferingTransactionsQueryParams)
    ], ListOfferingTransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOfferingTransactionsHeaders)
    ], ListOfferingTransactionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOfferingTransactionsRequest)
    ], ListOfferingTransactionsRequest.prototype, "request", void 0);
    return ListOfferingTransactionsRequest;
}(SpeakeasyBase));
export { ListOfferingTransactionsRequest };
var ListOfferingTransactionsResponse = /** @class */ (function (_super) {
    __extends(ListOfferingTransactionsResponse, _super);
    function ListOfferingTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOfferingTransactionsResponse.prototype, "argumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListOfferingTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOfferingTransactionsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOfferingTransactionsResult)
    ], ListOfferingTransactionsResponse.prototype, "listOfferingTransactionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOfferingTransactionsResponse.prototype, "notEligibleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOfferingTransactionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOfferingTransactionsResponse.prototype, "serviceAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListOfferingTransactionsResponse.prototype, "statusCode", void 0);
    return ListOfferingTransactionsResponse;
}(SpeakeasyBase));
export { ListOfferingTransactionsResponse };
