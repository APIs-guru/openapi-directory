import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeVaultOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class DescribeVaultOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=LastInventoryDate" })
  lastInventoryDate?: string;

  @Metadata({ data: "json, name=NumberOfArchives" })
  numberOfArchives?: number;

  @Metadata({ data: "json, name=SizeInBytes" })
  sizeInBytes?: number;

  @Metadata({ data: "json, name=VaultARN" })
  vaultArn?: string;

  @Metadata({ data: "json, name=VaultName" })
  vaultName?: string;
}
