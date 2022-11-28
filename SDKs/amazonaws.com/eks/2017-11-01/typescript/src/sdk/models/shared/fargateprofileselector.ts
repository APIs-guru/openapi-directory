import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FargateProfileSelector
/** 
 * An object representing an Fargate profile selector.
**/
export class FargateProfileSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}
