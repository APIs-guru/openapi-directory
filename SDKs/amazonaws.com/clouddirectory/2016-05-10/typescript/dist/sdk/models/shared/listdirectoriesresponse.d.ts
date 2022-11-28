import { SpeakeasyBase } from "../../../internal/utils";
import { Directory } from "./directory";
export declare class ListDirectoriesResponse extends SpeakeasyBase {
    directories: Directory[];
    nextToken?: string;
}
