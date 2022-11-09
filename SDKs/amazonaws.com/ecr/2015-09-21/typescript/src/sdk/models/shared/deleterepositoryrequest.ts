import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
