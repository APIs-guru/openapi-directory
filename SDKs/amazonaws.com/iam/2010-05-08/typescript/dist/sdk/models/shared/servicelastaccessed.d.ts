import { SpeakeasyBase } from "../../../internal/utils";
import { TrackedActionLastAccessed } from "./trackedactionlastaccessed";
/**
 * <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
export declare class ServiceLastAccessed extends SpeakeasyBase {
    lastAuthenticated?: Date;
    lastAuthenticatedEntity?: string;
    lastAuthenticatedRegion?: string;
    serviceName: string;
    serviceNamespace: string;
    totalAuthenticatedEntities?: number;
    trackedActionsLastAccessed?: TrackedActionLastAccessed[];
}
