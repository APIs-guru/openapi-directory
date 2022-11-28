import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceUnderTest
/** 
 * Lists all the devices under test
**/
export class DeviceUnderTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;
}
