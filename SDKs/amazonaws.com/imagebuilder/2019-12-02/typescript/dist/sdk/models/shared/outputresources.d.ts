import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Ami } from "./ami";
import { Container } from "./container";
/**
 * The resources produced by this image.
**/
export declare class OutputResources extends SpeakeasyBase {
    amis?: Ami[];
    containers?: Container[];
}
