import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=BatchParameters" })
  batchParameters?: BatchParameters;

  @Metadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: DeadLetterConfig;

  @Metadata({ data: "json, name=EcsParameters" })
  ecsParameters?: EcsParameters;

  @Metadata({ data: "json, name=HttpParameters" })
  httpParameters?: HttpParameters;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Input" })
  input?: string;

  @Metadata({ data: "json, name=InputPath" })
  inputPath?: string;

  @Metadata({ data: "json, name=InputTransformer" })
  inputTransformer?: InputTransformer;

  @Metadata({ data: "json, name=KinesisParameters" })
  kinesisParameters?: KinesisParameters;

  @Metadata({ data: "json, name=RedshiftDataParameters" })
  redshiftDataParameters?: RedshiftDataParameters;

  @Metadata({ data: "json, name=RetryPolicy" })
  retryPolicy?: RetryPolicy;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=RunCommandParameters" })
  runCommandParameters?: RunCommandParameters;

  @Metadata({ data: "json, name=SageMakerPipelineParameters" })
  sageMakerPipelineParameters?: SageMakerPipelineParameters;

  @Metadata({ data: "json, name=SqsParameters" })
  sqsParameters?: SqsParameters;
}
