import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTrustsRequest
/** 
 * Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
**/
export class DescribeTrustsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TrustIds" })
  trustIds?: string[];
}
