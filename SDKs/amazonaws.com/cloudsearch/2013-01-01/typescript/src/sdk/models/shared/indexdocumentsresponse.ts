import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IndexDocumentsResponse
/** 
 * The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
**/
export class IndexDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldNames?: string[];
}
