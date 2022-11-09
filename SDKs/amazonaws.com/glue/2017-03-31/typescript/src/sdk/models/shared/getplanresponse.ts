import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPlanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PythonScript" })
  pythonScript?: string;

  @Metadata({ data: "json, name=ScalaCode" })
  scalaCode?: string;
}
