import { SpeakeasyBase } from "../../../internal/utils";
import { CreatedArtifact } from "./createdartifact";
export declare class ListCreatedArtifactsResult extends SpeakeasyBase {
    createdArtifactList?: CreatedArtifact[];
    nextToken?: string;
}
