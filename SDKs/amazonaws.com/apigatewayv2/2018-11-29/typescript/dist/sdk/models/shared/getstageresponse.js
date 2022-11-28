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
import { AccessLogSettings } from "./accesslogsettings";
import { RouteSettings } from "./routesettings";
var GetStageResponse = /** @class */ (function (_super) {
    __extends(GetStageResponse, _super);
    function GetStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessLogSettings" }),
        __metadata("design:type", AccessLogSettings)
    ], GetStageResponse.prototype, "accessLogSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Boolean)
    ], GetStageResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDeploy" }),
        __metadata("design:type", Boolean)
    ], GetStageResponse.prototype, "autoDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCertificateId" }),
        __metadata("design:type", String)
    ], GetStageResponse.prototype, "clientCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], GetStageResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRouteSettings" }),
        __metadata("design:type", RouteSettings)
    ], GetStageResponse.prototype, "defaultRouteSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentId" }),
        __metadata("design:type", String)
    ], GetStageResponse.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetStageResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastDeploymentStatusMessage" }),
        __metadata("design:type", String)
    ], GetStageResponse.prototype, "lastDeploymentStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" }),
        __metadata("design:type", Date)
    ], GetStageResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteSettings", elemType: RouteSettings }),
        __metadata("design:type", Map)
    ], GetStageResponse.prototype, "routeSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StageName" }),
        __metadata("design:type", String)
    ], GetStageResponse.prototype, "stageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StageVariables" }),
        __metadata("design:type", Map)
    ], GetStageResponse.prototype, "stageVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], GetStageResponse.prototype, "tags", void 0);
    return GetStageResponse;
}(SpeakeasyBase));
export { GetStageResponse };
