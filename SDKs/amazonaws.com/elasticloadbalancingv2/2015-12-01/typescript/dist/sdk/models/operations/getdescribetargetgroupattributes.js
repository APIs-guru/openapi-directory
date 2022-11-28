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
export var GetDescribeTargetGroupAttributesActionEnum;
(function (GetDescribeTargetGroupAttributesActionEnum) {
    GetDescribeTargetGroupAttributesActionEnum["DescribeTargetGroupAttributes"] = "DescribeTargetGroupAttributes";
})(GetDescribeTargetGroupAttributesActionEnum || (GetDescribeTargetGroupAttributesActionEnum = {}));
export var GetDescribeTargetGroupAttributesVersionEnum;
(function (GetDescribeTargetGroupAttributesVersionEnum) {
    GetDescribeTargetGroupAttributesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeTargetGroupAttributesVersionEnum || (GetDescribeTargetGroupAttributesVersionEnum = {}));
var GetDescribeTargetGroupAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupAttributesQueryParams, _super);
    function GetDescribeTargetGroupAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesQueryParams.prototype, "targetGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesQueryParams.prototype, "version", void 0);
    return GetDescribeTargetGroupAttributesQueryParams;
}(SpeakeasyBase));
export { GetDescribeTargetGroupAttributesQueryParams };
var GetDescribeTargetGroupAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupAttributesHeaders, _super);
    function GetDescribeTargetGroupAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeTargetGroupAttributesHeaders;
}(SpeakeasyBase));
export { GetDescribeTargetGroupAttributesHeaders };
var GetDescribeTargetGroupAttributesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupAttributesRequest, _super);
    function GetDescribeTargetGroupAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTargetGroupAttributesQueryParams)
    ], GetDescribeTargetGroupAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTargetGroupAttributesHeaders)
    ], GetDescribeTargetGroupAttributesRequest.prototype, "headers", void 0);
    return GetDescribeTargetGroupAttributesRequest;
}(SpeakeasyBase));
export { GetDescribeTargetGroupAttributesRequest };
var GetDescribeTargetGroupAttributesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupAttributesResponse, _super);
    function GetDescribeTargetGroupAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeTargetGroupAttributesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeTargetGroupAttributesResponse.prototype, "statusCode", void 0);
    return GetDescribeTargetGroupAttributesResponse;
}(SpeakeasyBase));
export { GetDescribeTargetGroupAttributesResponse };
