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
import { BatchParameters } from "./batchparameters";
import { DeadLetterConfig } from "./deadletterconfig";
import { EcsParameters } from "./ecsparameters";
import { HttpParameters } from "./httpparameters";
import { InputTransformer } from "./inputtransformer";
import { KinesisParameters } from "./kinesisparameters";
import { RedshiftDataParameters } from "./redshiftdataparameters";
import { RetryPolicy } from "./retrypolicy";
import { RunCommandParameters } from "./runcommandparameters";
import { SageMakerPipelineParameters } from "./sagemakerpipelineparameters";
import { SqsParameters } from "./sqsparameters";
// Target
/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
**/
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Target.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchParameters" }),
        __metadata("design:type", BatchParameters)
    ], Target.prototype, "batchParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" }),
        __metadata("design:type", DeadLetterConfig)
    ], Target.prototype, "deadLetterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcsParameters" }),
        __metadata("design:type", EcsParameters)
    ], Target.prototype, "ecsParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpParameters" }),
        __metadata("design:type", HttpParameters)
    ], Target.prototype, "httpParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Target.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Input" }),
        __metadata("design:type", String)
    ], Target.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputPath" }),
        __metadata("design:type", String)
    ], Target.prototype, "inputPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputTransformer" }),
        __metadata("design:type", InputTransformer)
    ], Target.prototype, "inputTransformer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisParameters" }),
        __metadata("design:type", KinesisParameters)
    ], Target.prototype, "kinesisParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftDataParameters" }),
        __metadata("design:type", RedshiftDataParameters)
    ], Target.prototype, "redshiftDataParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryPolicy" }),
        __metadata("design:type", RetryPolicy)
    ], Target.prototype, "retryPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], Target.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunCommandParameters" }),
        __metadata("design:type", RunCommandParameters)
    ], Target.prototype, "runCommandParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SageMakerPipelineParameters" }),
        __metadata("design:type", SageMakerPipelineParameters)
    ], Target.prototype, "sageMakerPipelineParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SqsParameters" }),
        __metadata("design:type", SqsParameters)
    ], Target.prototype, "sqsParameters", void 0);
    return Target;
}(SpeakeasyBase));
export { Target };
