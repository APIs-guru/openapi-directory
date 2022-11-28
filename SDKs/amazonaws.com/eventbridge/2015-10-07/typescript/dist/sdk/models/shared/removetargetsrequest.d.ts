import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveTargetsRequest extends SpeakeasyBase {
    eventBusName?: string;
    force?: boolean;
    ids: string[];
    rule: string;
}
