import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RxNormConcept
/** 
 * The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.
**/
export class RxNormConcept extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
