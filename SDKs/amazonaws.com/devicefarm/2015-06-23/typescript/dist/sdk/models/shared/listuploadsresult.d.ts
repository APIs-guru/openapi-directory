import { SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";
/**
 * Represents the result of a list uploads request.
**/
export declare class ListUploadsResult extends SpeakeasyBase {
    nextToken?: string;
    uploads?: Upload[];
}
