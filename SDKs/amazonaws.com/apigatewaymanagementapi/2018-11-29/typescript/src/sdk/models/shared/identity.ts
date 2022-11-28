import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceIp" })
  sourceIp: string;

  @SpeakeasyMetadata({ data: "json, name=UserAgent" })
  userAgent: string;
}
