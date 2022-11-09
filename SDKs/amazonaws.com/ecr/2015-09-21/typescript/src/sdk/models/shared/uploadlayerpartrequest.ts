import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadLayerPartRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=layerPartBlob" })
  layerPartBlob: string;

  @Metadata({ data: "json, name=partFirstByte" })
  partFirstByte: number;

  @Metadata({ data: "json, name=partLastByte" })
  partLastByte: number;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;
}
