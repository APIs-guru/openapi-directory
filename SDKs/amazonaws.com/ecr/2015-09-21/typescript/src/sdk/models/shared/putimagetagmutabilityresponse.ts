import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";


export class PutImageTagMutabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
