import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
