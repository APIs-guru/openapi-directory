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
import { LocalDeviceResourceData } from "./localdeviceresourcedata";
import { LocalVolumeResourceData } from "./localvolumeresourcedata";
import { S3MachineLearningModelResourceData } from "./s3machinelearningmodelresourcedata";
import { SageMakerMachineLearningModelResourceData } from "./sagemakermachinelearningmodelresourcedata";
import { SecretsManagerSecretResourceData } from "./secretsmanagersecretresourcedata";
// ResourceDataContainer
/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
**/
var ResourceDataContainer = /** @class */ (function (_super) {
    __extends(ResourceDataContainer, _super);
    function ResourceDataContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=LocalDeviceResourceData" }),
        __metadata("design:type", LocalDeviceResourceData)
    ], ResourceDataContainer.prototype, "localDeviceResourceData", void 0);
    __decorate([
        Metadata({ data: "json, name=LocalVolumeResourceData" }),
        __metadata("design:type", LocalVolumeResourceData)
    ], ResourceDataContainer.prototype, "localVolumeResourceData", void 0);
    __decorate([
        Metadata({ data: "json, name=S3MachineLearningModelResourceData" }),
        __metadata("design:type", S3MachineLearningModelResourceData)
    ], ResourceDataContainer.prototype, "s3MachineLearningModelResourceData", void 0);
    __decorate([
        Metadata({ data: "json, name=SageMakerMachineLearningModelResourceData" }),
        __metadata("design:type", SageMakerMachineLearningModelResourceData)
    ], ResourceDataContainer.prototype, "sageMakerMachineLearningModelResourceData", void 0);
    __decorate([
        Metadata({ data: "json, name=SecretsManagerSecretResourceData" }),
        __metadata("design:type", SecretsManagerSecretResourceData)
    ], ResourceDataContainer.prototype, "secretsManagerSecretResourceData", void 0);
    return ResourceDataContainer;
}(SpeakeasyBase));
export { ResourceDataContainer };
