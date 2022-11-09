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
import { AccessLogSettings } from "./accesslogsettings";
import { CacheClusterSizeEnum } from "./cacheclustersizeenum";
import { CacheClusterStatusEnum } from "./cacheclusterstatusenum";
import { CanarySettings } from "./canarysettings";
// Stage
/**
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
**/
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accessLogSettings" }),
        __metadata("design:type", AccessLogSettings)
    ], Stage.prototype, "accessLogSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheClusterEnabled" }),
        __metadata("design:type", Boolean)
    ], Stage.prototype, "cacheClusterEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheClusterSize" }),
        __metadata("design:type", String)
    ], Stage.prototype, "cacheClusterSize", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheClusterStatus" }),
        __metadata("design:type", String)
    ], Stage.prototype, "cacheClusterStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=canarySettings" }),
        __metadata("design:type", CanarySettings)
    ], Stage.prototype, "canarySettings", void 0);
    __decorate([
        Metadata({ data: "json, name=clientCertificateId" }),
        __metadata("design:type", String)
    ], Stage.prototype, "clientCertificateId", void 0);
    __decorate([
        Metadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], Stage.prototype, "createdDate", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], Stage.prototype, "deploymentId", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Stage.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=documentationVersion" }),
        __metadata("design:type", String)
    ], Stage.prototype, "documentationVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdatedDate" }),
        __metadata("design:type", Date)
    ], Stage.prototype, "lastUpdatedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=methodSettings", elemType: shared.MethodSetting }),
        __metadata("design:type", Map)
    ], Stage.prototype, "methodSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], Stage.prototype, "stageName", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Stage.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=tracingEnabled" }),
        __metadata("design:type", Boolean)
    ], Stage.prototype, "tracingEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=variables" }),
        __metadata("design:type", Map)
    ], Stage.prototype, "variables", void 0);
    __decorate([
        Metadata({ data: "json, name=webAclArn" }),
        __metadata("design:type", String)
    ], Stage.prototype, "webAclArn", void 0);
    return Stage;
}(SpeakeasyBase));
export { Stage };
