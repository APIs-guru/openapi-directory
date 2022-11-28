import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopContinuousExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=stopTime" })
  stopTime?: Date;
}
