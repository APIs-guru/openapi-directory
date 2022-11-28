import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLifecyclePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
