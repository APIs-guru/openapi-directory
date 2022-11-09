import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersionInformation
/** 
 * Information about a version.
**/
export class VersionInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
