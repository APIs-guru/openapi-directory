import { SpeakeasyBase } from "../../../internal/utils";
import { BackendApiAuthType } from "./backendapiauthtype";
import { BackendApiConflictResolution } from "./backendapiconflictresolution";
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class BackendApiResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: BackendApiAuthType[];
    apiName?: string;
    conflictResolution?: BackendApiConflictResolution;
    defaultAuthType?: BackendApiAuthType;
    service?: string;
    transformSchema?: string;
}
