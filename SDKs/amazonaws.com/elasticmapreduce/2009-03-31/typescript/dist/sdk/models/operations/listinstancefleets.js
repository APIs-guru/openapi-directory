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
var ListInstanceFleetsQueryParams = /** @class */ (function (_super) {
    __extends(ListInstanceFleetsQueryParams, _super);
    function ListInstanceFleetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsQueryParams.prototype, "marker", void 0);
    return ListInstanceFleetsQueryParams;
}(SpeakeasyBase));
export { ListInstanceFleetsQueryParams };
export var ListInstanceFleetsXAmzTargetEnum;
(function (ListInstanceFleetsXAmzTargetEnum) {
    ListInstanceFleetsXAmzTargetEnum["ElasticMapReduceListInstanceFleets"] = "ElasticMapReduce.ListInstanceFleets";
})(ListInstanceFleetsXAmzTargetEnum || (ListInstanceFleetsXAmzTargetEnum = {}));
var ListInstanceFleetsHeaders = /** @class */ (function (_super) {
    __extends(ListInstanceFleetsHeaders, _super);
    function ListInstanceFleetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListInstanceFleetsHeaders.prototype, "xAmzTarget", void 0);
    return ListInstanceFleetsHeaders;
}(SpeakeasyBase));
export { ListInstanceFleetsHeaders };
var ListInstanceFleetsRequest = /** @class */ (function (_super) {
    __extends(ListInstanceFleetsRequest, _super);
    function ListInstanceFleetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInstanceFleetsQueryParams)
    ], ListInstanceFleetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInstanceFleetsHeaders)
    ], ListInstanceFleetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListInstanceFleetsInput)
    ], ListInstanceFleetsRequest.prototype, "request", void 0);
    return ListInstanceFleetsRequest;
}(SpeakeasyBase));
export { ListInstanceFleetsRequest };
var ListInstanceFleetsResponse = /** @class */ (function (_super) {
    __extends(ListInstanceFleetsResponse, _super);
    function ListInstanceFleetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInstanceFleetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInstanceFleetsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInstanceFleetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstanceFleetsOutput)
    ], ListInstanceFleetsResponse.prototype, "listInstanceFleetsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListInstanceFleetsResponse.prototype, "statusCode", void 0);
    return ListInstanceFleetsResponse;
}(SpeakeasyBase));
export { ListInstanceFleetsResponse };
