import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoTypeEnum } from "./environmentinfotypeenum";



// EnvironmentInfoDescription
/** 
 * The information retrieved from the Amazon EC2 instances.
**/
export class EnvironmentInfoDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2InstanceId?: string;

  @SpeakeasyMetadata()
  infoType?: EnvironmentInfoTypeEnum;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  sampleTimestamp?: Date;
}
