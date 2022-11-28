import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsoleOutputResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  output?: string;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
