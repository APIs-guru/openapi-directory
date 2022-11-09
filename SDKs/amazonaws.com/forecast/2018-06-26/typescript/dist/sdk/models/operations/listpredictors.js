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
var ListPredictorsQueryParams = /** @class */ (function (_super) {
    __extends(ListPredictorsQueryParams, _super);
    function ListPredictorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPredictorsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPredictorsQueryParams.prototype, "nextToken", void 0);
    return ListPredictorsQueryParams;
}(SpeakeasyBase));
export { ListPredictorsQueryParams };
export var ListPredictorsXAmzTargetEnum;
(function (ListPredictorsXAmzTargetEnum) {
    ListPredictorsXAmzTargetEnum["AmazonForecastListPredictors"] = "AmazonForecast.ListPredictors";
})(ListPredictorsXAmzTargetEnum || (ListPredictorsXAmzTargetEnum = {}));
var ListPredictorsHeaders = /** @class */ (function (_super) {
    __extends(ListPredictorsHeaders, _super);
    function ListPredictorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPredictorsHeaders.prototype, "xAmzTarget", void 0);
    return ListPredictorsHeaders;
}(SpeakeasyBase));
export { ListPredictorsHeaders };
var ListPredictorsRequest = /** @class */ (function (_super) {
    __extends(ListPredictorsRequest, _super);
    function ListPredictorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListPredictorsQueryParams)
    ], ListPredictorsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPredictorsHeaders)
    ], ListPredictorsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPredictorsRequest)
    ], ListPredictorsRequest.prototype, "request", void 0);
    return ListPredictorsRequest;
}(SpeakeasyBase));
export { ListPredictorsRequest };
var ListPredictorsResponse = /** @class */ (function (_super) {
    __extends(ListPredictorsResponse, _super);
    function ListPredictorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPredictorsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPredictorsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPredictorsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPredictorsResponse)
    ], ListPredictorsResponse.prototype, "listPredictorsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPredictorsResponse.prototype, "statusCode", void 0);
    return ListPredictorsResponse;
}(SpeakeasyBase));
export { ListPredictorsResponse };
