import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentOrchestrationConfig } from "./agentorchestrationconfig";
import { ComputePlatformEnum } from "./computeplatformenum";
import { ProfilingStatus } from "./profilingstatus";



// ProfilingGroupDescription
/** 
 *  Contains information about a profiling group. 
**/
export class ProfilingGroupDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig?: AgentOrchestrationConfig;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profilingStatus" })
  profilingStatus?: ProfilingStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
