import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: EventSource;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Parameters;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceLocations" })
  resourceLocations?: ResourceLocationValuesEnum[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: ResourceTypeValuesEnum[];

  @SpeakeasyMetadata({ data: "json, name=Schedules", elemType: Schedule })
  schedules?: Schedule[];

  @SpeakeasyMetadata({ data: "json, name=TargetTags", elemType: Tag })
  targetTags?: Tag[];
}
