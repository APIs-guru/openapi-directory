import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeregisterContainerInstanceRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstance: string;
    force?: boolean;
}
