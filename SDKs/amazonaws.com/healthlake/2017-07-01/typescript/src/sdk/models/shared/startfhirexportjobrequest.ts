import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputDataConfig } from "./outputdataconfig";



export class StartFhirExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;
}
