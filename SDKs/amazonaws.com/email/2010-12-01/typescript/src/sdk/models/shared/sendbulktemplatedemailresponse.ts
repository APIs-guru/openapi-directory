import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailDestinationStatus } from "./bulkemaildestinationstatus";



export class SendBulkTemplatedEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BulkEmailDestinationStatus })
  status: BulkEmailDestinationStatus[];
}
