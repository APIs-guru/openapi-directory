import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { Scope } from "./scope";


// ExclusionPreview
/** 
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
**/
export class ExclusionPreview extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=recommendation" })
  recommendation: string;

  @Metadata({ data: "json, name=scopes", elemType: shared.Scope })
  scopes: Scope[];

  @Metadata({ data: "json, name=title" })
  title: string;
}
