import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTrustResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId?: string;
}
