import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Scope } from "./scope";



// ExclusionPreview
/** 
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
**/
export class ExclusionPreview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation: string;

  @SpeakeasyMetadata({ data: "json, name=scopes", elemType: Scope })
  scopes: Scope[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
