import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetBlobInput
/** 
 * Represents the input of a get blob operation.
**/
export class GetBlobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
