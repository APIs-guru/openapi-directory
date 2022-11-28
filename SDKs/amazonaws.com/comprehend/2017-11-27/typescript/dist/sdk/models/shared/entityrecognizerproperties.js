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
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { EntityRecognizerMetadata } from "./entityrecognizermetadata";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";
// EntityRecognizerProperties
/**
 * Describes information about an entity recognizer.
**/
var EntityRecognizerProperties = /** @class */ (function (_super) {
    __extends(EntityRecognizerProperties, _super);
    function EntityRecognizerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "dataAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], EntityRecognizerProperties.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "entityRecognizerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", EntityRecognizerInputDataConfig)
    ], EntityRecognizerProperties.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "modelKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecognizerMetadata" }),
        __metadata("design:type", EntityRecognizerMetadata)
    ], EntityRecognizerProperties.prototype, "recognizerMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubmitTime" }),
        __metadata("design:type", Date)
    ], EntityRecognizerProperties.prototype, "submitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingEndTime" }),
        __metadata("design:type", Date)
    ], EntityRecognizerProperties.prototype, "trainingEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingStartTime" }),
        __metadata("design:type", Date)
    ], EntityRecognizerProperties.prototype, "trainingStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" }),
        __metadata("design:type", String)
    ], EntityRecognizerProperties.prototype, "volumeKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], EntityRecognizerProperties.prototype, "vpcConfig", void 0);
    return EntityRecognizerProperties;
}(SpeakeasyBase));
export { EntityRecognizerProperties };
