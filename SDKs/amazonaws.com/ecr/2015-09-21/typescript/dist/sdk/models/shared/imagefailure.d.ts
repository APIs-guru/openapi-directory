import { SpeakeasyBase } from "../../../internal/utils";
import { ImageFailureCodeEnum } from "./imagefailurecodeenum";
import { ImageIdentifier } from "./imageidentifier";
/**
 * An object representing an Amazon ECR image failure.
**/
export declare class ImageFailure extends SpeakeasyBase {
    failureCode?: ImageFailureCodeEnum;
    failureReason?: string;
    imageId?: ImageIdentifier;
}
