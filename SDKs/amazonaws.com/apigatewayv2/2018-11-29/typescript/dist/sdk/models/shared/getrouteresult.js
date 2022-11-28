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
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { ParameterConstraints } from "./parameterconstraints";
var GetRouteResult = /** @class */ (function (_super) {
    __extends(GetRouteResult, _super);
    function GetRouteResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Boolean)
    ], GetRouteResult.prototype, "apiGatewayManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiKeyRequired" }),
        __metadata("design:type", Boolean)
    ], GetRouteResult.prototype, "apiKeyRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizationScopes" }),
        __metadata("design:type", Array)
    ], GetRouteResult.prototype, "authorizationScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizationType" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "authorizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizerId" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "authorizerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelSelectionExpression" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "modelSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationName" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "operationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestModels" }),
        __metadata("design:type", Map)
    ], GetRouteResult.prototype, "requestModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestParameters", elemType: ParameterConstraints }),
        __metadata("design:type", Map)
    ], GetRouteResult.prototype, "requestParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteId" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "routeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteKey" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "routeKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteResponseSelectionExpression" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "routeResponseSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Target" }),
        __metadata("design:type", String)
    ], GetRouteResult.prototype, "target", void 0);
    return GetRouteResult;
}(SpeakeasyBase));
export { GetRouteResult };
