import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";



export class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LifecyclePolicyPreviewStatusEnum;
}
