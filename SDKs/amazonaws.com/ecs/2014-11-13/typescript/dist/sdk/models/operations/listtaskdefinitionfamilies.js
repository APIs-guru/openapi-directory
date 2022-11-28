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
var ListTaskDefinitionFamiliesQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesQueryParams, _super);
    function ListTaskDefinitionFamiliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesQueryParams.prototype, "nextToken", void 0);
    return ListTaskDefinitionFamiliesQueryParams;
}(SpeakeasyBase));
export { ListTaskDefinitionFamiliesQueryParams };
export var ListTaskDefinitionFamiliesXAmzTargetEnum;
(function (ListTaskDefinitionFamiliesXAmzTargetEnum) {
    ListTaskDefinitionFamiliesXAmzTargetEnum["AmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies"] = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies";
})(ListTaskDefinitionFamiliesXAmzTargetEnum || (ListTaskDefinitionFamiliesXAmzTargetEnum = {}));
var ListTaskDefinitionFamiliesHeaders = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesHeaders, _super);
    function ListTaskDefinitionFamiliesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzTarget", void 0);
    return ListTaskDefinitionFamiliesHeaders;
}(SpeakeasyBase));
export { ListTaskDefinitionFamiliesHeaders };
var ListTaskDefinitionFamiliesRequest = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesRequest, _super);
    function ListTaskDefinitionFamiliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskDefinitionFamiliesQueryParams)
    ], ListTaskDefinitionFamiliesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskDefinitionFamiliesHeaders)
    ], ListTaskDefinitionFamiliesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTaskDefinitionFamiliesRequest)
    ], ListTaskDefinitionFamiliesRequest.prototype, "request", void 0);
    return ListTaskDefinitionFamiliesRequest;
}(SpeakeasyBase));
export { ListTaskDefinitionFamiliesRequest };
var ListTaskDefinitionFamiliesResponse = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesResponse, _super);
    function ListTaskDefinitionFamiliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTaskDefinitionFamiliesResponse)
    ], ListTaskDefinitionFamiliesResponse.prototype, "listTaskDefinitionFamiliesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTaskDefinitionFamiliesResponse.prototype, "statusCode", void 0);
    return ListTaskDefinitionFamiliesResponse;
}(SpeakeasyBase));
export { ListTaskDefinitionFamiliesResponse };
