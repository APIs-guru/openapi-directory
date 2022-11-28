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
var SignConfirmPathParams = /** @class */ (function (_super) {
    __extends(SignConfirmPathParams, _super);
    function SignConfirmPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" }),
        __metadata("design:type", String)
    ], SignConfirmPathParams.prototype, "job", void 0);
    return SignConfirmPathParams;
}(SpeakeasyBase));
export { SignConfirmPathParams };
var SignConfirm202ApplicationJson = /** @class */ (function (_super) {
    __extends(SignConfirm202ApplicationJson, _super);
    function SignConfirm202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SignConfirm202ApplicationJson.prototype, "status", void 0);
    return SignConfirm202ApplicationJson;
}(SpeakeasyBase));
export { SignConfirm202ApplicationJson };
var SignConfirmRequest = /** @class */ (function (_super) {
    __extends(SignConfirmRequest, _super);
    function SignConfirmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignConfirmPathParams)
    ], SignConfirmRequest.prototype, "pathParams", void 0);
    return SignConfirmRequest;
}(SpeakeasyBase));
export { SignConfirmRequest };
var SignConfirmResponse = /** @class */ (function (_super) {
    __extends(SignConfirmResponse, _super);
    function SignConfirmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SignConfirmResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignConfirmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SignConfirmResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignConfirmResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignConfirm202ApplicationJson)
    ], SignConfirmResponse.prototype, "signConfirm202ApplicationJsonObject", void 0);
    return SignConfirmResponse;
}(SpeakeasyBase));
export { SignConfirmResponse };
