import { SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { Tag } from "./tag";
/**
 * Represents the input of a <code>CreateApplication</code> operation.
**/
export declare class CreateApplicationInput extends SpeakeasyBase {
    applicationName: string;
    computePlatform?: ComputePlatformEnum;
    tags?: Tag[];
}
