import { SpeakeasyBase } from "../../../internal/utils";
import { BootstrapActionDetail } from "./bootstrapactiondetail";
import { JobFlowExecutionStatusDetail } from "./jobflowexecutionstatusdetail";
import { JobFlowInstancesDetail } from "./jobflowinstancesdetail";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { StepDetail } from "./stepdetail";
/**
 * A description of a cluster (job flow).
**/
export declare class JobFlowDetail extends SpeakeasyBase {
    amiVersion?: string;
    autoScalingRole?: string;
    bootstrapActions?: BootstrapActionDetail[];
    executionStatusDetail: JobFlowExecutionStatusDetail;
    instances: JobFlowInstancesDetail;
    jobFlowId: string;
    jobFlowRole?: string;
    logEncryptionKmsKeyId?: string;
    logUri?: string;
    name: string;
    scaleDownBehavior?: ScaleDownBehaviorEnum;
    serviceRole?: string;
    steps?: StepDetail[];
    supportedProducts?: string[];
    visibleToAllUsers?: boolean;
}
