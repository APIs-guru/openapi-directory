import { SpeakeasyBase } from "../../../internal/utils";
import { MatchItem } from "./matchitem";
export declare class GetMatchesResponse extends SpeakeasyBase {
    matchGenerationDate?: Date;
    matches?: MatchItem[];
    nextToken?: string;
    potentialMatches?: number;
}
