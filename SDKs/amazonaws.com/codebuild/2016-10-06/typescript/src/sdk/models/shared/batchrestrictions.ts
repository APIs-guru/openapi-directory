import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchRestrictions
/** 
 * Specifies restrictions for the batch build.
**/
export class BatchRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeTypesAllowed" })
  computeTypesAllowed?: string[];

  @SpeakeasyMetadata({ data: "json, name=maximumBuildsAllowed" })
  maximumBuildsAllowed?: number;
}
