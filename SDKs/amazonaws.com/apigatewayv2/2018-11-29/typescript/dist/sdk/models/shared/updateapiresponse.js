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
import { Cors } from "./cors";
import { ProtocolTypeEnum } from "./protocoltypeenum";
var UpdateApiResponse = /** @class */ (function (_super) {
    __extends(UpdateApiResponse, _super);
    function UpdateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiEndpoint" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "apiEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Boolean)
    ], UpdateApiResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiId" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiKeySelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "apiKeySelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorsConfiguration" }),
        __metadata("design:type", Cors)
    ], UpdateApiResponse.prototype, "corsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], UpdateApiResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableExecuteApiEndpoint" }),
        __metadata("design:type", Boolean)
    ], UpdateApiResponse.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableSchemaValidation" }),
        __metadata("design:type", Boolean)
    ], UpdateApiResponse.prototype, "disableSchemaValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportInfo" }),
        __metadata("design:type", Array)
    ], UpdateApiResponse.prototype, "importInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProtocolType" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "protocolType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "routeSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], UpdateApiResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warnings" }),
        __metadata("design:type", Array)
    ], UpdateApiResponse.prototype, "warnings", void 0);
    return UpdateApiResponse;
}(SpeakeasyBase));
export { UpdateApiResponse };
