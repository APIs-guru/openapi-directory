import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Trail
/** 
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
**/
export class Trail extends SpeakeasyBase {
  @Metadata({ data: "json, name=allRegions" })
  allRegions?: boolean;

  @Metadata({ data: "json, name=cloudTrailArn" })
  cloudTrailArn: string;

  @Metadata({ data: "json, name=regions" })
  regions?: string[];
}
