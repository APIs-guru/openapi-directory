import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";
export declare class ListConnectionsOutput extends SpeakeasyBase {
    connections?: Connection[];
    nextToken?: string;
}
