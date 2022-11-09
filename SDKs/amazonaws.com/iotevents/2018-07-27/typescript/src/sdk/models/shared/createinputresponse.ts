import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputConfiguration } from "./inputconfiguration";


export class CreateInputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfiguration" })
  inputConfiguration?: InputConfiguration;
}
