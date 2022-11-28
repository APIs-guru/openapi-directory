import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunInformation } from "./suiteruninformation";



export class ListSuiteRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunsList", elemType: SuiteRunInformation })
  suiteRunsList?: SuiteRunInformation[];
}
