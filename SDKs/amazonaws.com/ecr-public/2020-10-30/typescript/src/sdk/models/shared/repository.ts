import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Repository
/** 
 * An object representing a repository.
**/
export class Repository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryArn" })
  repositoryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryUri" })
  repositoryUri?: string;
}
