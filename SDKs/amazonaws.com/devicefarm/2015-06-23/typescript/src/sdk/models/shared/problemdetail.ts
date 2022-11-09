import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProblemDetail
/** 
 * Information about a problem detail.
**/
export class ProblemDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
