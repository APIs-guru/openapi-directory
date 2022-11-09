import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Icd10CmConcept
/** 
 *  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
**/
export class Icd10CmConcept extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
