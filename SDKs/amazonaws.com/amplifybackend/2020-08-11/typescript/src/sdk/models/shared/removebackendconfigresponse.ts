import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveBackendConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: string;
}
