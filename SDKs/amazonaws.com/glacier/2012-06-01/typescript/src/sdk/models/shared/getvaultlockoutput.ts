import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetVaultLockOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetVaultLockOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
