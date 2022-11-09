import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetVaultLockOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetVaultLockOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
