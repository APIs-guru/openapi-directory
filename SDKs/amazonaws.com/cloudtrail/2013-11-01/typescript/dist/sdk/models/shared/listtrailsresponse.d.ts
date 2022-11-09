import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrailInfo } from "./trailinfo";
export declare class ListTrailsResponse extends SpeakeasyBase {
    nextToken?: string;
    trails?: TrailInfo[];
}
