import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationConfig } from "./aggregationconfig";
import { FileTypeEnum } from "./filetypeenum";
import { PrefixConfig } from "./prefixconfig";
/**
 *  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
**/
export declare class S3OutputFormatConfig extends SpeakeasyBase {
    aggregationConfig?: AggregationConfig;
    fileType?: FileTypeEnum;
    prefixConfig?: PrefixConfig;
}
