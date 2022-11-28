import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompleteLayerUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerDigests" })
  layerDigests: string[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;
}
