import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuiteDefinitionInformation } from "./suitedefinitioninformation";



export class ListSuiteDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionInformationList", elemType: SuiteDefinitionInformation })
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];
}
