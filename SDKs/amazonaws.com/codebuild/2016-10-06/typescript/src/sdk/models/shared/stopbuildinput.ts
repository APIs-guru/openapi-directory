import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
