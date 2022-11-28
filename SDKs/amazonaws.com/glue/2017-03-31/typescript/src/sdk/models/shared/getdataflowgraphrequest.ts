import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataflowGraphRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PythonScript" })
  pythonScript?: string;
}
