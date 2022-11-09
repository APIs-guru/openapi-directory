import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuiteRunInformation } from "./suiteruninformation";


export class ListSuiteRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=suiteRunsList", elemType: shared.SuiteRunInformation })
  suiteRunsList?: SuiteRunInformation[];
}
