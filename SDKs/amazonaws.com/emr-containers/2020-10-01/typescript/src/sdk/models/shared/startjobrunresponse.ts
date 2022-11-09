import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
