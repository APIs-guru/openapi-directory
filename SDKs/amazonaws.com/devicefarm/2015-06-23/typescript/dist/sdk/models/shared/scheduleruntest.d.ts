import { SpeakeasyBase } from "../../../internal/utils";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
**/
export declare class ScheduleRunTest extends SpeakeasyBase {
    filter?: string;
    parameters?: Map<string, string>;
    testPackageArn?: string;
    testSpecArn?: string;
    type: TestTypeEnum;
}
