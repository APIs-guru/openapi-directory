import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListAccountAliasesResponse
/** 
 * Contains the response to a successful <a>ListAccountAliases</a> request. 
**/
export class ListAccountAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountAliases: string[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
