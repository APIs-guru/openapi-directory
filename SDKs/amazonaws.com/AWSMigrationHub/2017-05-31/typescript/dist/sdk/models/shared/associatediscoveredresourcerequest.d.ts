import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DiscoveredResource } from "./discoveredresource";
export declare class AssociateDiscoveredResourceRequest extends SpeakeasyBase {
    discoveredResource: DiscoveredResource;
    dryRun?: boolean;
    migrationTaskName: string;
    progressUpdateStream: string;
}
