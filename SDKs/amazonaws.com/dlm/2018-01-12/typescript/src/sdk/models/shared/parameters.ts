import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parameters
/** 
 * Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
**/
export class Parameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludeBootVolume" })
  excludeBootVolume?: boolean;

  @Metadata({ data: "json, name=NoReboot" })
  noReboot?: boolean;
}
