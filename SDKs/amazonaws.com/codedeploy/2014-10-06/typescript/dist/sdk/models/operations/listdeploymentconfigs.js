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
var ListDeploymentConfigsQueryParams = /** @class */ (function (_super) {
    __extends(ListDeploymentConfigsQueryParams, _super);
    function ListDeploymentConfigsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsQueryParams.prototype, "nextToken", void 0);
    return ListDeploymentConfigsQueryParams;
}(SpeakeasyBase));
export { ListDeploymentConfigsQueryParams };
export var ListDeploymentConfigsXAmzTargetEnum;
(function (ListDeploymentConfigsXAmzTargetEnum) {
    ListDeploymentConfigsXAmzTargetEnum["CodeDeploy20141006ListDeploymentConfigs"] = "CodeDeploy_20141006.ListDeploymentConfigs";
})(ListDeploymentConfigsXAmzTargetEnum || (ListDeploymentConfigsXAmzTargetEnum = {}));
var ListDeploymentConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListDeploymentConfigsHeaders, _super);
    function ListDeploymentConfigsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDeploymentConfigsHeaders.prototype, "xAmzTarget", void 0);
    return ListDeploymentConfigsHeaders;
}(SpeakeasyBase));
export { ListDeploymentConfigsHeaders };
var ListDeploymentConfigsRequest = /** @class */ (function (_super) {
    __extends(ListDeploymentConfigsRequest, _super);
    function ListDeploymentConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentConfigsQueryParams)
    ], ListDeploymentConfigsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentConfigsHeaders)
    ], ListDeploymentConfigsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDeploymentConfigsInput)
    ], ListDeploymentConfigsRequest.prototype, "request", void 0);
    return ListDeploymentConfigsRequest;
}(SpeakeasyBase));
export { ListDeploymentConfigsRequest };
var ListDeploymentConfigsResponse = /** @class */ (function (_super) {
    __extends(ListDeploymentConfigsResponse, _super);
    function ListDeploymentConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeploymentConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDeploymentConfigsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDeploymentConfigsOutput)
    ], ListDeploymentConfigsResponse.prototype, "listDeploymentConfigsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeploymentConfigsResponse.prototype, "statusCode", void 0);
    return ListDeploymentConfigsResponse;
}(SpeakeasyBase));
export { ListDeploymentConfigsResponse };
