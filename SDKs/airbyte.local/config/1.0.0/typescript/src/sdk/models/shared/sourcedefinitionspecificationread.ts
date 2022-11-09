import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SynchronousJobRead } from "./synchronousjobread";


export class SourceDefinitionSpecificationRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionSpecification" })
  connectionSpecification?: Map<string, any>;

  @Metadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @Metadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}
