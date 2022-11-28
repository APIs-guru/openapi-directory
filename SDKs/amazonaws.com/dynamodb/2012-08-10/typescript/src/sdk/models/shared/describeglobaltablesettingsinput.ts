import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeGlobalTableSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;
}
