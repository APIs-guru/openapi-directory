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
var UserContentDefinitionsGetUserContentDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionsQueryParams, _super);
    function UserContentDefinitionsGetUserContentDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionsQueryParams.prototype, "contentDefinitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" }),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionsQueryParams.prototype, "userId", void 0);
    return UserContentDefinitionsGetUserContentDefinitionsQueryParams;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionsQueryParams };
var UserContentDefinitionsGetUserContentDefinitionsRequest = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionsRequest, _super);
    function UserContentDefinitionsGetUserContentDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserContentDefinitionsGetUserContentDefinitionsQueryParams)
    ], UserContentDefinitionsGetUserContentDefinitionsRequest.prototype, "queryParams", void 0);
    return UserContentDefinitionsGetUserContentDefinitionsRequest;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionsRequest };
var UserContentDefinitionsGetUserContentDefinitionsResponse = /** @class */ (function (_super) {
    __extends(UserContentDefinitionsGetUserContentDefinitionsResponse, _super);
    function UserContentDefinitionsGetUserContentDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], UserContentDefinitionsGetUserContentDefinitionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition)
    ], UserContentDefinitionsGetUserContentDefinitionsResponse.prototype, "apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserContentDefinitionsGetUserContentDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserContentDefinitionsGetUserContentDefinitionsResponse.prototype, "statusCode", void 0);
    return UserContentDefinitionsGetUserContentDefinitionsResponse;
}(SpeakeasyBase));
export { UserContentDefinitionsGetUserContentDefinitionsResponse };
