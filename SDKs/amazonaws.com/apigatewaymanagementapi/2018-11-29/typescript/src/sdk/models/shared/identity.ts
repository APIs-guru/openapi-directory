import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceIp" })
  sourceIp: string;

  @Metadata({ data: "json, name=UserAgent" })
  userAgent: string;
}
