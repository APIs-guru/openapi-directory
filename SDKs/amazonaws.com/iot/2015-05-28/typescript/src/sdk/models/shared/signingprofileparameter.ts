import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SigningProfileParameter
/** 
 * Describes the code-signing profile.
**/
export class SigningProfileParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificatePathOnDevice" })
  certificatePathOnDevice?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;
}
