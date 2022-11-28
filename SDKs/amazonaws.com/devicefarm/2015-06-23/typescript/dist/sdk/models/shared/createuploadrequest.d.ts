import { SpeakeasyBase } from "../../../internal/utils";
import { UploadTypeEnum } from "./uploadtypeenum";
/**
 * Represents a request to the create upload operation.
**/
export declare class CreateUploadRequest extends SpeakeasyBase {
    contentType?: string;
    name: string;
    projectArn: string;
    type: UploadTypeEnum;
}
