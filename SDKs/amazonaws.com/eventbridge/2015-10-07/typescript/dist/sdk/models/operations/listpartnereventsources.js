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
export var ListPartnerEventSourcesXAmzTargetEnum;
(function (ListPartnerEventSourcesXAmzTargetEnum) {
    ListPartnerEventSourcesXAmzTargetEnum["AwsEventsListPartnerEventSources"] = "AWSEvents.ListPartnerEventSources";
})(ListPartnerEventSourcesXAmzTargetEnum || (ListPartnerEventSourcesXAmzTargetEnum = {}));
var ListPartnerEventSourcesHeaders = /** @class */ (function (_super) {
    __extends(ListPartnerEventSourcesHeaders, _super);
    function ListPartnerEventSourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesHeaders.prototype, "xAmzTarget", void 0);
    return ListPartnerEventSourcesHeaders;
}(SpeakeasyBase));
export { ListPartnerEventSourcesHeaders };
var ListPartnerEventSourcesRequest = /** @class */ (function (_super) {
    __extends(ListPartnerEventSourcesRequest, _super);
    function ListPartnerEventSourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListPartnerEventSourcesHeaders)
    ], ListPartnerEventSourcesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPartnerEventSourcesRequest)
    ], ListPartnerEventSourcesRequest.prototype, "request", void 0);
    return ListPartnerEventSourcesRequest;
}(SpeakeasyBase));
export { ListPartnerEventSourcesRequest };
var ListPartnerEventSourcesResponse = /** @class */ (function (_super) {
    __extends(ListPartnerEventSourcesResponse, _super);
    function ListPartnerEventSourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPartnerEventSourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPartnerEventSourcesResponse.prototype, "internalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPartnerEventSourcesResponse)
    ], ListPartnerEventSourcesResponse.prototype, "listPartnerEventSourcesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPartnerEventSourcesResponse.prototype, "operationDisabledException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPartnerEventSourcesResponse.prototype, "statusCode", void 0);
    return ListPartnerEventSourcesResponse;
}(SpeakeasyBase));
export { ListPartnerEventSourcesResponse };
