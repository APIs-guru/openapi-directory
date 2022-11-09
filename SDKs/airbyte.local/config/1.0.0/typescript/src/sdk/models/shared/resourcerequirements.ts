import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceRequirements
/** 
 * optional resource requirements to run workers (blank for unbounded allocations)
**/
export class ResourceRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu_limit" })
  cpuLimit?: string;

  @Metadata({ data: "json, name=cpu_request" })
  cpuRequest?: string;

  @Metadata({ data: "json, name=memory_limit" })
  memoryLimit?: string;

  @Metadata({ data: "json, name=memory_request" })
  memoryRequest?: string;
}
