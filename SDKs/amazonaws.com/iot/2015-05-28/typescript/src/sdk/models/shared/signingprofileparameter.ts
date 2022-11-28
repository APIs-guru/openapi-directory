import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SigningProfileParameter
/** 
 * Describes the code-signing profile.
**/
export class SigningProfileParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePathOnDevice" })
  certificatePathOnDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;
}
