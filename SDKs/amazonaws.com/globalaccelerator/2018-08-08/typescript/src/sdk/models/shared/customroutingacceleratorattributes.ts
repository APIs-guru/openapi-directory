import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomRoutingAcceleratorAttributes
/** 
 * Attributes of a custom routing accelerator.
**/
export class CustomRoutingAcceleratorAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowLogsEnabled" })
  flowLogsEnabled?: boolean;

  @Metadata({ data: "json, name=FlowLogsS3Bucket" })
  flowLogsS3Bucket?: string;

  @Metadata({ data: "json, name=FlowLogsS3Prefix" })
  flowLogsS3Prefix?: string;
}
