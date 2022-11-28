import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestCaseFilter } from "./testcasefilter";



export class DescribeTestCasesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: TestCaseFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportArn" })
  reportArn: string;
}
