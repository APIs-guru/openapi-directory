import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrustResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=TrustId" })
  trustId?: string;
}
