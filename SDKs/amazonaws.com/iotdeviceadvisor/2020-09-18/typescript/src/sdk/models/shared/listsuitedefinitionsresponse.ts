import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuiteDefinitionInformation } from "./suitedefinitioninformation";


export class ListSuiteDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=suiteDefinitionInformationList", elemType: shared.SuiteDefinitionInformation })
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];
}
