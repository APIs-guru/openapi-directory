import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationConfig } from "./aggregationconfig";
import { FileTypeEnum } from "./filetypeenum";
import { PrefixConfig } from "./prefixconfig";


// UpsolverS3OutputFormatConfig
/** 
 *  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. 
**/
export class UpsolverS3OutputFormatConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationConfig" })
  aggregationConfig?: AggregationConfig;

  @Metadata({ data: "json, name=fileType" })
  fileType?: FileTypeEnum;

  @Metadata({ data: "json, name=prefixConfig" })
  prefixConfig: PrefixConfig;
}
