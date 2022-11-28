import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";



export class UpdateTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId: string;
}
