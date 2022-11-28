import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";



export class DescribeConnectionLoaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;
}
