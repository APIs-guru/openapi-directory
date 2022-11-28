import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeKinesisStreamingDestinationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
