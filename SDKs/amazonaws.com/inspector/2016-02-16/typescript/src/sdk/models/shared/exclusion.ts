import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Scope } from "./scope";



// Exclusion
/** 
 * Contains information about what was excluded from an assessment run.
**/
export class Exclusion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

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
