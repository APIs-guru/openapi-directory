import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MathActivity
/** 
 * An activity that computes an arithmetic expression using the message's attributes.
**/
export class MathActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute: string;

  @SpeakeasyMetadata({ data: "json, name=math" })
  math: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
