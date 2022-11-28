import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Trail
/** 
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
**/
export class Trail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allRegions" })
  allRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloudTrailArn" })
  cloudTrailArn: string;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];
}
