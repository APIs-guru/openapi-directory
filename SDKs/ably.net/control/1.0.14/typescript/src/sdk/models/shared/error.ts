import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode: number;
}
