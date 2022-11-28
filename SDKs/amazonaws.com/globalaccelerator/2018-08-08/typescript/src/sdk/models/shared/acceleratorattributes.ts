import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceleratorAttributes
/** 
 * Attributes of an accelerator.
**/
export class AcceleratorAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowLogsEnabled" })
  flowLogsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FlowLogsS3Bucket" })
  flowLogsS3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowLogsS3Prefix" })
  flowLogsS3Prefix?: string;
}
