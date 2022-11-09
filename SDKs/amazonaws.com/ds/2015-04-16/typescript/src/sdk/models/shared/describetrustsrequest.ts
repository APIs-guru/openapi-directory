import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTrustsRequest
/** 
 * Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
**/
export class DescribeTrustsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TrustIds" })
  trustIds?: string[];
}
