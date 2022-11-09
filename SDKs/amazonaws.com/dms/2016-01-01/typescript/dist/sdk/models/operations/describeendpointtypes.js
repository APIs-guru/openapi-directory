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
import * as shared from "../shared";
var DescribeEndpointTypesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeEndpointTypesQueryParams, _super);
    function DescribeEndpointTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesQueryParams.prototype, "maxRecords", void 0);
    return DescribeEndpointTypesQueryParams;
}(SpeakeasyBase));
export { DescribeEndpointTypesQueryParams };
export var DescribeEndpointTypesXAmzTargetEnum;
(function (DescribeEndpointTypesXAmzTargetEnum) {
    DescribeEndpointTypesXAmzTargetEnum["AmazonDmSv20160101DescribeEndpointTypes"] = "AmazonDMSv20160101.DescribeEndpointTypes";
})(DescribeEndpointTypesXAmzTargetEnum || (DescribeEndpointTypesXAmzTargetEnum = {}));
var DescribeEndpointTypesHeaders = /** @class */ (function (_super) {
    __extends(DescribeEndpointTypesHeaders, _super);
    function DescribeEndpointTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEndpointTypesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEndpointTypesHeaders;
}(SpeakeasyBase));
export { DescribeEndpointTypesHeaders };
var DescribeEndpointTypesRequest = /** @class */ (function (_super) {
    __extends(DescribeEndpointTypesRequest, _super);
    function DescribeEndpointTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeEndpointTypesQueryParams)
    ], DescribeEndpointTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeEndpointTypesHeaders)
    ], DescribeEndpointTypesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEndpointTypesMessage)
    ], DescribeEndpointTypesRequest.prototype, "request", void 0);
    return DescribeEndpointTypesRequest;
}(SpeakeasyBase));
export { DescribeEndpointTypesRequest };
var DescribeEndpointTypesResponse = /** @class */ (function (_super) {
    __extends(DescribeEndpointTypesResponse, _super);
    function DescribeEndpointTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeEndpointTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeEndpointTypesResponse)
    ], DescribeEndpointTypesResponse.prototype, "describeEndpointTypesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeEndpointTypesResponse.prototype, "statusCode", void 0);
    return DescribeEndpointTypesResponse;
}(SpeakeasyBase));
export { DescribeEndpointTypesResponse };
