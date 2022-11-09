import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { Scope } from "./scope";


// Exclusion
/** 
 * Contains information about what was excluded from an assessment run.
**/
export class Exclusion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

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
