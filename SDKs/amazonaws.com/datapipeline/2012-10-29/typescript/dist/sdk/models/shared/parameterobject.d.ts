import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterAttribute } from "./parameterattribute";
/**
 * Contains information about a parameter object.
**/
export declare class ParameterObject extends SpeakeasyBase {
    attributes: ParameterAttribute[];
    id: string;
}
