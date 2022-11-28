import { SpeakeasyBase } from "../../../internal/utils";
import { BundleTypeEnum } from "./bundletypeenum";
/**
 * Information about the location of application artifacts stored in Amazon S3.
**/
export declare class S3Location extends SpeakeasyBase {
    bucket?: string;
    bundleType?: BundleTypeEnum;
    eTag?: string;
    key?: string;
    version?: string;
}
