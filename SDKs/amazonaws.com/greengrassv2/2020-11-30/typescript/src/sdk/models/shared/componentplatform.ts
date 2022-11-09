import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentPlatform
/** 
 * Contains information about a platform that a component supports.
**/
export class ComponentPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
