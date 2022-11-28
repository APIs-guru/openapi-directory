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
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { EnclaveOptions } from "./enclaveoptions";
import { GroupIdentifier } from "./groupidentifier";
import { AttributeValue } from "./attributevalue";
import { ProductCode } from "./productcode";
// InstanceAttribute
/**
 * Describes an instance attribute.
**/
var InstanceAttribute = /** @class */ (function (_super) {
    __extends(InstanceAttribute, _super);
    function InstanceAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], InstanceAttribute.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeBooleanValue)
    ], InstanceAttribute.prototype, "disableApiTermination", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeBooleanValue)
    ], InstanceAttribute.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeBooleanValue)
    ], InstanceAttribute.prototype, "enaSupport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnclaveOptions)
    ], InstanceAttribute.prototype, "enclaveOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupIdentifier }),
        __metadata("design:type", Array)
    ], InstanceAttribute.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceAttribute.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "instanceInitiatedShutdownBehavior", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ProductCode }),
        __metadata("design:type", Array)
    ], InstanceAttribute.prototype, "productCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "ramdiskId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "rootDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeBooleanValue)
    ], InstanceAttribute.prototype, "sourceDestCheck", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "sriovNetSupport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttributeValue)
    ], InstanceAttribute.prototype, "userData", void 0);
    return InstanceAttribute;
}(SpeakeasyBase));
export { InstanceAttribute };
