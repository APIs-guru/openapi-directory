import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetRepositoryPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
