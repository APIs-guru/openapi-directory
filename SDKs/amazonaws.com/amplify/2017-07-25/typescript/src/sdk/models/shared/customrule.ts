import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomRule
/** 
 *  Describes a custom rewrite or redirect rule. 
**/
export class CustomRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: string;
}
