import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreatedArtifact } from "./createdartifact";
export declare class AssociateCreatedArtifactRequest extends SpeakeasyBase {
    createdArtifact: CreatedArtifact;
    dryRun?: boolean;
    migrationTaskName: string;
    progressUpdateStream: string;
}
