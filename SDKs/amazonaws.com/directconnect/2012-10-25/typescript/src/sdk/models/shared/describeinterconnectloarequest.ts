import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";



export class DescribeInterconnectLoaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId: string;

  @SpeakeasyMetadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;
}
