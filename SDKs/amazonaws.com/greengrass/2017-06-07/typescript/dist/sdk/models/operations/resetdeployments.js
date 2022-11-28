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
var ResetDeploymentsPathParams = /** @class */ (function (_super) {
    __extends(ResetDeploymentsPathParams, _super);
    function ResetDeploymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" }),
        __metadata("design:type", String)
    ], ResetDeploymentsPathParams.prototype, "groupId", void 0);
    return ResetDeploymentsPathParams;
}(SpeakeasyBase));
export { ResetDeploymentsPathParams };
var ResetDeploymentsHeaders = /** @class */ (function (_super) {
    __extends(ResetDeploymentsHeaders, _super);
    function ResetDeploymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], ResetDeploymentsHeaders.prototype, "xAmznClientToken", void 0);
    return ResetDeploymentsHeaders;
}(SpeakeasyBase));
export { ResetDeploymentsHeaders };
var ResetDeploymentsRequestBody = /** @class */ (function (_super) {
    __extends(ResetDeploymentsRequestBody, _super);
    function ResetDeploymentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Force" }),
        __metadata("design:type", Boolean)
    ], ResetDeploymentsRequestBody.prototype, "force", void 0);
    return ResetDeploymentsRequestBody;
}(SpeakeasyBase));
export { ResetDeploymentsRequestBody };
var ResetDeploymentsRequest = /** @class */ (function (_super) {
    __extends(ResetDeploymentsRequest, _super);
    function ResetDeploymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetDeploymentsPathParams)
    ], ResetDeploymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetDeploymentsHeaders)
    ], ResetDeploymentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResetDeploymentsRequestBody)
    ], ResetDeploymentsRequest.prototype, "request", void 0);
    return ResetDeploymentsRequest;
}(SpeakeasyBase));
export { ResetDeploymentsRequest };
var ResetDeploymentsResponse = /** @class */ (function (_super) {
    __extends(ResetDeploymentsResponse, _super);
    function ResetDeploymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ResetDeploymentsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetDeploymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResetDeploymentsResponse)
    ], ResetDeploymentsResponse.prototype, "resetDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetDeploymentsResponse.prototype, "statusCode", void 0);
    return ResetDeploymentsResponse;
}(SpeakeasyBase));
export { ResetDeploymentsResponse };
