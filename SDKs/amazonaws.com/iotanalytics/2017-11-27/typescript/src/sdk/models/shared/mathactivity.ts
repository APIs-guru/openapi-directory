import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MathActivity
/** 
 * An activity that computes an arithmetic expression using the message's attributes.
**/
export class MathActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute: string;

  @Metadata({ data: "json, name=math" })
  math: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
