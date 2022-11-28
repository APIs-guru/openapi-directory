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
export var GetDescribeByoipCidrsActionEnum;
(function (GetDescribeByoipCidrsActionEnum) {
    GetDescribeByoipCidrsActionEnum["DescribeByoipCidrs"] = "DescribeByoipCidrs";
})(GetDescribeByoipCidrsActionEnum || (GetDescribeByoipCidrsActionEnum = {}));
export var GetDescribeByoipCidrsVersionEnum;
(function (GetDescribeByoipCidrsVersionEnum) {
    GetDescribeByoipCidrsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeByoipCidrsVersionEnum || (GetDescribeByoipCidrsVersionEnum = {}));
var GetDescribeByoipCidrsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeByoipCidrsQueryParams, _super);
    function GetDescribeByoipCidrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeByoipCidrsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeByoipCidrsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsQueryParams.prototype, "version", void 0);
    return GetDescribeByoipCidrsQueryParams;
}(SpeakeasyBase));
export { GetDescribeByoipCidrsQueryParams };
var GetDescribeByoipCidrsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeByoipCidrsHeaders, _super);
    function GetDescribeByoipCidrsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeByoipCidrsHeaders;
}(SpeakeasyBase));
export { GetDescribeByoipCidrsHeaders };
var GetDescribeByoipCidrsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeByoipCidrsRequest, _super);
    function GetDescribeByoipCidrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeByoipCidrsQueryParams)
    ], GetDescribeByoipCidrsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeByoipCidrsHeaders)
    ], GetDescribeByoipCidrsRequest.prototype, "headers", void 0);
    return GetDescribeByoipCidrsRequest;
}(SpeakeasyBase));
export { GetDescribeByoipCidrsRequest };
var GetDescribeByoipCidrsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeByoipCidrsResponse, _super);
    function GetDescribeByoipCidrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeByoipCidrsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeByoipCidrsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeByoipCidrsResponse.prototype, "statusCode", void 0);
    return GetDescribeByoipCidrsResponse;
}(SpeakeasyBase));
export { GetDescribeByoipCidrsResponse };
