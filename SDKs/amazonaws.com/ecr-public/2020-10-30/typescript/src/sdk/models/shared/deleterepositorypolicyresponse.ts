import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRepositoryPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
