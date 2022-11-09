import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutImageRequest extends SpeakeasyBase {
    imageDigest?: string;
    imageManifest: string;
    imageManifestMediaType?: string;
    imageTag?: string;
    registryId?: string;
    repositoryName: string;
}
