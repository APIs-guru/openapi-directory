import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityProfileIdentifier
/** 
 * Identifying information for a Device Defender security profile.
**/
export class SecurityProfileIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
