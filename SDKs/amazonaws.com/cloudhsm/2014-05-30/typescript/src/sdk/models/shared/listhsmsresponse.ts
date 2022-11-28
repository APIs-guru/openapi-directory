import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListHsmsResponse
/** 
 * Contains the output of the <code>ListHsms</code> operation.
**/
export class ListHsmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmList" })
  hsmList?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
