import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";



export class SourceDefinitionSpecificationRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionSpecification" })
  connectionSpecification?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}
