import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomRule
/** 
 *  Describes a custom rewrite or redirect rule. 
**/
export class CustomRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=target" })
  target: string;
}
