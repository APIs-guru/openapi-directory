import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationConfig } from "./aggregationconfig";
import { FileTypeEnum } from "./filetypeenum";
import { PrefixConfig } from "./prefixconfig";


// S3OutputFormatConfig
/** 
 *  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. 
**/
export class S3OutputFormatConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationConfig" })
  aggregationConfig?: AggregationConfig;

  @Metadata({ data: "json, name=fileType" })
  fileType?: FileTypeEnum;

  @Metadata({ data: "json, name=prefixConfig" })
  prefixConfig?: PrefixConfig;
}
