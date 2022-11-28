import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentPlatform
/** 
 * Contains information about a platform that a component supports.
**/
export class ComponentPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
