import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Icd10CmConcept
/** 
 *  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
**/
export class Icd10CmConcept extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
