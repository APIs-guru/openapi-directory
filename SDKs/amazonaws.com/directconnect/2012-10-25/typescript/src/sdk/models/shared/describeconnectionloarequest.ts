import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";


export class DescribeConnectionLoaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;
}
