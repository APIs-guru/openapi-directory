import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendApiAuthType } from "./backendapiauthtype";
import { BackendApiConflictResolution } from "./backendapiconflictresolution";
import { BackendApiAuthType } from "./backendapiauthtype";


// BackendApiResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class BackendApiResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType })
  additionalAuthTypes?: BackendApiAuthType[];

  @Metadata({ data: "json, name=ApiName" })
  apiName?: string;

  @Metadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: BackendApiConflictResolution;

  @Metadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: BackendApiAuthType;

  @Metadata({ data: "json, name=Service" })
  service?: string;

  @Metadata({ data: "json, name=TransformSchema" })
  transformSchema?: string;
}
