import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopContinuousExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=stopTime" })
  stopTime?: Date;
}
