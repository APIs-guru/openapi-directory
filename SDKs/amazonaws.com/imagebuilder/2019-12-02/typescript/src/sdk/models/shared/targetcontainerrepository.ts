import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerRepositoryServiceEnum } from "./containerrepositoryserviceenum";


// TargetContainerRepository
/** 
 * The container repository where the output container image is stored.
**/
export class TargetContainerRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=service" })
  service: ContainerRepositoryServiceEnum;
}
