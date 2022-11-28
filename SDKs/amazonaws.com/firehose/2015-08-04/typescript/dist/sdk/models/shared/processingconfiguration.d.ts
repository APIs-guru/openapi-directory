import { SpeakeasyBase } from "../../../internal/utils";
import { Processor } from "./processor";
/**
 * Describes a data processing configuration.
**/
export declare class ProcessingConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    processors?: Processor[];
}
