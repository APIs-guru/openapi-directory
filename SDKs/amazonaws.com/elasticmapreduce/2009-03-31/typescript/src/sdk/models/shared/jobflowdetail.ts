import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AmiVersion" })
  amiVersion?: string;

  @Metadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @Metadata({ data: "json, name=BootstrapActions", elemType: shared.BootstrapActionDetail })
  bootstrapActions?: BootstrapActionDetail[];

  @Metadata({ data: "json, name=ExecutionStatusDetail" })
  executionStatusDetail: JobFlowExecutionStatusDetail;

  @Metadata({ data: "json, name=Instances" })
  instances: JobFlowInstancesDetail;

  @Metadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;

  @Metadata({ data: "json, name=JobFlowRole" })
  jobFlowRole?: string;

  @Metadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=Steps", elemType: shared.StepDetail })
  steps?: StepDetail[];

  @Metadata({ data: "json, name=SupportedProducts" })
  supportedProducts?: string[];

  @Metadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
