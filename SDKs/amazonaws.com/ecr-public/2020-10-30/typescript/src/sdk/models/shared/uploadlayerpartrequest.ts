import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadLayerPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerPartBlob" })
  layerPartBlob: string;

  @SpeakeasyMetadata({ data: "json, name=partFirstByte" })
  partFirstByte: number;

  @SpeakeasyMetadata({ data: "json, name=partLastByte" })
  partLastByte: number;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;
}
