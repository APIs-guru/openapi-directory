import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";


export class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: LifecyclePolicyPreviewStatusEnum;
}
