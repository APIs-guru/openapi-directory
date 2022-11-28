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
var UserContentDefinitionsDeleteUserContentDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsDeleteUserContentDefinitionPathParams, _super);
    function UserContentDefinitionsDeleteUserContentDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsDeleteUserContentDefinitionPathParams.prototype, "userContentDefinitionId", void 0);
    return UserContentDefinitionsDeleteUserContentDefinitionPathParams;
}(SpeakeasyBase));
export { UserContentDefinitionsDeleteUserContentDefinitionPathParams };
var UserContentDefinitionsDeleteUserContentDefinitionRequest = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsDeleteUserContentDefinitionRequest, _super);
    function UserContentDefinitionsDeleteUserContentDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserContentDefinitionsDeleteUserContentDefinitionPathParams)
    ], UserContentDefinitionsDeleteUserContentDefinitionRequest.prototype, "pathParams", void 0);
    return UserContentDefinitionsDeleteUserContentDefinitionRequest;
}(SpeakeasyBase));
export { UserContentDefinitionsDeleteUserContentDefinitionRequest };
var UserContentDefinitionsDeleteUserContentDefinitionResponse = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsDeleteUserContentDefinitionResponse, _super);
    function UserContentDefinitionsDeleteUserContentDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserContentDefinitionsDeleteUserContentDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserContentDefinitionsDeleteUserContentDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserContentDefinitionsDeleteUserContentDefinitionResponse.prototype, "statusCode", void 0);
    return UserContentDefinitionsDeleteUserContentDefinitionResponse;
}(SpeakeasyBase));
export { UserContentDefinitionsDeleteUserContentDefinitionResponse };
