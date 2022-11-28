import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoAgentStatus } from "./buildsystemshareddtoagentstatus";
import { BuildSystemSharedDtoStepConfiguration } from "./buildsystemshareddtostepconfiguration";



// BuildSystemSharedDtoAgent
/** 
 * A DTO for an IAgent
**/
export class BuildSystemSharedDtoAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentID" })
  agentId?: number;

  @SpeakeasyMetadata({ data: "json, name=KeepAliveInterval" })
  keepAliveInterval: number;

  @SpeakeasyMetadata({ data: "json, name=MachineName" })
  machineName: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: BuildSystemSharedDtoAgentStatus;

  @SpeakeasyMetadata({ data: "json, name=StepConfigurations", elemType: BuildSystemSharedDtoStepConfiguration })
  stepConfigurations?: BuildSystemSharedDtoStepConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId: number;
}


// BuildSystemSharedDtoAgentInput
/** 
 * A DTO for an IAgent
**/
export class BuildSystemSharedDtoAgentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentID, form, name=AgentID;" })
  agentId?: number;

  @SpeakeasyMetadata({ data: "json, name=KeepAliveInterval, form, name=KeepAliveInterval;" })
  keepAliveInterval: number;

  @SpeakeasyMetadata({ data: "json, name=MachineName, form, name=MachineName;" })
  machineName: string;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status: BuildSystemSharedDtoAgentStatus;

  @SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" })
  userId: number;
}
