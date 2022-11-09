import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchRestrictions
/** 
 * Specifies restrictions for the batch build.
**/
export class BatchRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeTypesAllowed" })
  computeTypesAllowed?: string[];

  @Metadata({ data: "json, name=maximumBuildsAllowed" })
  maximumBuildsAllowed?: number;
}
