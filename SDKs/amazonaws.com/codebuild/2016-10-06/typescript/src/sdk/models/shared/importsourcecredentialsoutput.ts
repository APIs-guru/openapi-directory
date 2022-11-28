import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportSourceCredentialsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;
}
