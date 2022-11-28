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
var PushLoginRequestQueryParams = /** @class */ (function (_super) {
    __extends(PushLoginRequestQueryParams, _super);
    function PushLoginRequestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PushLoginRequestQueryParams.prototype, "callback", void 0);
    return PushLoginRequestQueryParams;
}(SpeakeasyBase));
export { PushLoginRequestQueryParams };
var PushLoginRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(PushLoginRequest200ApplicationJson, _super);
    function PushLoginRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PushLoginRequest200ApplicationJson.prototype, "status", void 0);
    return PushLoginRequest200ApplicationJson;
}(SpeakeasyBase));
export { PushLoginRequest200ApplicationJson };
var PushLoginRequestRequest = /** @class */ (function (_super) {
    __extends(PushLoginRequestRequest, _super);
    function PushLoginRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PushLoginRequestQueryParams)
    ], PushLoginRequestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jwt" }),
        __metadata("design:type", Uint8Array)
    ], PushLoginRequestRequest.prototype, "request", void 0);
    return PushLoginRequestRequest;
}(SpeakeasyBase));
export { PushLoginRequestRequest };
var PushLoginRequestResponse = /** @class */ (function (_super) {
    __extends(PushLoginRequestResponse, _super);
    function PushLoginRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PushLoginRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PushLoginRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PushLoginRequestResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PushLoginRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PushLoginRequest200ApplicationJson)
    ], PushLoginRequestResponse.prototype, "pushLoginRequest200ApplicationJsonObject", void 0);
    return PushLoginRequestResponse;
}(SpeakeasyBase));
export { PushLoginRequestResponse };
