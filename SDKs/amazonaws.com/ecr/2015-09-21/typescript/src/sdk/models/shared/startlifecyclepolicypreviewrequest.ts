import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartLifecyclePolicyPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
