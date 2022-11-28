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
import { Application } from "./application";
import { ResourceError } from "./resourceerror";
import { ImagePermissions } from "./imagepermissions";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageStateEnum } from "./imagestateenum";
import { ImageStateChangeReason } from "./imagestatechangereason";
import { VisibilityTypeEnum } from "./visibilitytypeenum";
// Image
/**
 * Describes an image.
**/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application }),
        __metadata("design:type", Array)
    ], Image.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" }),
        __metadata("design:type", String)
    ], Image.prototype, "appstreamAgentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Image.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseImageArn" }),
        __metadata("design:type", String)
    ], Image.prototype, "baseImageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], Image.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Image.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], Image.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBuilderName" }),
        __metadata("design:type", String)
    ], Image.prototype, "imageBuilderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBuilderSupported" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "imageBuilderSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageErrors", elemType: ResourceError }),
        __metadata("design:type", Array)
    ], Image.prototype, "imageErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImagePermissions" }),
        __metadata("design:type", ImagePermissions)
    ], Image.prototype, "imagePermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Image.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Platform" }),
        __metadata("design:type", String)
    ], Image.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicBaseImageReleasedDate" }),
        __metadata("design:type", Date)
    ], Image.prototype, "publicBaseImageReleasedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Image.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateChangeReason" }),
        __metadata("design:type", ImageStateChangeReason)
    ], Image.prototype, "stateChangeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Visibility" }),
        __metadata("design:type", String)
    ], Image.prototype, "visibility", void 0);
    return Image;
}(SpeakeasyBase));
export { Image };
