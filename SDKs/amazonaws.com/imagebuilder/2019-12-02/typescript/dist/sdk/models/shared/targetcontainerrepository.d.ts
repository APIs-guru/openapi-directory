import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerRepositoryServiceEnum } from "./containerrepositoryserviceenum";
/**
 * The container repository where the output container image is stored.
**/
export declare class TargetContainerRepository extends SpeakeasyBase {
    repositoryName: string;
    service: ContainerRepositoryServiceEnum;
}
