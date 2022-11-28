import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeVaultOutput } from "./describevaultoutput";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class ListVaultsOutput extends SpeakeasyBase {
    marker?: string;
    vaultList?: DescribeVaultOutput[];
}
