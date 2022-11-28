import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartImportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=importUrl" })
  importUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
