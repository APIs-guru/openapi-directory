import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerRepositoryServiceEnum } from "./containerrepositoryserviceenum";



// TargetContainerRepository
/** 
 * The container repository where the output container image is stored.
**/
export class TargetContainerRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: ContainerRepositoryServiceEnum;
}
