import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateBlueprintRequest extends SpeakeasyBase {
    blueprintLocation: string;
    description?: string;
    name: string;
    tags?: Map<string, string>;
}
