import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentOrchestrationConfig } from "./agentorchestrationconfig";
import { ComputePlatformEnum } from "./computeplatformenum";
import { ProfilingStatus } from "./profilingstatus";


// ProfilingGroupDescription
/** 
 *  Contains information about a profiling group. 
**/
export class ProfilingGroupDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig?: AgentOrchestrationConfig;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profilingStatus" })
  profilingStatus?: ProfilingStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
