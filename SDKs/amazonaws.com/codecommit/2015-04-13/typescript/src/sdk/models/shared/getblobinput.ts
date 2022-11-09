import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetBlobInput
/** 
 * Represents the input of a get blob operation.
**/
export class GetBlobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobId" })
  blobId: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
