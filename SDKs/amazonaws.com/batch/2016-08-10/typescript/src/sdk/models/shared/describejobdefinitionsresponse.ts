import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobDefinition } from "./jobdefinition";


export class DescribeJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobDefinitions", elemType: shared.JobDefinition })
  jobDefinitions?: JobDefinition[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
