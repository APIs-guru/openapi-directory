import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";


export class CreateForecastExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination: DataDestination;

  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn: string;

  @Metadata({ data: "json, name=ForecastExportJobName" })
  forecastExportJobName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
