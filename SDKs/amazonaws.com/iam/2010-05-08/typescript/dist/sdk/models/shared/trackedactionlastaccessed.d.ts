import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
export declare class TrackedActionLastAccessed extends SpeakeasyBase {
    actionName?: string;
    lastAccessedEntity?: string;
    lastAccessedRegion?: string;
    lastAccessedTime?: Date;
}
