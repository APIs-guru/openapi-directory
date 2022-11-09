import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DescribeVaultOutput } from "./describevaultoutput";


// ListVaultsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListVaultsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=VaultList", elemType: shared.DescribeVaultOutput })
  vaultList?: DescribeVaultOutput[];
}
