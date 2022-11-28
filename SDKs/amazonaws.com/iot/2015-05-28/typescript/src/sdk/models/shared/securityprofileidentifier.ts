import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityProfileIdentifier
/** 
 * Identifying information for a Device Defender security profile.
**/
export class SecurityProfileIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
