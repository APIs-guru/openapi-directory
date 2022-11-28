import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionInput } from "./connectioninput";
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    catalogId?: string;
    connectionInput: ConnectionInput;
    name: string;
}
