import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobDefinition } from "./jobdefinition";



export class DescribeJobDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobDefinitions", elemType: JobDefinition })
  jobDefinitions?: JobDefinition[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
