import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGlobalTableSettingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;
}
