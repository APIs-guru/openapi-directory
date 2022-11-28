import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionList } from "./functionlist";



export class ListFunctionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionList?: FunctionList;
}
