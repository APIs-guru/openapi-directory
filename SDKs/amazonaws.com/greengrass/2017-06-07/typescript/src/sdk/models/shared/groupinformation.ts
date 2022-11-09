import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupInformation
/** 
 * Information about a group.
**/
export class GroupInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @Metadata({ data: "json, name=LatestVersion" })
  latestVersion?: string;

  @Metadata({ data: "json, name=LatestVersionArn" })
  latestVersionArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
