import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEndpointSettingsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineName" })
  engineName: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
