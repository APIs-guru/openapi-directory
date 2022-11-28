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
var UserContentDefinitionsGetUserContentDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionPathParams, _super);
    function UserContentDefinitionsGetUserContentDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionPathParams.prototype, "userContentDefinitionId", void 0);
    return UserContentDefinitionsGetUserContentDefinitionPathParams;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionPathParams };
var UserContentDefinitionsGetUserContentDefinitionRequest = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionRequest, _super);
    function UserContentDefinitionsGetUserContentDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserContentDefinitionsGetUserContentDefinitionPathParams)
    ], UserContentDefinitionsGetUserContentDefinitionRequest.prototype, "pathParams", void 0);
    return UserContentDefinitionsGetUserContentDefinitionRequest;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionRequest };
var UserContentDefinitionsGetUserContentDefinitionResponse = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionResponse, _super);
    function UserContentDefinitionsGetUserContentDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], UserContentDefinitionsGetUserContentDefinitionResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserContentDefinitionsGetUserContentDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition)
    ], UserContentDefinitionsGetUserContentDefinitionResponse.prototype, "contentSubmissionSharedBusinessEntitiesUserContentDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserContentDefinitionsGetUserContentDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionResponse.prototype, "statusCode", void 0);
    return UserContentDefinitionsGetUserContentDefinitionResponse;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionResponse };
