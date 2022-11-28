import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVaultOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class DescribeVaultOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=LastInventoryDate" })
  lastInventoryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfArchives" })
  numberOfArchives?: number;

  @SpeakeasyMetadata({ data: "json, name=SizeInBytes" })
  sizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=VaultARN" })
  vaultArn?: string;

  @SpeakeasyMetadata({ data: "json, name=VaultName" })
  vaultName?: string;
}
