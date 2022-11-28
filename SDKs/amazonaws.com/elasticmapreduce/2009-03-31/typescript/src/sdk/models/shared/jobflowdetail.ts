import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BootstrapActionDetail } from "./bootstrapactiondetail";
import { JobFlowExecutionStatusDetail } from "./jobflowexecutionstatusdetail";
import { JobFlowInstancesDetail } from "./jobflowinstancesdetail";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { StepDetail } from "./stepdetail";



// JobFlowDetail
/** 
 * A description of a cluster (job flow).
**/
export class JobFlowDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmiVersion" })
  amiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=BootstrapActions", elemType: BootstrapActionDetail })
  bootstrapActions?: BootstrapActionDetail[];

  @SpeakeasyMetadata({ data: "json, name=ExecutionStatusDetail" })
  executionStatusDetail: JobFlowExecutionStatusDetail;

  @SpeakeasyMetadata({ data: "json, name=Instances" })
  instances: JobFlowInstancesDetail;

  @SpeakeasyMetadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;

  @SpeakeasyMetadata({ data: "json, name=JobFlowRole" })
  jobFlowRole?: string;

  @SpeakeasyMetadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: StepDetail })
  steps?: StepDetail[];

  @SpeakeasyMetadata({ data: "json, name=SupportedProducts" })
  supportedProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
