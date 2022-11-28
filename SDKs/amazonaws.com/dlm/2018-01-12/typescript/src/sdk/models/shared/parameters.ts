import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parameters
/** 
 * Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
**/
export class Parameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludeBootVolume" })
  excludeBootVolume?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NoReboot" })
  noReboot?: boolean;
}
