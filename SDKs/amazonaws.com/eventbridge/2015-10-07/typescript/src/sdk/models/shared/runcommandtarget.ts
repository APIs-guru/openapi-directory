import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunCommandTarget
/** 
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
**/
export class RunCommandTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
