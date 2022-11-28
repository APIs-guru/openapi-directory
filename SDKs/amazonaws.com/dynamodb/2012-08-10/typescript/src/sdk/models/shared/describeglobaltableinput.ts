import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeGlobalTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;
}
