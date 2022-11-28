import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelImportTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  importTaskId?: string;

  @SpeakeasyMetadata()
  previousState?: string;

  @SpeakeasyMetadata()
  state?: string;
}
