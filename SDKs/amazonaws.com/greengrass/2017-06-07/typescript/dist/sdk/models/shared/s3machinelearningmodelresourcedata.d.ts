import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";
/**
 * Attributes that define an Amazon S3 machine learning resource.
**/
export declare class S3MachineLearningModelResourceData extends SpeakeasyBase {
    destinationPath?: string;
    ownerSetting?: ResourceDownloadOwnerSetting;
    s3Uri?: string;
}
