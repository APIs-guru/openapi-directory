import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;
}
