import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
