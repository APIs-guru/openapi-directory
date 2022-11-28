import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data.
**/
export declare class AgentConfiguration extends SpeakeasyBase {
    agentParameters?: Map<string, string>;
    periodInSeconds: number;
    shouldProfile: boolean;
}
