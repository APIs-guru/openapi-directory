import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentParameter } from "./componentparameter";
/**
 *  Configuration details of the component.
**/
export declare class ComponentConfiguration extends SpeakeasyBase {
    componentArn: string;
    parameters?: ComponentParameter[];
}
