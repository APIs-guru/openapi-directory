import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestCase
/** 
 *  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test. 
**/
export class TestCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationInNanoSeconds" })
  durationInNanoSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=reportArn" })
  reportArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=testRawDataPath" })
  testRawDataPath?: string;
}
