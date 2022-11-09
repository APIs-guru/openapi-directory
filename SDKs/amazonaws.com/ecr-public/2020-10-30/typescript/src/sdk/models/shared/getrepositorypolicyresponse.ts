import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRepositoryPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyText" })
  policyText?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
