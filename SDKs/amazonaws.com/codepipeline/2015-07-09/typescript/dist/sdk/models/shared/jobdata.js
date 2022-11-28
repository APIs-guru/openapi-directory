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
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { AwsSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { Artifact } from "./artifact";
import { PipelineContext } from "./pipelinecontext";
// JobData
/**
 * Represents other information about a job required for a job worker to complete the job.
**/
var JobData = /** @class */ (function (_super) {
    __extends(JobData, _super);
    function JobData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionConfiguration" }),
        __metadata("design:type", ActionConfiguration)
    ], JobData.prototype, "actionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionTypeId" }),
        __metadata("design:type", ActionTypeId)
    ], JobData.prototype, "actionTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactCredentials" }),
        __metadata("design:type", AwsSessionCredentials)
    ], JobData.prototype, "artifactCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continuationToken" }),
        __metadata("design:type", String)
    ], JobData.prototype, "continuationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", EncryptionKey)
    ], JobData.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputArtifacts", elemType: Artifact }),
        __metadata("design:type", Array)
    ], JobData.prototype, "inputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputArtifacts", elemType: Artifact }),
        __metadata("design:type", Array)
    ], JobData.prototype, "outputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipelineContext" }),
        __metadata("design:type", PipelineContext)
    ], JobData.prototype, "pipelineContext", void 0);
    return JobData;
}(SpeakeasyBase));
export { JobData };
