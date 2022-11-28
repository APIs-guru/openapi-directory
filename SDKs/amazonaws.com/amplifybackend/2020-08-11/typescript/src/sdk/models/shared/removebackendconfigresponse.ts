import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveBackendConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;
}
