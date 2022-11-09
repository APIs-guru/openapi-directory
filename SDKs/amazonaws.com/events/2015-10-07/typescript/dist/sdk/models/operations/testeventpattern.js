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
export var TestEventPatternXAmzTargetEnum;
(function (TestEventPatternXAmzTargetEnum) {
    TestEventPatternXAmzTargetEnum["AwsEventsTestEventPattern"] = "AWSEvents.TestEventPattern";
})(TestEventPatternXAmzTargetEnum || (TestEventPatternXAmzTargetEnum = {}));
var TestEventPatternHeaders = /** @class */ (function (_super) {
    __extends(TestEventPatternHeaders, _super);
    function TestEventPatternHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], TestEventPatternHeaders.prototype, "xAmzTarget", void 0);
    return TestEventPatternHeaders;
}(SpeakeasyBase));
export { TestEventPatternHeaders };
var TestEventPatternRequest = /** @class */ (function (_super) {
    __extends(TestEventPatternRequest, _super);
    function TestEventPatternRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TestEventPatternHeaders)
    ], TestEventPatternRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestEventPatternRequest)
    ], TestEventPatternRequest.prototype, "request", void 0);
    return TestEventPatternRequest;
}(SpeakeasyBase));
export { TestEventPatternRequest };
var TestEventPatternResponse = /** @class */ (function (_super) {
    __extends(TestEventPatternResponse, _super);
    function TestEventPatternResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TestEventPatternResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TestEventPatternResponse.prototype, "internalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TestEventPatternResponse.prototype, "invalidEventPatternException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TestEventPatternResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestEventPatternResponse)
    ], TestEventPatternResponse.prototype, "testEventPatternResponse", void 0);
    return TestEventPatternResponse;
}(SpeakeasyBase));
export { TestEventPatternResponse };
