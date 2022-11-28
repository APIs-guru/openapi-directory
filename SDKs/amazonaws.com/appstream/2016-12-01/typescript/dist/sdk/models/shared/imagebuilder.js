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
import { DomainJoinInfo } from "./domainjoininfo";
import { ResourceError } from "./resourceerror";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageBuilderStateEnum } from "./imagebuilderstateenum";
import { ImageBuilderStateChangeReason } from "./imagebuilderstatechangereason";
import { VpcConfig } from "./vpcconfig";
// ImageBuilder
/**
 * Describes a virtual machine that is used to create an image.
**/
var ImageBuilder = /** @class */ (function (_super) {
    __extends(ImageBuilder, _super);
    function ImageBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint }),
        __metadata("design:type", Array)
    ], ImageBuilder.prototype, "accessEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "appstreamAgentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], ImageBuilder.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainJoinInfo" }),
        __metadata("design:type", DomainJoinInfo)
    ], ImageBuilder.prototype, "domainJoinInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDefaultInternetAccess" }),
        __metadata("design:type", Boolean)
    ], ImageBuilder.prototype, "enableDefaultInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRoleArn" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageArn" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "imageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBuilderErrors", elemType: ResourceError }),
        __metadata("design:type", Array)
    ], ImageBuilder.prototype, "imageBuilderErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkAccessConfiguration" }),
        __metadata("design:type", NetworkAccessConfiguration)
    ], ImageBuilder.prototype, "networkAccessConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Platform" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], ImageBuilder.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateChangeReason" }),
        __metadata("design:type", ImageBuilderStateChangeReason)
    ], ImageBuilder.prototype, "stateChangeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], ImageBuilder.prototype, "vpcConfig", void 0);
    return ImageBuilder;
}(SpeakeasyBase));
export { ImageBuilder };
