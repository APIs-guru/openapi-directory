import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestCase } from "./testcase";



export class DescribeTestCasesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases", elemType: TestCase })
  testCases?: TestCase[];
}
