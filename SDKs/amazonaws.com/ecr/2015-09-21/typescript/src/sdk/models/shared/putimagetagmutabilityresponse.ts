import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";



export class PutImageTagMutabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
