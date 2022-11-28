import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadLayerPartRequest extends SpeakeasyBase {
    layerPartBlob: string;
    partFirstByte: number;
    partLastByte: number;
    registryId?: string;
    repositoryName: string;
    uploadId: string;
}
