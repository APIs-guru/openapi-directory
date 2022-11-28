import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionDetail } from "./gamesessiondetail";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeGameSessionDetailsOutput extends SpeakeasyBase {
    gameSessionDetails?: GameSessionDetail[];
    nextToken?: string;
}
