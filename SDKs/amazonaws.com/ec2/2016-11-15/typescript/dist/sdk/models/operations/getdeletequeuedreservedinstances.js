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
export var GetDeleteQueuedReservedInstancesActionEnum;
(function (GetDeleteQueuedReservedInstancesActionEnum) {
    GetDeleteQueuedReservedInstancesActionEnum["DeleteQueuedReservedInstances"] = "DeleteQueuedReservedInstances";
})(GetDeleteQueuedReservedInstancesActionEnum || (GetDeleteQueuedReservedInstancesActionEnum = {}));
export var GetDeleteQueuedReservedInstancesVersionEnum;
(function (GetDeleteQueuedReservedInstancesVersionEnum) {
    GetDeleteQueuedReservedInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteQueuedReservedInstancesVersionEnum || (GetDeleteQueuedReservedInstancesVersionEnum = {}));
var GetDeleteQueuedReservedInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteQueuedReservedInstancesQueryParams, _super);
    function GetDeleteQueuedReservedInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteQueuedReservedInstancesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesId" }),
        __metadata("design:type", Array)
    ], GetDeleteQueuedReservedInstancesQueryParams.prototype, "reservedInstancesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesQueryParams.prototype, "version", void 0);
    return GetDeleteQueuedReservedInstancesQueryParams;
}(SpeakeasyBase));
export { GetDeleteQueuedReservedInstancesQueryParams };
var GetDeleteQueuedReservedInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteQueuedReservedInstancesHeaders, _super);
    function GetDeleteQueuedReservedInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteQueuedReservedInstancesHeaders;
}(SpeakeasyBase));
export { GetDeleteQueuedReservedInstancesHeaders };
var GetDeleteQueuedReservedInstancesRequest = /** @class */ (function (_super) {
    __extends(GetDeleteQueuedReservedInstancesRequest, _super);
    function GetDeleteQueuedReservedInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteQueuedReservedInstancesQueryParams)
    ], GetDeleteQueuedReservedInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteQueuedReservedInstancesHeaders)
    ], GetDeleteQueuedReservedInstancesRequest.prototype, "headers", void 0);
    return GetDeleteQueuedReservedInstancesRequest;
}(SpeakeasyBase));
export { GetDeleteQueuedReservedInstancesRequest };
var GetDeleteQueuedReservedInstancesResponse = /** @class */ (function (_super) {
    __extends(GetDeleteQueuedReservedInstancesResponse, _super);
    function GetDeleteQueuedReservedInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteQueuedReservedInstancesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteQueuedReservedInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteQueuedReservedInstancesResponse.prototype, "statusCode", void 0);
    return GetDeleteQueuedReservedInstancesResponse;
}(SpeakeasyBase));
export { GetDeleteQueuedReservedInstancesResponse };
