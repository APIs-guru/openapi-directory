import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestCase
/** 
 *  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test. 
**/
export class TestCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationInNanoSeconds" })
  durationInNanoSeconds?: number;

  @Metadata({ data: "json, name=expired" })
  expired?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=reportArn" })
  reportArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=testRawDataPath" })
  testRawDataPath?: string;
}
