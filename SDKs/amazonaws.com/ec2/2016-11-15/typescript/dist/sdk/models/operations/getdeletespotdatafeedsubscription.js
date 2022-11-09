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
export var GetDeleteSpotDatafeedSubscriptionActionEnum;
(function (GetDeleteSpotDatafeedSubscriptionActionEnum) {
    GetDeleteSpotDatafeedSubscriptionActionEnum["DeleteSpotDatafeedSubscription"] = "DeleteSpotDatafeedSubscription";
})(GetDeleteSpotDatafeedSubscriptionActionEnum || (GetDeleteSpotDatafeedSubscriptionActionEnum = {}));
export var GetDeleteSpotDatafeedSubscriptionVersionEnum;
(function (GetDeleteSpotDatafeedSubscriptionVersionEnum) {
    GetDeleteSpotDatafeedSubscriptionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteSpotDatafeedSubscriptionVersionEnum || (GetDeleteSpotDatafeedSubscriptionVersionEnum = {}));
var GetDeleteSpotDatafeedSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSpotDatafeedSubscriptionQueryParams, _super);
    function GetDeleteSpotDatafeedSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteSpotDatafeedSubscriptionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionQueryParams.prototype, "version", void 0);
    return GetDeleteSpotDatafeedSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetDeleteSpotDatafeedSubscriptionQueryParams };
var GetDeleteSpotDatafeedSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSpotDatafeedSubscriptionHeaders, _super);
    function GetDeleteSpotDatafeedSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSpotDatafeedSubscriptionHeaders;
}(SpeakeasyBase));
export { GetDeleteSpotDatafeedSubscriptionHeaders };
var GetDeleteSpotDatafeedSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSpotDatafeedSubscriptionRequest, _super);
    function GetDeleteSpotDatafeedSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteSpotDatafeedSubscriptionQueryParams)
    ], GetDeleteSpotDatafeedSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteSpotDatafeedSubscriptionHeaders)
    ], GetDeleteSpotDatafeedSubscriptionRequest.prototype, "headers", void 0);
    return GetDeleteSpotDatafeedSubscriptionRequest;
}(SpeakeasyBase));
export { GetDeleteSpotDatafeedSubscriptionRequest };
var GetDeleteSpotDatafeedSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSpotDatafeedSubscriptionResponse, _super);
    function GetDeleteSpotDatafeedSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteSpotDatafeedSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteSpotDatafeedSubscriptionResponse.prototype, "statusCode", void 0);
    return GetDeleteSpotDatafeedSubscriptionResponse;
}(SpeakeasyBase));
export { GetDeleteSpotDatafeedSubscriptionResponse };
