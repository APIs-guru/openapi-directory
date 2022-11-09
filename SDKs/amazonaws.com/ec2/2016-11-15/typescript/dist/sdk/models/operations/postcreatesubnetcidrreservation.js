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
export var PostCreateSubnetCidrReservationActionEnum;
(function (PostCreateSubnetCidrReservationActionEnum) {
    PostCreateSubnetCidrReservationActionEnum["CreateSubnetCidrReservation"] = "CreateSubnetCidrReservation";
})(PostCreateSubnetCidrReservationActionEnum || (PostCreateSubnetCidrReservationActionEnum = {}));
export var PostCreateSubnetCidrReservationVersionEnum;
(function (PostCreateSubnetCidrReservationVersionEnum) {
    PostCreateSubnetCidrReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateSubnetCidrReservationVersionEnum || (PostCreateSubnetCidrReservationVersionEnum = {}));
var PostCreateSubnetCidrReservationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateSubnetCidrReservationQueryParams, _super);
    function PostCreateSubnetCidrReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationQueryParams.prototype, "version", void 0);
    return PostCreateSubnetCidrReservationQueryParams;
}(SpeakeasyBase));
export { PostCreateSubnetCidrReservationQueryParams };
var PostCreateSubnetCidrReservationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateSubnetCidrReservationHeaders, _super);
    function PostCreateSubnetCidrReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateSubnetCidrReservationHeaders;
}(SpeakeasyBase));
export { PostCreateSubnetCidrReservationHeaders };
var PostCreateSubnetCidrReservationRequest = /** @class */ (function (_super) {
    __extends(PostCreateSubnetCidrReservationRequest, _super);
    function PostCreateSubnetCidrReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateSubnetCidrReservationQueryParams)
    ], PostCreateSubnetCidrReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateSubnetCidrReservationHeaders)
    ], PostCreateSubnetCidrReservationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateSubnetCidrReservationRequest.prototype, "request", void 0);
    return PostCreateSubnetCidrReservationRequest;
}(SpeakeasyBase));
export { PostCreateSubnetCidrReservationRequest };
var PostCreateSubnetCidrReservationResponse = /** @class */ (function (_super) {
    __extends(PostCreateSubnetCidrReservationResponse, _super);
    function PostCreateSubnetCidrReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateSubnetCidrReservationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateSubnetCidrReservationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateSubnetCidrReservationResponse.prototype, "statusCode", void 0);
    return PostCreateSubnetCidrReservationResponse;
}(SpeakeasyBase));
export { PostCreateSubnetCidrReservationResponse };
