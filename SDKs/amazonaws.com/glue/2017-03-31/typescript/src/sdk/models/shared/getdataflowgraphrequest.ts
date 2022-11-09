import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataflowGraphRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PythonScript" })
  pythonScript?: string;
}
