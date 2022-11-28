import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PythonScript" })
  pythonScript?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalaCode" })
  scalaCode?: string;
}
