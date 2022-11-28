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
var GetDiscoveredResourceCountsQueryParams = /** @class */ (function (_super) {
    __extends(GetDiscoveredResourceCountsQueryParams, _super);
    function GetDiscoveredResourceCountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsQueryParams.prototype, "nextToken", void 0);
    return GetDiscoveredResourceCountsQueryParams;
}(SpeakeasyBase));
export { GetDiscoveredResourceCountsQueryParams };
export var GetDiscoveredResourceCountsXAmzTargetEnum;
(function (GetDiscoveredResourceCountsXAmzTargetEnum) {
    GetDiscoveredResourceCountsXAmzTargetEnum["StarlingDoveServiceGetDiscoveredResourceCounts"] = "StarlingDoveService.GetDiscoveredResourceCounts";
})(GetDiscoveredResourceCountsXAmzTargetEnum || (GetDiscoveredResourceCountsXAmzTargetEnum = {}));
var GetDiscoveredResourceCountsHeaders = /** @class */ (function (_super) {
    __extends(GetDiscoveredResourceCountsHeaders, _super);
    function GetDiscoveredResourceCountsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsHeaders.prototype, "xAmzTarget", void 0);
    return GetDiscoveredResourceCountsHeaders;
}(SpeakeasyBase));
export { GetDiscoveredResourceCountsHeaders };
var GetDiscoveredResourceCountsRequest = /** @class */ (function (_super) {
    __extends(GetDiscoveredResourceCountsRequest, _super);
    function GetDiscoveredResourceCountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDiscoveredResourceCountsQueryParams)
    ], GetDiscoveredResourceCountsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDiscoveredResourceCountsHeaders)
    ], GetDiscoveredResourceCountsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDiscoveredResourceCountsRequest)
    ], GetDiscoveredResourceCountsRequest.prototype, "request", void 0);
    return GetDiscoveredResourceCountsRequest;
}(SpeakeasyBase));
export { GetDiscoveredResourceCountsRequest };
var GetDiscoveredResourceCountsResponse = /** @class */ (function (_super) {
    __extends(GetDiscoveredResourceCountsResponse, _super);
    function GetDiscoveredResourceCountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDiscoveredResourceCountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDiscoveredResourceCountsResponse)
    ], GetDiscoveredResourceCountsResponse.prototype, "getDiscoveredResourceCountsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDiscoveredResourceCountsResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDiscoveredResourceCountsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDiscoveredResourceCountsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDiscoveredResourceCountsResponse.prototype, "validationException", void 0);
    return GetDiscoveredResourceCountsResponse;
}(SpeakeasyBase));
export { GetDiscoveredResourceCountsResponse };
