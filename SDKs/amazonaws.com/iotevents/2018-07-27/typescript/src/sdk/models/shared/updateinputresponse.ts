import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfiguration } from "./inputconfiguration";



export class UpdateInputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfiguration" })
  inputConfiguration?: InputConfiguration;
}
