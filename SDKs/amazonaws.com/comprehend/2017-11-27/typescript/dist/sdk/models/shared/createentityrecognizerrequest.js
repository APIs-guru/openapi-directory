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
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
var CreateEntityRecognizerRequest = /** @class */ (function (_super) {
    __extends(CreateEntityRecognizerRequest, _super);
    function CreateEntityRecognizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "dataAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", EntityRecognizerInputDataConfig)
    ], CreateEntityRecognizerRequest.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "modelKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecognizerName" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "recognizerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateEntityRecognizerRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerRequest.prototype, "volumeKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], CreateEntityRecognizerRequest.prototype, "vpcConfig", void 0);
    return CreateEntityRecognizerRequest;
}(SpeakeasyBase));
export { CreateEntityRecognizerRequest };
