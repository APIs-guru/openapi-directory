import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
export declare class ImageDetail extends SpeakeasyBase {
    artifactMediaType?: string;
    imageDigest?: string;
    imageManifestMediaType?: string;
    imagePushedAt?: Date;
    imageSizeInBytes?: number;
    imageTags?: string[];
    registryId?: string;
    repositoryName?: string;
}
