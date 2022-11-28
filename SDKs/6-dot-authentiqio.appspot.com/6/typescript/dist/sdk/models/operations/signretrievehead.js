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
var SignRetrieveHeadPathParams = /** @class */ (function (_super) {
    __extends(SignRetrieveHeadPathParams, _super);
    function SignRetrieveHeadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" }),
        __metadata("design:type", String)
    ], SignRetrieveHeadPathParams.prototype, "job", void 0);
    return SignRetrieveHeadPathParams;
}(SpeakeasyBase));
export { SignRetrieveHeadPathParams };
var SignRetrieveHeadRequest = /** @class */ (function (_super) {
    __extends(SignRetrieveHeadRequest, _super);
    function SignRetrieveHeadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignRetrieveHeadPathParams)
    ], SignRetrieveHeadRequest.prototype, "pathParams", void 0);
    return SignRetrieveHeadRequest;
}(SpeakeasyBase));
export { SignRetrieveHeadRequest };
var SignRetrieveHeadResponse = /** @class */ (function (_super) {
    __extends(SignRetrieveHeadResponse, _super);
    function SignRetrieveHeadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SignRetrieveHeadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignRetrieveHeadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SignRetrieveHeadResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignRetrieveHeadResponse.prototype, "statusCode", void 0);
    return SignRetrieveHeadResponse;
}(SpeakeasyBase));
export { SignRetrieveHeadResponse };
