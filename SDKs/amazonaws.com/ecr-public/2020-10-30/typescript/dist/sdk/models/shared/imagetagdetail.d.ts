import { SpeakeasyBase } from "../../../internal/utils";
import { ReferencedImageDetail } from "./referencedimagedetail";
/**
 * An object representing the image tag details for an image.
**/
export declare class ImageTagDetail extends SpeakeasyBase {
    createdAt?: Date;
    imageDetail?: ReferencedImageDetail;
    imageTag?: string;
}
