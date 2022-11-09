import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartImportTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=importUrl" })
  importUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
