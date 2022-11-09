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
import { AutoBranchCreationConfig } from "./autobranchcreationconfig";
import { PlatformEnum } from "./platformenum";
import { ProductionBranch } from "./productionbranch";
// App
/**
 *  Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
**/
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appArn" }),
        __metadata("design:type", String)
    ], App.prototype, "appArn", void 0);
    __decorate([
        Metadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], App.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationConfig" }),
        __metadata("design:type", AutoBranchCreationConfig)
    ], App.prototype, "autoBranchCreationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationPatterns" }),
        __metadata("design:type", Array)
    ], App.prototype, "autoBranchCreationPatterns", void 0);
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], App.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], App.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", Date)
    ], App.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customHeaders" }),
        __metadata("design:type", String)
    ], App.prototype, "customHeaders", void 0);
    __decorate([
        Metadata({ data: "json, name=customRules", elemType: shared.CustomRule }),
        __metadata("design:type", Array)
    ], App.prototype, "customRules", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultDomain" }),
        __metadata("design:type", String)
    ], App.prototype, "defaultDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], App.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBranchCreation" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "enableAutoBranchCreation", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoBuild" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "enableBranchAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoDeletion" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "enableBranchAutoDeletion", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], App.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=iamServiceRoleArn" }),
        __metadata("design:type", String)
    ], App.prototype, "iamServiceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], App.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], App.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=productionBranch" }),
        __metadata("design:type", ProductionBranch)
    ], App.prototype, "productionBranch", void 0);
    __decorate([
        Metadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], App.prototype, "repository", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], App.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", Date)
    ], App.prototype, "updateTime", void 0);
    return App;
}(SpeakeasyBase));
export { App };
