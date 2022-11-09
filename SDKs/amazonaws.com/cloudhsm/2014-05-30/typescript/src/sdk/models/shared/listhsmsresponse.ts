import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListHsmsResponse
/** 
 * Contains the output of the <code>ListHsms</code> operation.
**/
export class ListHsmsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmList" })
  hsmList?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
