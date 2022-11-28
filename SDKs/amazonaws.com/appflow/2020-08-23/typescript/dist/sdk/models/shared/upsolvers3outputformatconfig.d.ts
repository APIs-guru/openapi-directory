import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationConfig } from "./aggregationconfig";
import { FileTypeEnum } from "./filetypeenum";
import { PrefixConfig } from "./prefixconfig";
/**
 *  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
**/
export declare class UpsolverS3OutputFormatConfig extends SpeakeasyBase {
    aggregationConfig?: AggregationConfig;
    fileType?: FileTypeEnum;
    prefixConfig: PrefixConfig;
}
