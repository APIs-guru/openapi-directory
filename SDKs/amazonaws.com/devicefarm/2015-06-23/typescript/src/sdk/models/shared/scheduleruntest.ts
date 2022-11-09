import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestTypeEnum } from "./testtypeenum";


// ScheduleRunTest
/** 
 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
**/
export class ScheduleRunTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=testPackageArn" })
  testPackageArn?: string;

  @Metadata({ data: "json, name=testSpecArn" })
  testSpecArn?: string;

  @Metadata({ data: "json, name=type" })
  type: TestTypeEnum;
}
