import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchCheckLayerAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerDigests" })
  layerDigests: string[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
