import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionConfiguration } from "./functionconfiguration";


export class UpdateFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionConfiguration" })
  functionConfiguration?: FunctionConfiguration;
}
