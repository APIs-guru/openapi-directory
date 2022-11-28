import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunctionInput } from "./userdefinedfunctioninput";



export class UpdateUserDefinedFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionInput" })
  functionInput: UserDefinedFunctionInput;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;
}
