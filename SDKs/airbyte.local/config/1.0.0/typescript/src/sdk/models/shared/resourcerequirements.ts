import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceRequirements
/** 
 * optional resource requirements to run workers (blank for unbounded allocations)
**/
export class ResourceRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu_limit" })
  cpuLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=cpu_request" })
  cpuRequest?: string;

  @SpeakeasyMetadata({ data: "json, name=memory_limit" })
  memoryLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=memory_request" })
  memoryRequest?: string;
}
