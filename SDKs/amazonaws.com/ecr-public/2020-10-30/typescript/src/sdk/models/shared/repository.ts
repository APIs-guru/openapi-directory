import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Repository
/** 
 * An object representing a repository.
**/
export class Repository extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryArn" })
  repositoryArn?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=repositoryUri" })
  repositoryUri?: string;
}
