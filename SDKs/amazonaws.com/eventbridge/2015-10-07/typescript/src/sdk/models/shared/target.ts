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
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=BatchParameters" })
  batchParameters?: BatchParameters;

  @SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: DeadLetterConfig;

  @SpeakeasyMetadata({ data: "json, name=EcsParameters" })
  ecsParameters?: EcsParameters;

  @SpeakeasyMetadata({ data: "json, name=HttpParameters" })
  httpParameters?: HttpParameters;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=InputPath" })
  inputPath?: string;

  @SpeakeasyMetadata({ data: "json, name=InputTransformer" })
  inputTransformer?: InputTransformer;

  @SpeakeasyMetadata({ data: "json, name=KinesisParameters" })
  kinesisParameters?: KinesisParameters;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDataParameters" })
  redshiftDataParameters?: RedshiftDataParameters;

  @SpeakeasyMetadata({ data: "json, name=RetryPolicy" })
  retryPolicy?: RetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RunCommandParameters" })
  runCommandParameters?: RunCommandParameters;

  @SpeakeasyMetadata({ data: "json, name=SageMakerPipelineParameters" })
  sageMakerPipelineParameters?: SageMakerPipelineParameters;

  @SpeakeasyMetadata({ data: "json, name=SqsParameters" })
  sqsParameters?: SqsParameters;
}
