import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceleratorAttributes
/** 
 * Attributes of an accelerator.
**/
export class AcceleratorAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowLogsEnabled" })
  flowLogsEnabled?: boolean;

  @Metadata({ data: "json, name=FlowLogsS3Bucket" })
  flowLogsS3Bucket?: string;

  @Metadata({ data: "json, name=FlowLogsS3Prefix" })
  flowLogsS3Prefix?: string;
}
