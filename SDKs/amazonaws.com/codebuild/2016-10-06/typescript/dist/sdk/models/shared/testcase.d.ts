import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.
**/
export declare class TestCase extends SpeakeasyBase {
    durationInNanoSeconds?: number;
    expired?: Date;
    message?: string;
    name?: string;
    prefix?: string;
    reportArn?: string;
    status?: string;
    testRawDataPath?: string;
}
