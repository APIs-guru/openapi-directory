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
export var PostCreateCapacityReservationActionEnum;
(function (PostCreateCapacityReservationActionEnum) {
    PostCreateCapacityReservationActionEnum["CreateCapacityReservation"] = "CreateCapacityReservation";
})(PostCreateCapacityReservationActionEnum || (PostCreateCapacityReservationActionEnum = {}));
export var PostCreateCapacityReservationVersionEnum;
(function (PostCreateCapacityReservationVersionEnum) {
    PostCreateCapacityReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateCapacityReservationVersionEnum || (PostCreateCapacityReservationVersionEnum = {}));
var PostCreateCapacityReservationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateCapacityReservationQueryParams, _super);
    function PostCreateCapacityReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationQueryParams.prototype, "version", void 0);
    return PostCreateCapacityReservationQueryParams;
}(SpeakeasyBase));
export { PostCreateCapacityReservationQueryParams };
var PostCreateCapacityReservationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateCapacityReservationHeaders, _super);
    function PostCreateCapacityReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateCapacityReservationHeaders;
}(SpeakeasyBase));
export { PostCreateCapacityReservationHeaders };
var PostCreateCapacityReservationRequest = /** @class */ (function (_super) {
    __extends(PostCreateCapacityReservationRequest, _super);
    function PostCreateCapacityReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCapacityReservationQueryParams)
    ], PostCreateCapacityReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCapacityReservationHeaders)
    ], PostCreateCapacityReservationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateCapacityReservationRequest.prototype, "request", void 0);
    return PostCreateCapacityReservationRequest;
}(SpeakeasyBase));
export { PostCreateCapacityReservationRequest };
var PostCreateCapacityReservationResponse = /** @class */ (function (_super) {
    __extends(PostCreateCapacityReservationResponse, _super);
    function PostCreateCapacityReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateCapacityReservationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateCapacityReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateCapacityReservationResponse.prototype, "statusCode", void 0);
    return PostCreateCapacityReservationResponse;
}(SpeakeasyBase));
export { PostCreateCapacityReservationResponse };
