import { SpeakeasyBase } from "../../../internal/utils";
import { UploadTypeEnum } from "./uploadtypeenum";
/**
 * Represents a request to the list uploads operation.
**/
export declare class ListUploadsRequest extends SpeakeasyBase {
    arn: string;
    nextToken?: string;
    type?: UploadTypeEnum;
}
