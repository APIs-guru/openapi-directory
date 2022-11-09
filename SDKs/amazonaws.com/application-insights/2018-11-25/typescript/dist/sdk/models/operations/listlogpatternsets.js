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
var ListLogPatternSetsQueryParams = /** @class */ (function (_super) {
    __extends(ListLogPatternSetsQueryParams, _super);
    function ListLogPatternSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsQueryParams.prototype, "nextToken", void 0);
    return ListLogPatternSetsQueryParams;
}(SpeakeasyBase));
export { ListLogPatternSetsQueryParams };
export var ListLogPatternSetsXAmzTargetEnum;
(function (ListLogPatternSetsXAmzTargetEnum) {
    ListLogPatternSetsXAmzTargetEnum["Ec2WindowsBarleyServiceListLogPatternSets"] = "EC2WindowsBarleyService.ListLogPatternSets";
})(ListLogPatternSetsXAmzTargetEnum || (ListLogPatternSetsXAmzTargetEnum = {}));
var ListLogPatternSetsHeaders = /** @class */ (function (_super) {
    __extends(ListLogPatternSetsHeaders, _super);
    function ListLogPatternSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListLogPatternSetsHeaders.prototype, "xAmzTarget", void 0);
    return ListLogPatternSetsHeaders;
}(SpeakeasyBase));
export { ListLogPatternSetsHeaders };
var ListLogPatternSetsRequest = /** @class */ (function (_super) {
    __extends(ListLogPatternSetsRequest, _super);
    function ListLogPatternSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListLogPatternSetsQueryParams)
    ], ListLogPatternSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListLogPatternSetsHeaders)
    ], ListLogPatternSetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListLogPatternSetsRequest)
    ], ListLogPatternSetsRequest.prototype, "request", void 0);
    return ListLogPatternSetsRequest;
}(SpeakeasyBase));
export { ListLogPatternSetsRequest };
var ListLogPatternSetsResponse = /** @class */ (function (_super) {
    __extends(ListLogPatternSetsResponse, _super);
    function ListLogPatternSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListLogPatternSetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLogPatternSetsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLogPatternSetsResponse)
    ], ListLogPatternSetsResponse.prototype, "listLogPatternSetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLogPatternSetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListLogPatternSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLogPatternSetsResponse.prototype, "validationException", void 0);
    return ListLogPatternSetsResponse;
}(SpeakeasyBase));
export { ListLogPatternSetsResponse };
