import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { EventSource } from "./eventsource";
import { Parameters } from "./parameters";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { ResourceLocationValuesEnum } from "./resourcelocationvaluesenum";
import { ResourceTypeValuesEnum } from "./resourcetypevaluesenum";
import { Schedule } from "./schedule";
import { Tag } from "./tag";


// PolicyDetails
/** 
 * Specifies the configuration of a lifecycle policy.
**/
export class PolicyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: EventSource;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Parameters;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeValuesEnum;

  @Metadata({ data: "json, name=ResourceLocations" })
  resourceLocations?: ResourceLocationValuesEnum[];

  @Metadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: ResourceTypeValuesEnum[];

  @Metadata({ data: "json, name=Schedules", elemType: shared.Schedule })
  schedules?: Schedule[];

  @Metadata({ data: "json, name=TargetTags", elemType: shared.Tag })
  targetTags?: Tag[];
}
