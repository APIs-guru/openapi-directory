import { SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunctionInput } from "./userdefinedfunctioninput";
export declare class UpdateUserDefinedFunctionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    functionInput: UserDefinedFunctionInput;
    functionName: string;
}
