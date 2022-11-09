import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";


export class UpdateTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @Metadata({ data: "json, name=TrustId" })
  trustId: string;
}
