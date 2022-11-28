import { SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunctionInput } from "./userdefinedfunctioninput";
export declare class CreateUserDefinedFunctionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    functionInput: UserDefinedFunctionInput;
}
