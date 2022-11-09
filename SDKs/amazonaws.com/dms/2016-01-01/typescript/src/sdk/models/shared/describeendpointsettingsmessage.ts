import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEndpointSettingsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineName" })
  engineName: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
