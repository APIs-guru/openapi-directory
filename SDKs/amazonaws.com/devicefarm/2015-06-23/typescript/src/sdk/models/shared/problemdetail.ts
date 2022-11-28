import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProblemDetail
/** 
 * Information about a problem detail.
**/
export class ProblemDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
