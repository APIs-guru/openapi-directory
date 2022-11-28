import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessedUpdateAction } from "./processedupdateaction";
import { UnprocessedUpdateAction } from "./unprocessedupdateaction";



export class UpdateActionResultsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProcessedUpdateAction })
  processedUpdateActions?: ProcessedUpdateAction[];

  @SpeakeasyMetadata({ elemType: UnprocessedUpdateAction })
  unprocessedUpdateActions?: UnprocessedUpdateAction[];
}
