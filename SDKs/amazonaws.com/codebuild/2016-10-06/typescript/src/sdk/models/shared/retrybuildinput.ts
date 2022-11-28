import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetryBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
