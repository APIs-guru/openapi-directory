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
export var PostDescribeHostReservationsActionEnum;
(function (PostDescribeHostReservationsActionEnum) {
    PostDescribeHostReservationsActionEnum["DescribeHostReservations"] = "DescribeHostReservations";
})(PostDescribeHostReservationsActionEnum || (PostDescribeHostReservationsActionEnum = {}));
export var PostDescribeHostReservationsVersionEnum;
(function (PostDescribeHostReservationsVersionEnum) {
    PostDescribeHostReservationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeHostReservationsVersionEnum || (PostDescribeHostReservationsVersionEnum = {}));
var PostDescribeHostReservationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeHostReservationsQueryParams, _super);
    function PostDescribeHostReservationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsQueryParams.prototype, "version", void 0);
    return PostDescribeHostReservationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeHostReservationsQueryParams };
var PostDescribeHostReservationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeHostReservationsHeaders, _super);
    function PostDescribeHostReservationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeHostReservationsHeaders;
}(SpeakeasyBase));
export { PostDescribeHostReservationsHeaders };
var PostDescribeHostReservationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeHostReservationsRequest, _super);
    function PostDescribeHostReservationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeHostReservationsQueryParams)
    ], PostDescribeHostReservationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeHostReservationsHeaders)
    ], PostDescribeHostReservationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeHostReservationsRequest.prototype, "request", void 0);
    return PostDescribeHostReservationsRequest;
}(SpeakeasyBase));
export { PostDescribeHostReservationsRequest };
var PostDescribeHostReservationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeHostReservationsResponse, _super);
    function PostDescribeHostReservationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeHostReservationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeHostReservationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeHostReservationsResponse.prototype, "statusCode", void 0);
    return PostDescribeHostReservationsResponse;
}(SpeakeasyBase));
export { PostDescribeHostReservationsResponse };
