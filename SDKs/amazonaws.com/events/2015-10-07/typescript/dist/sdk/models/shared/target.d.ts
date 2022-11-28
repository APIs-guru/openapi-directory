import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
**/
export declare class Target extends SpeakeasyBase {
    arn: string;
    batchParameters?: BatchParameters;
    deadLetterConfig?: DeadLetterConfig;
    ecsParameters?: EcsParameters;
    httpParameters?: HttpParameters;
    id: string;
    input?: string;
    inputPath?: string;
    inputTransformer?: InputTransformer;
    kinesisParameters?: KinesisParameters;
    redshiftDataParameters?: RedshiftDataParameters;
    retryPolicy?: RetryPolicy;
    roleArn?: string;
    runCommandParameters?: RunCommandParameters;
    sageMakerPipelineParameters?: SageMakerPipelineParameters;
    sqsParameters?: SqsParameters;
}
