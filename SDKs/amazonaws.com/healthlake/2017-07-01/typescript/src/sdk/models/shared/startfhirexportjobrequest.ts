import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputDataConfig } from "./outputdataconfig";


export class StartFhirExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;
}
