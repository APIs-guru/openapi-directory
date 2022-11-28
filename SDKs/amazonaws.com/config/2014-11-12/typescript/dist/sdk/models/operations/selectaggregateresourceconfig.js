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
var SelectAggregateResourceConfigQueryParams = /** @class */ (function (_super) {
    __extends(SelectAggregateResourceConfigQueryParams, _super);
    function SelectAggregateResourceConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigQueryParams.prototype, "nextToken", void 0);
    return SelectAggregateResourceConfigQueryParams;
}(SpeakeasyBase));
export { SelectAggregateResourceConfigQueryParams };
export var SelectAggregateResourceConfigXAmzTargetEnum;
(function (SelectAggregateResourceConfigXAmzTargetEnum) {
    SelectAggregateResourceConfigXAmzTargetEnum["StarlingDoveServiceSelectAggregateResourceConfig"] = "StarlingDoveService.SelectAggregateResourceConfig";
})(SelectAggregateResourceConfigXAmzTargetEnum || (SelectAggregateResourceConfigXAmzTargetEnum = {}));
var SelectAggregateResourceConfigHeaders = /** @class */ (function (_super) {
    __extends(SelectAggregateResourceConfigHeaders, _super);
    function SelectAggregateResourceConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigHeaders.prototype, "xAmzTarget", void 0);
    return SelectAggregateResourceConfigHeaders;
}(SpeakeasyBase));
export { SelectAggregateResourceConfigHeaders };
var SelectAggregateResourceConfigRequest = /** @class */ (function (_super) {
    __extends(SelectAggregateResourceConfigRequest, _super);
    function SelectAggregateResourceConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SelectAggregateResourceConfigQueryParams)
    ], SelectAggregateResourceConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SelectAggregateResourceConfigHeaders)
    ], SelectAggregateResourceConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SelectAggregateResourceConfigRequest)
    ], SelectAggregateResourceConfigRequest.prototype, "request", void 0);
    return SelectAggregateResourceConfigRequest;
}(SpeakeasyBase));
export { SelectAggregateResourceConfigRequest };
var SelectAggregateResourceConfigResponse = /** @class */ (function (_super) {
    __extends(SelectAggregateResourceConfigResponse, _super);
    function SelectAggregateResourceConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SelectAggregateResourceConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SelectAggregateResourceConfigResponse.prototype, "invalidExpressionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SelectAggregateResourceConfigResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SelectAggregateResourceConfigResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SelectAggregateResourceConfigResponse.prototype, "noSuchConfigurationAggregatorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SelectAggregateResourceConfigResponse)
    ], SelectAggregateResourceConfigResponse.prototype, "selectAggregateResourceConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SelectAggregateResourceConfigResponse.prototype, "statusCode", void 0);
    return SelectAggregateResourceConfigResponse;
}(SpeakeasyBase));
export { SelectAggregateResourceConfigResponse };
