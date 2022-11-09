import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceUnderTest
/** 
 * Lists all the devices under test
**/
export class DeviceUnderTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;
}
