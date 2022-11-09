import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestCaseFilter } from "./testcasefilter";


export class DescribeTestCasesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: TestCaseFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportArn" })
  reportArn: string;
}
