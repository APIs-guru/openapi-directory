import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PythonScript" })
  pythonScript?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalaCode" })
  scalaCode?: string;
}
