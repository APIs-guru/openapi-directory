import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCloudMapInstanceAttribute
/** 
 * <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
export class AwsCloudMapInstanceAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
