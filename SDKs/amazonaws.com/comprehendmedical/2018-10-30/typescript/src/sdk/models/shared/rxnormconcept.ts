import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RxNormConcept
/** 
 * The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.
**/
export class RxNormConcept extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
