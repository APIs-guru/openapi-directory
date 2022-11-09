import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";


export class DescribeInterconnectLoaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=interconnectId" })
  interconnectId: string;

  @Metadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;
}
