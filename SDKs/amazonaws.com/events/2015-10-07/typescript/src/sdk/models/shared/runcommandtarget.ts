import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunCommandTarget
/** 
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
**/
export class RunCommandTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
