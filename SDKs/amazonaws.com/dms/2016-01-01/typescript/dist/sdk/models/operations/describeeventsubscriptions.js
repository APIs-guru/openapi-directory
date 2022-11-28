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
var DescribeEventSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsQueryParams, _super);
    function DescribeEventSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsQueryParams.prototype, "maxRecords", void 0);
    return DescribeEventSubscriptionsQueryParams;
}(SpeakeasyBase));
export { DescribeEventSubscriptionsQueryParams };
export var DescribeEventSubscriptionsXAmzTargetEnum;
(function (DescribeEventSubscriptionsXAmzTargetEnum) {
    DescribeEventSubscriptionsXAmzTargetEnum["AmazonDmSv20160101DescribeEventSubscriptions"] = "AmazonDMSv20160101.DescribeEventSubscriptions";
})(DescribeEventSubscriptionsXAmzTargetEnum || (DescribeEventSubscriptionsXAmzTargetEnum = {}));
var DescribeEventSubscriptionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsHeaders, _super);
    function DescribeEventSubscriptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEventSubscriptionsHeaders;
}(SpeakeasyBase));
export { DescribeEventSubscriptionsHeaders };
var DescribeEventSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsRequest, _super);
    function DescribeEventSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEventSubscriptionsQueryParams)
    ], DescribeEventSubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEventSubscriptionsHeaders)
    ], DescribeEventSubscriptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEventSubscriptionsMessage)
    ], DescribeEventSubscriptionsRequest.prototype, "request", void 0);
    return DescribeEventSubscriptionsRequest;
}(SpeakeasyBase));
export { DescribeEventSubscriptionsRequest };
var DescribeEventSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsResponse, _super);
    function DescribeEventSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeEventSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeEventSubscriptionsResponse)
    ], DescribeEventSubscriptionsResponse.prototype, "describeEventSubscriptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEventSubscriptionsResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeEventSubscriptionsResponse.prototype, "statusCode", void 0);
    return DescribeEventSubscriptionsResponse;
}(SpeakeasyBase));
export { DescribeEventSubscriptionsResponse };
