import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestTypeEnum } from "./testtypeenum";



// ScheduleRunTest
/** 
 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
**/
export class ScheduleRunTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=testPackageArn" })
  testPackageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=testSpecArn" })
  testSpecArn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: TestTypeEnum;
}
