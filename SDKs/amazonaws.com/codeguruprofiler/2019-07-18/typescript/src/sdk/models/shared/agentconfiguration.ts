import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentConfiguration
/** 
 *  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data. 
**/
export class AgentConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentParameters" })
  agentParameters?: Map<string, string>;

  @Metadata({ data: "json, name=periodInSeconds" })
  periodInSeconds: number;

  @Metadata({ data: "json, name=shouldProfile" })
  shouldProfile: boolean;
}
