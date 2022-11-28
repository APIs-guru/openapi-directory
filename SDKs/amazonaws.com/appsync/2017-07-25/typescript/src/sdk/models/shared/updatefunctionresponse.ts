import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";



export class UpdateFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionConfiguration" })
  functionConfiguration?: FunctionConfiguration;
}
