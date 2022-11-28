import { SpeakeasyBase } from "../../../internal/utils";
import { UploadCategoryEnum } from "./uploadcategoryenum";
import { UploadStatusEnum } from "./uploadstatusenum";
import { UploadTypeEnum } from "./uploadtypeenum";
/**
 * An app or a set of one or more tests to upload or that have been uploaded.
**/
export declare class Upload extends SpeakeasyBase {
    arn?: string;
    category?: UploadCategoryEnum;
    contentType?: string;
    created?: Date;
    message?: string;
    metadata?: string;
    name?: string;
    status?: UploadStatusEnum;
    type?: UploadTypeEnum;
    url?: string;
}
