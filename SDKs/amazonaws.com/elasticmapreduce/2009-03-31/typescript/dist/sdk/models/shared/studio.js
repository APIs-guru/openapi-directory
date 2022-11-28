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
import { AuthModeEnum } from "./authmodeenum";
import { Tag } from "./tag";
// Studio
/**
 * Details for an Amazon EMR Studio including ID, creation time, name, and so on.
**/
var Studio = /** @class */ (function (_super) {
    __extends(Studio, _super);
    function Studio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthMode" }),
        __metadata("design:type", String)
    ], Studio.prototype, "authMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Studio.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultS3Location" }),
        __metadata("design:type", String)
    ], Studio.prototype, "defaultS3Location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Studio.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineSecurityGroupId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "engineSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdpAuthUrl" }),
        __metadata("design:type", String)
    ], Studio.prototype, "idpAuthUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdpRelayStateParameterName" }),
        __metadata("design:type", String)
    ], Studio.prototype, "idpRelayStateParameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Studio.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], Studio.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StudioArn" }),
        __metadata("design:type", String)
    ], Studio.prototype, "studioArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StudioId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "studioId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], Studio.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Studio.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], Studio.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserRole" }),
        __metadata("design:type", String)
    ], Studio.prototype, "userRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceSecurityGroupId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "workspaceSecurityGroupId", void 0);
    return Studio;
}(SpeakeasyBase));
export { Studio };
