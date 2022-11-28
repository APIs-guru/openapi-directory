import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
export declare class PutImageTagMutabilityRequest extends SpeakeasyBase {
    imageTagMutability: ImageTagMutabilityEnum;
    registryId?: string;
    repositoryName: string;
}
