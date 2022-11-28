import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";



export class CreateForecastExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: DataDestination;

  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobName" })
  forecastExportJobName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
