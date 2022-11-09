import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastEvaluatedAt" })
  lastEvaluatedAt?: Date;

  @Metadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
