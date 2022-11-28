import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendApiAuthType } from "./backendapiauthtype";
import { BackendApiConflictResolution } from "./backendapiconflictresolution";



// BackendApiResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class BackendApiResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: BackendApiAuthType })
  additionalAuthTypes?: BackendApiAuthType[];

  @SpeakeasyMetadata({ data: "json, name=ApiName" })
  apiName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: BackendApiConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: BackendApiAuthType;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformSchema" })
  transformSchema?: string;
}
