import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoAgentStatus } from "./buildsystemshareddtoagentstatus";
import { BuildSystemSharedDtoStepConfiguration } from "./buildsystemshareddtostepconfiguration";


// BuildSystemSharedDtoAgent
/** 
 * A DTO for an IAgent
**/
export class BuildSystemSharedDtoAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentID" })
  agentId?: number;

  @Metadata({ data: "json, name=KeepAliveInterval" })
  keepAliveInterval: number;

  @Metadata({ data: "json, name=MachineName" })
  machineName: string;

  @Metadata({ data: "json, name=Status" })
  status: BuildSystemSharedDtoAgentStatus;

  @Metadata({ data: "json, name=StepConfigurations", elemType: shared.BuildSystemSharedDtoStepConfiguration })
  stepConfigurations?: BuildSystemSharedDtoStepConfiguration[];

  @Metadata({ data: "json, name=UserID" })
  userId: number;
}
