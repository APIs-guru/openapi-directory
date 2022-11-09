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
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { VpcConfig } from "./vpcconfig";
var CreateDocumentClassifierRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentClassifierRequest, _super);
    function CreateDocumentClassifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=DataAccessRoleArn" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "dataAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=DocumentClassifierName" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "documentClassifierName", void 0);
    __decorate([
        Metadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", DocumentClassifierInputDataConfig)
    ], CreateDocumentClassifierRequest.prototype, "inputDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "languageCode", void 0);
    __decorate([
        Metadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "mode", void 0);
    __decorate([
        Metadata({ data: "json, name=ModelKmsKeyId" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "modelKmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", DocumentClassifierOutputDataConfig)
    ], CreateDocumentClassifierRequest.prototype, "outputDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDocumentClassifierRequest.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=VolumeKmsKeyId" }),
        __metadata("design:type", String)
    ], CreateDocumentClassifierRequest.prototype, "volumeKmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], CreateDocumentClassifierRequest.prototype, "vpcConfig", void 0);
    return CreateDocumentClassifierRequest;
}(SpeakeasyBase));
export { CreateDocumentClassifierRequest };
