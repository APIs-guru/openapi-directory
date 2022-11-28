import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeVaultOutput } from "./describevaultoutput";



// ListVaultsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListVaultsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=VaultList", elemType: DescribeVaultOutput })
  vaultList?: DescribeVaultOutput[];
}
