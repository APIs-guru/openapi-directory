import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FargateProfileSelector
/** 
 * An object representing an Fargate profile selector.
**/
export class FargateProfileSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}
