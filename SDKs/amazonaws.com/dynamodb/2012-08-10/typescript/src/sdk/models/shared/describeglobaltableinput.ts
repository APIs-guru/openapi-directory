import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGlobalTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;
}
