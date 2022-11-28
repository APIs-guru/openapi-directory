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
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";
var UpdateStackRequest = /** @class */ (function (_super) {
    __extends(UpdateStackRequest, _super);
    function UpdateStackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint }),
        __metadata("design:type", Array)
    ], UpdateStackRequest.prototype, "accessEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationSettings" }),
        __metadata("design:type", ApplicationSettings)
    ], UpdateStackRequest.prototype, "applicationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributesToDelete" }),
        __metadata("design:type", Array)
    ], UpdateStackRequest.prototype, "attributesToDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteStorageConnectors" }),
        __metadata("design:type", Boolean)
    ], UpdateStackRequest.prototype, "deleteStorageConnectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateStackRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], UpdateStackRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmbedHostDomains" }),
        __metadata("design:type", Array)
    ], UpdateStackRequest.prototype, "embedHostDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeedbackURL" }),
        __metadata("design:type", String)
    ], UpdateStackRequest.prototype, "feedbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateStackRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedirectURL" }),
        __metadata("design:type", String)
    ], UpdateStackRequest.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageConnectors", elemType: StorageConnector }),
        __metadata("design:type", Array)
    ], UpdateStackRequest.prototype, "storageConnectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserSettings", elemType: UserSetting }),
        __metadata("design:type", Array)
    ], UpdateStackRequest.prototype, "userSettings", void 0);
    return UpdateStackRequest;
}(SpeakeasyBase));
export { UpdateStackRequest };
